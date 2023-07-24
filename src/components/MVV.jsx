import React from 'react'
import { FiTarget } from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import { BsHeart } from 'react-icons/bs'

const MVV = ({position}) => {
  return (
        <div className={`min-h-[50vh] lg:max-w-[80vw] w-full mx-auto z-10 lg:left-10 lg:-bottom-52 flex flex-wrap lg:flex-nowrap lg:items-start item-center justify-center pt-14 bg-white ${!position?'lg:shadow-2xl':''} px-8 lg:${!position?'abslute':'retive'} relatve text-center ease-in-out duration-200`}>
                <div className="max-w-sm group">
                    <span className="text-4xl text-center ease-in-out duration-200 lg:-mt-5 text-blue-950 group-hover:text-orange-600 mx-auto flex justify-center  items-center "><FiTarget /></span>
                    <h2 className='my-4 font-bold text-xl text-blue-950 group-hover:text-orange-600 duration-200 ease-in-out'>Our Mission</h2>
                    <p className="text-justify text-sm text-slate-500">Our existence is   mainly to   provide the highest and uncompromising services targeted at customer satisfaction, delivery on time and value addition.   Our focus is on quality, meeting customers' expectations, and continuous improvement in the application and delivery of our services.</p>
                </div>
                <span className="h-32 w-[1px] lg:bg-slate-400 mx-6 mt-14 "></span>
      
                <div className="max-w-sm group">
                    <span className="text-4xl text-center ease-in-out duration-200 lg:-mt-5 text-blue-950 group-hover:text-orange-600 mx-auto flex justify-center items-center "><AiOutlineEye /></span>
                    <h2 className='my-4 font-bold text-xl text-blue-950 group-hover:text-orange-600 duration-200 ease-in-out'>Our Vision</h2>
                    <p className="text-justify text-sm text-slate-500">Our vision is to be the market leader in the provision of customer-focused and professional property support services with speed anytime, anywhere in Ghana and beyond.</p>
                
                </div>
                <span className="h-32 w-[1px] lg:bg-slate-400 mx-6 mt-14"></span>
            
                <div className="max-w-sm group">
                    <span className="text-4xl text-center ease-in-out duration-200 lg:-mt-5 text-blue-950 group-hover:text-orange-600 mx-auto flex justify-center items-center "><BsHeart /></span>
                    <h2 className='my-4 font-bold text-xl text-blue-950 group-hover:text-orange-600 duration-200 ease-in-out'>Our Values</h2>
                    <p className="text-justify text-sm text-slate-500">JASAKA COMPANY LIMITED is guided by the “QRS” principle in everything we do. Staff at JASAKA COMPANY LIMITED embraces these three core values in ensuring total commitment and output to specific customer needs.</p>
            </div>
        </div>
  )
}

export default MVV