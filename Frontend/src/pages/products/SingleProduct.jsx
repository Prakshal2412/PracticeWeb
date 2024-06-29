import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
    const item =useLoaderData();

    useEffect(()=>{
        window.scrollTo(0,0);
    })

  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <article>
            <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>

            <picture>
                <img src={item.thumbnail_image} alt="" className='md:max-w-[90%[ w-full md:h-[570px] md:rounded-xl md:mx-auto'/>
            </picture>
            <div className='px-8'>
                <h1 className='text-4xl mt-12 text-[#1b2629]'>{item.name}</h1>
                <p className='mt-6'>Lorem ipsum dolor elit. Aut nesciunt ab autem ullam dolorum similique saepe error quidem nam.</p>

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
                                <span>Preparation: </span><span>10 minutes</span>
                            </p>
                        </li>
                        <li className='pl-3 mt-3'>
                            <p>
                                <span>Cooking: </span><span>15 Minutes</span>
                            </p>
                        </li>
                    </ul>
                </article>
                <div className="mt-5">
                    <h3 className='text-xl font-semibold ml-2'>Preparation time</h3>
                    <ul className='list-disc marker:text-blue-500 mt-4 ml-6 text-[#1b2629] marker:align-middle'>
                        {
                            item?.ingredients.map((ingredient,index)=>(
                                <li key={index} className='pl-4 mt-2'>
                                    <span>{ingredient?.name}: </span>
                                    <span>{ingredient?.quantity}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </div>
        </article>
    </section>
  )
}

export default SingleProduct