import React from 'react'

const Subscription = () => {
  return (
    <div className='bg-white py-16 rounded-t-md'>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
                {/* left text */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-20">
                <div className='md:w-1/2'>
                <h3 className='text-3xl font-bold tracki9ng-tight text-black sm:text-4xl'>
                    Subscribe to our newsletter
                </h3>
                <p className='mt-4 text-lg leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in dolores nemo quaerat nihil porro deserunt mollitia! Ipsam.
                </p>

                </div>
                <div className='sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4'>
            <label htmlFor="email-address" className='sr-only'>
                Email Address
            </label>
            <input className='flex-auto rounded-md border-0 bg-white px-3 shadow-sm sm:text-sm sm:leading-6 focus:outline-btnColor' name="email" autoComplete="email" required type="email" placeholder='Enter email'/>
            <button className='flex-none rounded-md bg-black px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-btnColor hover:border' type='Submit'>Subscribe Us</button>
            
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default Subscription