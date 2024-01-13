'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './BlackFridayBanner.module.css';
import DismissButton from '../UI/DismissButton/DismissButton';
import ShopNowButton from '../UI/ShopNowButton/ShopNowButton';
import { Router } from 'next/router';
import BlackFridayBannerContent from '../BlackFridayBannerContent/BlackFridayBannerContent';
import ImageBanner from '../ImageBanner/ImageBanner';

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
            <ImageBanner />
            <BlackFridayBannerContent />
            <div className={styles.buttons}>
                <ShopNowButton onClick={handleShopNow} />
                <DismissButton onClick={handleDismiss} />
            </div>
        </div>
    ) : null;
};

export default BlackFridayBanner;