import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcartproduct, removecartproduct } from '../Redux/actions';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';


const Cart = () => {



    const { cartItems } = useSelector(state => state)
    const dispatch = useDispatch();

    const [totalprice, settotalprice] = useState(0);

    const [menuitems, setmenuitems] = useState([]);



    useEffect(() => {
        setmenuitems(cartItems)

        let price = 0;
        cartItems.map((items) => {
            price += items.price
        })
        settotalprice(price)

    }, [cartItems])






    const addtocart = (menuid) => {
        const result = menuitems.find(({ id }) => id === menuid);
        dispatch(addcartproduct(result))
    }

    const removefromcart = (menuid) => {
        const result = menuitems.find(({ id }) => id === menuid);
        dispatch(removecartproduct(result.id))

    }

    const addDefaultSrc = (ev) => {
        ev.target.src = './logo.png'
    }


    const handletoken = () => {

    }

    return (

        <>

            <div className="bg-gray-600 p-4 text-white text-2xl text-center pt-5 md:mx-20 mx-10 rounded-b-2xl mb-10">
                <h2>Your Cart Items : </h2>
            </div>
            <div className='menuwrapper flex justify-center  w-full flex-wrap items-center'>



                {

                    menuitems.map((menu) => (

                        <div key={menu.id} className="foodcard   border-2 m-4 rounded-xl  cursor-pointer flex flex-col justify-center items-center">

                            <img onError={addDefaultSrc} className=' w-72 h-56 p-4' src={menu.image} alt="" />
                            <div className="details text-center text-xl w-56 m-2 text-black p-4 font-semibold rounded-lg">

                                <h2>{menu.title.length > 15 ? menu.title.substr(0, 15) + "..." : menu.title}</h2>
                                <h5 className="text-xs pt-2 text-gray-800">{menu.restaurantChain}</h5>

                                <div className="price pt-5">
                                    <h2>₹ {menu.price}</h2>

                                </div>
                                <div className="price pt-5 text-sm">
                                    <h2>Qualtity - {menu.items}</h2>

                                </div>


                                {
                                    cartItems.includes(menu) ?

                                        (
                                            <button onClick={() => removefromcart(menu.id)} className="mt-5 bg-red-800 w-52 text-white p-2 rounded-xl">Remove from cart</button>

                                        )
                                        :
                                        (
                                            <button onClick={() => addtocart(menu.id)} className="mt-5 bg-gray-800 w-52 text-white p-2 rounded-xl">Add to cart</button>
                                        )
                                }
                            </div>
                        </div>

                    ))
                }

            </div>

            {
                (cartItems.length == 0) &&

                (
                    <div className='flex justify-center text-xl'>
                        Add Items in Cart to Checkout :)
                    </div>
                )
            }

            {
                (cartItems.length > 0) &&

                (<>
                    <div className=' flex justify-center '>
                        <div className="flex justify-center mt-10 border-2 w-80 font-bold hover:bg-black rounded-xl hover:text-white cursor-pointer ">
                            <div className='p-4'>
                                SWIDDLE CART TOTAL
                            </div>
                            <div className='ml-2 border-l-2 p-4 flex'>
                                ₹ {totalprice}
                            </div>
                        </div>
                    </div>

                    <div className="pb-5 pt-5 text-2xl flex justify-center">
                        <StripeCheckout
                            token={handletoken}
                            stripeKey="pk_test_51Hey1yBTLqdejHDNhlIr9mrEfD9kqRfZEBCl6LSfWpLBGmloxpOH1fUHCU468R5EtfwdtFvyJ4F9lQ5xnJ3xfBfF000hTuVCW4"
                            billingAddress
                            shippingAddress
                            amount={(totalprice / 70) * 100} />
                    </div>

                </>
                )

            }

            <div className="flex justify-center mt-10 mb-10">
                <Link to="/">
                    <button className="bg-gray-800 p-3 text-white rounded-xl tracking-wide flex justify-between items-center"> <AiOutlineArrowLeft className="mr-3" /> Go Back </button>
                </Link>
            </div>
        </>
    )
}

export default Cart