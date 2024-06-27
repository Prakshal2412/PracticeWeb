import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
    const item =useLoaderData();
    console.log(item)

  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <article>
            <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>

            <picture>
                <img src={item.thumbnail_image} alt="" className='md:max-w-[90%[ w-full md:h-[570px] md:rounded-xl md:mx-auto'/>
            </picture>
            <div className='px-8'>
                <h1 className='text-4xl mt-12 text-[#1b2629]'>{item.name}</h1>
                <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt ab autem ullam dolorum similique saepe error quidem nam.</p>

                <article className='bg-rose-50 mt-6 p-5 rounded'>
                    <h2 className='text-xl font-semibold ml-2'>Preparation time</h2>
                    <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                        <li className='pl-3 mt-3'>
                            <p>
                                <span>Total: </span><span>25 minutes</span>
                            </p>
                        </li>
                        <li className='pl-3 mt-3'>
                            <p>
                                <span>Preparation: </span><span>25 minutes</span>
                            </p>
                        </li>
                        <li className='pl-3 mt-3'>
                            <p>
                                <span>Cooking: </span><span>{item?.more.cook_time}</span>
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
            </div>
        </article>
    </section>
  )
}

export default SingleProduct