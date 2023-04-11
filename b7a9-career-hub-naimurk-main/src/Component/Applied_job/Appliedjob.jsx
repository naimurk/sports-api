import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SignleAppliedCart from './SignleAppliedCart';
// import { sayem } from '../../utilities';

const Appliedjob = () => {
    const [main, setmain] =useState([])
    const data = useLoaderData()
    useEffect(()=>{
     setmain(data)

    },[])
    
    
    
    const Remotefilter = () => {
        
        const filter = main.filter(Sd => Sd.jobType == "Remote")
        setmain(filter)
       
    }
  
    

    return (
       <dir>
        <button onClick={()=>Remotefilter()} className='p-5 bg-black text-white'>hello</button>
         <div className='flex flex-col gap-y-8'>
             {
                main.map(singleD => <SignleAppliedCart
                key={singleD.id}
                singleD = {singleD}
                ></SignleAppliedCart>)
             }
        </div>
       </dir>
    );
};

export default Appliedjob;