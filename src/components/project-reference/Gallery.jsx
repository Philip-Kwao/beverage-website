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
import { images } from '@/data/gallery';

const Gallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const galleryItems = images.map((image) => ({
        src: image,
        thumb: image, // You can set this to a different URL if you have thumbnail images
      }));
  return (
    <div className="App">
        <div className="flex items-center justify-center flex-wrap">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                    {
                        galleryItems.map((item, index)=>(
                            <a key={index} href={item.src}>
                                <Image  alt={`Image ${index + 1}`} src={item.thumb} className='w-[300px] h-[500px] object-cover' />
                            </a>
                        ))
                    }
            </LightGallery>
                </div>
        </div>
  )
}

export default Gallery