import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import SingleFeature from './SingleFeature';


const Feature = () => {
    const [Feature, setfeature] = useState([])

    useEffect(()=>{
        fetch('/feature.json')
        .then(res=>res.json())
        .then(data => setfeature(data))
    },[])
    
    const filterdata = () => {

        
         setfeature(Feature.slice(0,3))
    }
     
   
    // console.log(Feature);
    // const sayem = useContext(Contex)
    
    return (
        <div className='py-12'>
            <div className='py-28 text-center'> 
                <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 justify-center gap-12'>
                 {
                    Feature.map(sF => <SingleFeature
                    key={sF.id}
                    sF = {sF}
                    ></SingleFeature>)
                 }
            </div>
            <button onClick={filterdata()}  className='px-12 py-5 text-white bg-black mx-auto' >see all</button>
        </div>
    );
};

export default Feature;