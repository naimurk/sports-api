import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Contex } from '../Header/Header';

// import { featureDe } from './FeatureDetails';


const SingleFeature = ({sF}) => {
    const {id,featureDe} = useContext(Contex)
    // console.log(id,featureDe);
    
    return (
        <div className='border p-5 rounded'>
            <img  src={sF.img} alt="" />
            <h1 className='text-xl font-bold mt-4'>{sF.jobTitle}</h1>
            <div className='flex my-4 text-purple-400 gap-x-6'>
                <p className=' border-2 border-purple-200 rounded-lg px-4 py-2' >{sF.jobType}</p>
                <p className=' border-2 border-purple-200 rounded-lg px-4 py-2' >{sF.time}</p>
            </div>
            <div className='flex gap-x-6 pb-4'>
                <p><FontAwesomeIcon icon={faLocationDot} /> {sF.location}</p>
                <p><FontAwesomeIcon icon={faDollarSign} /> salary: {sF.salary}</p>
            </div>
            <Link to = {`/feature/${sF.id}`}>
              <button onClick={()=>featureDe(sF.id)} className='btn px-5 py-3 rounded-md text-white bg-purple-500'>View Details</button>
            </Link>
        </div>
    );
};

export default SingleFeature;