import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Banner = () => {

  const { cartItems } = useSelector(state => state)


  const scroll = () => {
    const section = document.querySelector('.menuwrapper');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <>
      <div className="headerwrapper">
        <div className="flex justify-between items-center">

          <div className="Header w-24 p-3 flex items-center justify-between ">
            <div className="flex items-center">
              <img src="./logo.png" alt="" />
              <h2 className="logoheader font-semibold">SWIDDLE</h2>
            </div>

          </div>
          <Link to="/cart">
            <div className="text-2xl mr-4 border-2 rounded-lg border-gray-800 flex items-center cursor-pointer">
              <FaShoppingCart className="ml-2" />
              <h2 className='ml-5 border-l-2 p-2'>
                {cartItems.length}
              </h2>
            </div>
          </Link>
        </div>


        <div className='h-1  bg-gray-400'>
        </div>
      </div>

      <div className="mainpage">

        <div className='caraouselwrapper flex flex-col md:pt-0 pt-10 md:flex-row md:justify-between  items-center'>
          <div className="pl-10 text-3xl md:text-6xl font-bold">
            <h2 className=" w-11/12">
              Delicious food for your cravings!
            </h2>
            <div className="menubutton text-2xl bg-black text-white w-60 p-4 mt-10 rounded-l-3xl rounded-tr-3xl">
              <button onClick={scroll} className=" flex justify-between items-center w-52"><span>View Menu</span> <AiOutlineArrowRight /></button>
            </div>

          </div>
          <div className='caraousel md:pr-10'>
            <Carousel autoPlay={true} interval={2000} stopOnHover={true}>
              <div>
                <img className='homedisplayimage' src="./foodimages/homepage.jpg" />
              </div>
              <div>
                <img className='homedisplayimage' src="./foodimages/food2.png" />
              </div>
              <div>
                <img className='homedisplayimage' src="./foodimages/food3.jpg" />
              </div>

              <div>
                <img className='homedisplayimage' src="./foodimages/food4.jpeg" />
              </div>
              <div>
                <img className='homedisplayimage' src="./foodimages/food5.jpg" />
              </div>
            </Carousel>

          </div>
        </div>



      </div>
    </>
  )
}

export default Banner