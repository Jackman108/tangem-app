import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../public/bannerImage.webp';

const ImageBanner: React.FC = () => {
    return (
        <Image
            priority
            src={bannerImage}
            alt={'banner Image'}
            quality={100}
            width={212}
            height={54}
            placeholder='empty'           
        />
    );
};

export default ImageBanner;