import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () =>{
        fetch('https://genius-car-server-selim.vercel.app/services')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
        <div className='mb-4 text-center'>
            <p className="text-2xl font-bold text-orange-600">Service</p>
            <h2 className="text-5xl font-semibold">Our Service Area</h2>
            <p>the majoriy have suffered alteration  in some form, <br /> by injected humour or
                randomised words donot look even slightly believable
            </p>
            </div>
            <div className='grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 lg:grid-cols-3'>
                
                
                {
                    services.map(service => <ServiceCard key={service._id}
                    service={service}></ServiceCard>)
                }
            </div>
            <div className='mb-10 text-center'>
            <button className="btn btn-outline btn-accent">More Services..</button>
            </div>
        </div>
        
    );
};

export default Services;