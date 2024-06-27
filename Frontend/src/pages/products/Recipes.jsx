import React, { useEffect, useState } from 'react'
import  Axios  from 'axios'
import CategoryWrapper from '../category/CategoryWrapper'
import Card from '../../components/Card';
const Recipes = () => {
    const [items,setitems]=useState([]);
    useEffect(()=>{
        const getLatestItems =async()=>{
            const  response =await Axios.get('http://localhost:5000/api/all-items');
            setitems(response.data);
        }
        getLatestItems()
    },[])
  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl mb-8 text-center sm:text-5xl font-semibold text-[#1b2629]'>All Recipes</h1>
        <CategoryWrapper/>  

        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:griid-cols-4 gap-8'>
            {
                items.map((item)=>(
                    <Card key={item._id} item={item}/>
                ))
            }
        </ul>  
    </div>
  )
}

export default Recipes