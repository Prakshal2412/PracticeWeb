import React from 'react'
import AboutImg from "../../assets/Cook.jpg"
const AboutSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-12 px-5 lg:px-10 h-75'>
        

        <div className='text-start sm:w-1/2'>
          <h2 className='text-5xl font-semibold text-black sm:text:6xl sm:leading-relaxed'>Vegan foodie who loves to experiment with recipes</h2>
          <p className='text-xl mt-4 text-[#5c5c5c]'>
            Lorem ipsum dolot Lorem, ipsum. adipisicing elit. Saepe quos omnis sed enim dicta eaque nostrum nisi officia quidem molestiae.
            <br/><br/>
            Lorem  sit amet consectetur adipisicing elit. Culpa distinctio aliquid eaque laudantium eius, minima quibusdam maiores est aspernatur dignissimos!
          </p>
          <div className='lg:mt-0 lg:flex-shrink-0'>
            <div className='mt-4 inline-flex'>
              <button className='py-4 px-2 bg-btnColor text-black hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
            </div>
          </div>
        </div>

        <div className='relative w-1/2 h-[1/3]'>
          <img src={AboutImg} alt="Featured image" className='rounded-md object-contain'/>
        </div>
    </div>
  )
}

export default AboutSection