import React from 'react';
import Image from 'next/image';
import bannerImage from '../../../public/bannerImage.webp';
import styles from './ImageBanner.module.css';

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
            className={styles.banner__image}
        />
    );
};

export default ImageBanner;