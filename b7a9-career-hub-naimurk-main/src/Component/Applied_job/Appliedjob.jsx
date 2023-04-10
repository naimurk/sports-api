import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SignleAppliedCart from './SignleAppliedCart';

const Appliedjob = () => {
    const data = useLoaderData()
    const [main , setMain] =useState([])
    // setMain(data)
    
    

    
    return (
        <div className='flex flex-col gap-y-8'>
             {
                data.map(singleD => <SignleAppliedCart
                key={singleD.id}
                singleD = {singleD}
                ></SignleAppliedCart>)
             }
        </div>
    );
};

export default Appliedjob;