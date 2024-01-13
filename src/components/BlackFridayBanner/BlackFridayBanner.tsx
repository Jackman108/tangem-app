'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './BlackFridayBanner.module.css';
import DismissButton from '../UI/DismissButton/DismissButton';
import ShopNowButton from '../UI/ShopNowButton/ShopNowButton';
import { Router } from 'next/router';
import ImageBanner from '../ImageBanner/ImageBanner';

type BlackFridayBannerProps = {
    bannerKey: string;
    onDismiss: () => void;
    isSecondBanner?: boolean;
    shopNowButtonText?: string;
};

const BlackFridayBanner: React.FC<BlackFridayBannerProps> = ({
    bannerKey,
    onDismiss,
    isSecondBanner,
    shopNowButtonText = "Shop now",
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
                    setIsVisible(true);
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
            {isSecondBanner && (
                <>
                    <DismissButton onClick={handleDismiss} />
                </>
            )}
            <div className={styles.lightingEffect} />
            <div className={styles.additionalEffect} />
            <div className={styles.ImageBanner}>
                <ImageBanner />
            </div>

            <div className={styles.content}>
                <p className={styles.title}><strong>Black Friday</strong><span className={styles.titleDate}>, 24-27 Nov</span></p>
                <p className={styles.discount}><strong>10%OFF</strong></p>
                <p className={styles.useCode}>Use code <strong className={styles.code}>10FRIDAY</strong> at checkout</p>
            </div>
            <div className={styles.wrapperShopNowButton}>
                <ShopNowButton onClick={handleShopNow} buttonText={shopNowButtonText} />
            </div>
            {!isSecondBanner && (
                <>
                    <DismissButton onClick={handleDismiss} />
                </>
            )}

        </div>
    ) : null;
};

export default BlackFridayBanner;