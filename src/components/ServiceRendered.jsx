import React from 'react'
import ServiceCard from './ServiceCard'
import { ServiceDetails } from '@/data/ServiceData'

const ServiceRendered = () => {
  return (
    <div>
        <div className="max-w-[90vw] mx-auto">
            <h2 className='text-center text-4xl font-bold text-blue-950 my-8'>Service Rendered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mx-auto gap-y-4">
                {
                    ServiceDetails.map((service)=>(
                        <ServiceCard key={service.id} icon={service.icon} title={service.title} detail={service.detail} />
                    ))
                }
            </div>
            {/* <div className=""></div> */}
        </div>
    </div>
  )
}

export default ServiceRendered