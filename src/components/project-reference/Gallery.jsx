"use client"
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Link from 'next/link';
import Image from 'next/image';
import images from '@/data/gallery';
import { swipeDetails } from '@/data/SlideData';
import {Img} from "@/assets/images/sc/1.jpg"
import {motion} from 'framer-motion'

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
    <div className="App">
        <div className="flex items-center justify-center flex-wrap">
            {/* <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            > */}
                    {
                        images.map((image, index)=>(
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
            {/* </LightGallery> */}
                </div>
        </div>
  )
}

export default Gallery
