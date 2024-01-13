import React, { useEffect, useState } from 'react';
import styles from './BlackFridayBanner.module.css'; // Assume you have CSS module for styling
import Image from 'next/image';
import bannerImage from '../../../public/bannerImage.webp';
import cross from '../../../public/Close.svg';

type BlackFridayBannerProps = {
    onDismiss: () => void;
};

const BlackFridayBanner: React.FC<BlackFridayBannerProps> = ({ onDismiss }) => {

    const handleShopNow = () => {
        window.location.href = 'https://www.mediamarkt.nl/nl/campaign/blackfriday';
    };

    return (
        <div className={styles.banner}>
            <div className={styles.lightingEffect} />
            <div className={styles.additionalEffect} />
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
            <div className={styles.content}>
                <p className={styles.title}><strong>Black Friday</strong>, 24-27 Nov</p>
                <p className={styles.discount}><strong>10%OFF</strong></p>
                <p className={styles.useCode}>Use code <strong className={styles.code}>10FRIDAY</strong> at checkout</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.wrapperShopNowButton} >
                    <button className={styles.shopNowButton} onClick={handleShopNow}>
                        Shop now
                    </button>
                </div>

                <button className={styles.dismissButton} onClick={onDismiss}>
                <Image
                priority
                src={cross}
                alt={'cross Image'}
                quality={100}
                width={24}
                height={24}
                placeholder='empty'
                className={styles.dismissImage}
            />                  
                </button>
            </div>


        </div>
    );
};

export default BlackFridayBanner;