import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CategoryWrapper from './CategoryWrapper';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const {category} =useParams();
    console.log(category)
    const [items,setItems]=useState([]);
    const [loading,setLoading] =useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
      const fetchCategoryData = async()=>{
        setLoading(true);

        try{
          const response=await axios.get(`http://localhost:5000/api/categories/${category}`);
          setItems(response.data);
        }catch(error){
          setError(error.message||"Error Loading category");
        }
      }
      fetchCategoryData()
    },[category])

  return (
    <div className='px-6 lg:px-12 py-20'>
     <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-5xl sm:leading-relaxed capitalize'>
       {category}
     </h1>
     <CategoryWrapper/>

     <ul>
      {
        items && items?.map(item=>(
          <li key={items._id}>{item.name}</li>
        ))
      }
     </ul>
    </div>
  )
}

export default CategoryPage