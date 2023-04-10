import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';


const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch("category.json")
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    // console.log(category);
    return (
        <div className=''>

            <div className='text-center py-20'>
                <h1 className='text-4xl font-bold'>Job Category List</h1>


                <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='  flex justify-evenly gap-4'>
                {
                    category.map(singleC => <SingleCategory
                        key={singleC.id}
                        singleC={singleC}
                    ></SingleCategory>)
                }
            </div>

        </div>
    );
};

export default Category;