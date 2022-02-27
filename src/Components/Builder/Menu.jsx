import React, { useEffect, useState } from 'react'
import { SPOONACULAR_API } from '../../Utils/API'
import { useDispatch, useSelector } from 'react-redux'
import { addcartproduct, removecartproduct } from '../../Redux/actions';
const Menu = () => {

  const [menuitems, setmenuitems] = useState([]);
  const [loading, setloading] = useState(true);

  const { cartItems } = useSelector(state => state)
  const dispatch = useDispatch();


  useEffect(() => {

    setloading(true);
    if (menuitems.length > 0) {
      return;
    }


    random_recipes();
  }, [])


  const random_recipes = async () => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    let url = `${SPOONACULAR_API}?query=${randomCharacter}&number=20&apiKey=${process.env.REACT_APP_API_KEY}`;

    try {
      const recipes = await fetch(url)
      const recipes_json = await recipes.json();



      recipes_json.menuItems.map(menu => {

        var price = Math.floor(100 + Math.random() * 900);
        menu.items = 1;
        menu.price = price;
        menu.baseprice = price;
      })

      setmenuitems(recipes_json.menuItems)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }

  }

  const handleincrement = (menuid) => {

    const result = menuitems.findIndex(({ id }) => id === menuid);
    const menuitems_array = [...menuitems];
    if (menuitems_array[result].items >= 1 && menuitems_array[result].items < 10) {
      menuitems_array[result].items++;
      menuitems_array[result].price = menuitems_array[result].baseprice * (menuitems_array[result].items);
      setmenuitems(menuitems_array)
    }

  }

  const handledecrement = (menuid) => {
    const result = menuitems.findIndex(({ id }) => id === menuid);
    const menuitems_array = [...menuitems];
    if (menuitems_array[result].items >= 2 && menuitems_array[result].items <= 10) {
      menuitems_array[result].items--;
      menuitems_array[result].price = menuitems_array[result].baseprice * (menuitems_array[result].items);

      setmenuitems(menuitems_array)
    }

  }

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

  if(!loading && menuitems.length == 0){
    return(
      <h2 className="flex justify-center mb-32 mt-10 text-2xl">There must be something wrong with API, If you are reading this message, contact the developer <a className='text-blue-600 underline ml-3' href="https://twitter.com/anirket"> here</a></h2>
    )
  }


  return (
    <div className='menuwrapper flex justify-center  w-full flex-wrap items-center'>

      {
        menuitems.map((menu) => (

          <div key={menu.id} className="foodcard   border-2 m-4 rounded-xl  cursor-pointer flex flex-col justify-center items-center">

            <img onError={addDefaultSrc} className=' w-72 h-56 p-4' src={menu.image} alt="" />
            <div className="details text-center text-xl w-56 m-2 text-black p-4 font-semibold rounded-lg">

              <h2>{menu.title.length > 15 ? menu.title.substr(0, 15) + "..." : menu.title}</h2>
              <h5 className="text-xs pt-2 text-gray-800">{menu.restaurantChain}</h5>
              <div className="flex justify-center pt-4">
                <div className="Items  w-32  flex justify-around items-center">
                  <button onClick={() => handleincrement(menu.id)} className="bg-gray-600 px-2 text-2xl text-white">
                    +
                  </button>
                  <span>
                    {menu.items}
                  </span>
                  <button onClick={() => handledecrement(menu.id)} className="bg-gray-600 px-2 text-2xl text-white">
                    -
                  </button>
                </div>
              </div>

              <div className="price pt-5">
                <h2>₹ {menu.price}</h2>

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

  )
}

export default Menu