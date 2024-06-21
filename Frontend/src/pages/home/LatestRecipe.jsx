import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Axios from 'axios'
import { Link } from 'react-router-dom'
const LatestRecipe = () => {
    const [items,setitems]=useState([])
    useEffect(()=>{
        const getLatestItems =async()=>{
            const  response =await Axios.get('http://localhost:5000/api/all-items');
            setitems(response.data);
        }
        getLatestItems()
    },[])
  return (
    <div className='px-5 xl:px-10 py-16'>
        <h2 className='text-3xl mb-8 font-semibold text-black sm:text-5xl sm:leading-relaxed'>
            Latest Recipes
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                items.length >0 ? items.slice(0,4).map((item,index)=>(
                    <Card key={item._id} item={item}/>
                )):<p>Loading...</p>
            }
        </div>

        <div>
            <Link to="/recipes">
            <button className='py-4 px-8 mt-5 hover:bg-btnColor hover:text-white text-black w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>
                View All Recipes
            </button></Link>
        </div>
    </div>
  )
}

export default LatestRecipe