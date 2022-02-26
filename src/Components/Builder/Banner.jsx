import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { AiOutlineArrowRight } from "react-icons/ai";



const Banner = () => {

  const apikey = "02d28dbbd0d04c0da034ea324932d2f7";
  let url = `https://api.spoonacular.com/food/menuItems/search?query=a&number=15&apiKey=${apikey}`;


  useEffect(() => {
    fetch(url)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      console.log(res)
    })


  }, [])

  return (
    <>
      <div className="headerwrapper">
        <div className="Header w-24 p-3 flex items-center">
          <img src="./logo.png" alt="" />
          <h2 className="logoheader font-semibold">SWIDDLE</h2>
        </div>
        <div className='h-1  bg-gray-400'>
        </div>
      </div>

      <div className="mainpage">

        <div className='caraouselwrapper flex flex-col-reverse md:flex-row md:justify-between  items-center'>
          <div className="pl-10 text-3xl md:text-6xl font-bold">
            <h2 className=" w-11/12">
              Delicious food for your cravings!
            </h2>
            <div className="menubutton text-2xl bg-black text-white w-60 p-4 mt-10 rounded-l-3xl rounded-tr-3xl">
              <button className=" flex justify-between items-center w-52"><span>View Menu</span> <AiOutlineArrowRight /></button>
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