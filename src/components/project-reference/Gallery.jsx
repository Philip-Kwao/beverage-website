"use client"
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import Img1 from '../../assets/images/jcl/1.jpg'

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';
import { usePathname } from 'next/navigation'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';
import Image from 'next/image';
import images from '@/data/gallery';
import { swipeDetails } from '@/data/SlideData';
import {Img} from "@/assets/images/sc/1.jpg"
import { useState } from 'react';
import {motion} from 'framer-motion'
// const pathname = usePathname()

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    //FIltering
    const [items, setItems] = useState(images)
    const filterItem = (catItem) => {
        const updatedItem = images.filter((cat) =>{
            return cat.category === catItem
        })
        setItems(updatedItem)
    } 

    const [showImages, setShowImages] = useState()
    
    const showImage = () => {}
    
    return (
    <div className="App">
        <div className="flex flex-wrap items-center justify-around max-w-[20vw] mx-auto text-sm font-light my-6">
            <button onClick={()=>{filterItem('one')}} className="px-4 py-2 rounded-full hover:bg-orange-500 bg-slate-800 text-white duration-200 ease-in-out">Project One</button>
            <button onClick={()=>{filterItem('two')}} className="px-4 py-2 rounded-full hover:bg-orange-500 bg-slate-800 text-white duration-200 ease-in-out">Project Two</button>
            <button onClick={()=>setItems(images)} className="px-4 py-2 rounded-full hover:bg-orange-500 bg-slate-800 text-white duration-200 ease-in-out">All</button>
        </div>
             <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            > 
                <div className="flex items-center justify-center flex-wrap relative">
                    {
                        items.map((image, index)=>(
                            <motion.div
                                layout
                                key={image.id}
                            >
                                <motion.div  
                                    whileTap={{scale:1.5}}
                                    onClick={()=>setShowImages(image.img)}
                                >
                                    <Image onClick={()=>{showImage}} alt={index} src={image.img} width={300} height={500} className='w-[300px] h-[500px] object-cover hover:scale-75 duration-200 ease-in-out hover:shadow-lg' />
                                </motion.div>
                                {/* <Image src={showImages} className="w-full h-full absolute rounded-xl shadow-xl z-20" /> */}
                            </motion.div>
                        ))
                    }
                </div>
             </LightGallery> 
        </div>
  )
}

export default Gallery
