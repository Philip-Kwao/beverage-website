import React from 'react'

const Measures = () => {
  return (
    <div className='flex flex-col items-start justify-between my-10 text-4xl lg:mx-20 mx-4'>
        <div className="flex items-start justify-between w-full my-20">
            <div className="basis-3/4">
                <span className="">1.</span>
                <span className="ml-4">Promotes a culture of health and safety</span>
            </div>
            <div className="basis-1/4 hidden lg:block"></div>
        </div>
        <div className="flex items-start justify-between w-full my-20">
            <div className="basis-1/4 hidden lg:block"></div>
            <div className="">
                <span className="basis-3/4">2.</span>
                <span className="ml-4">Complies with regulatory standards</span>
            </div>
        </div>
        <div className="flex items-start justify-between w-full my-20">
            <div className="basis-3/4">
                <span className="">3.</span>
                <span className="ml-4">Continually enforces health and safety measures</span>
            </div>
            <div className="basis-1/4 hidden lg:block"></div>
        </div>
        <div className="flex items-start justify-between w-full my-20">
            <div className="basis-1/4 hidden lg:block"></div>
            <div className="basis-3/4">
                <span className="">4.</span>
                <span className="ml-4">Entrench the right to refuse to work in hazardous condition</span>
            </div>
        </div>
    </div>
  )
}

export default Measures