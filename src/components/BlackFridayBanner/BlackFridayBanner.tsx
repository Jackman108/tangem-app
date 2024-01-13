'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './BlackFridayBanner.module.css';
import Image from 'next/image';
import bannerImage from '../../../public/bannerImage.webp';
import DismissButton from '../UI/DismissButton/DismissButton';
import ShopNowButton from '../UI/shopNowButton/shopNowButton';
import { Router } from 'next/router';

type BlackFridayBannerProps = {
    bannerKey: string;
    onDismiss: () => void;
    isSecondBanner?: boolean;
};

const BlackFridayBanner: React.FC<BlackFridayBannerProps> = ({
    bannerKey,
    onDismiss,
    isSecondBanner
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const bannerRef = useRef<HTMLDivElement | null>(null);

    const handleShopNow = () => {
        const url = '/path/to/url';
        Router.events.emit("routeChangeStart", url);
        window.location.href = 'https://www.mediamarkt.nl/nl/campaign/blackfriday';
    };

    const handleDismiss = () => {
        setIsVisible(false);
        onDismiss();
    };
    const bannerClassName = isSecondBanner ? styles.secondBanner : styles.firstBanner;


    useEffect(() => {
        const handleScroll = () => {
            const currentBanner = bannerRef.current;

            if (currentBanner) {
                const bannerRect = currentBanner.getBoundingClientRect();
                const isBannerVisible = bannerRect.bottom > 0 && bannerRect.top < window.innerHeight;

                if (!isBannerVisible) {
                    setIsVisible(false);
                    onDismiss();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [onDismiss]);

    return isVisible ? (
        <div
            key={bannerKey}
            ref={bannerRef}
            className={`${styles.banner} ${bannerClassName}`}
        >
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
                <ShopNowButton onClick={handleShopNow} />
                <DismissButton onClick={handleDismiss} />
            </div>


        </div>
    ) : null;
};

export default BlackFridayBanner;