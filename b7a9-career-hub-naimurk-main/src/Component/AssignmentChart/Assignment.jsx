import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { LineChart } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Assignment = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h1 className='text-4xl font-bold my-12 text-center'>Visualize my previous marks</h1>
            <div className='flex justify-center mt-5 items-center'>
             <div>
             <LineChart width={500} height={400} data={data} >
                <Line dataKey={'marks'} stroke="#8884d8" ></Line>
                <XAxis dataKey='assignment'>Assignment no</XAxis>
                <YAxis ></YAxis>
                <Tooltip />
            </LineChart>
             </div>
        </div>
        </div>
    );
};

export default Assignment;