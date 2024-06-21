import React from 'react'
import FeaturedImg from "../../assets/Pizza.jpg"

const FeaturedSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-12 px-5 lg:px-10'>
        <div className='relative w-1/2'>
          <div className='absolute top-4 left-5 bg-white text-black px-3 py-1 rounded-md uppercase tracking-wider'>
            Featured Recipe
          </div>
          <img src={FeaturedImg} alt="Featured image" className='rounded-md object-contain'/>
        </div>

        <div className='text-start sm:w-1/2'>
          <h2 className='text-5xl font-semibold text-black sm:text:6xl sm:leading-relaxed'>Pineapple + Smoked<br/> Jackfruit Pizza</h2>
          <p className='text-xl mt-4 text-[#5c5c5c]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos omnis sed enim dicta eaque nostrum nisi officia quidem molestiae.
          </p>
          <div className='lg:mt-0 lg:flex-shrink-0'>
            <div className='mt-4 inline-flex'>
              <button className='py-4 px-2 hover:bg-btnColor text-black hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FeaturedSection