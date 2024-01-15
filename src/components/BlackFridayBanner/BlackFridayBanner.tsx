'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './BlackFridayBanner.module.css';
import DismissButton from '../UI/DismissButton/DismissButton';
import ShopNowButton from '../UI/ShopNowButton/ShopNowButton';
import ImageBanner from '../ImageBanner/ImageBanner';
import { getShopNowButtonText, utilsIsMobile } from '../helpers/utilsIsMobile';
import { useScrollAndResize } from '../helpers/eventHandlers';

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
    shopNowButtonText,
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const bannerRef = useRef<HTMLDivElement | null>(null);

    const handleShopNow = () => {
       console.log('Shop Now');
    };

    const handleDismiss = () => {
        setIsVisible(false);
        onDismiss();
    };

    const bannerClassName = isSecondBanner ? styles.secondBanner : styles.firstBanner;

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

    const handleResize = () => {
        const isMobile = utilsIsMobile();
        document.body.classList.toggle('disable-scroll', isMobile);
        if (isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };
    useEffect(() => {
        handleResize(); // Initial state on mount
    }, []); 

    useScrollAndResize(handleScroll, handleResize);

    return isVisible ? (
        <div
            key={bannerKey}
            ref={bannerRef}
            className={`${styles.banner} ${bannerClassName}`}
        >
            {isSecondBanner && (
                <DismissButton onClick={handleDismiss} />
            )}
            <div className={styles.lightingEffect} />
            <div className={styles.additionalEffect} />
            <div className={styles.ImageBanner}>
                <ImageBanner />
            </div>
            <div className={styles.content}>
                <p className={styles.title}>
                    <strong>Black Friday</strong>
                    <span className={styles.titleDate}>, 24-27 Nov</span>
                </p>
                <p className={styles.discount}>
                    <strong>10%OFF</strong>
                </p>
                <p className={styles.useCode}>
                    Use code
                    <strong className={styles.code}> 10FRIDAY</strong>
                    <span className={styles.codeCheckout}> at checkout</span>
                </p>
            </div>
            <div className={styles.wrapperButtons}>
                <div className={styles.wrapperShopNowButton}>
                    <ShopNowButton
                        onClick={handleShopNow}
                        buttonText={!isSecondBanner ? shopNowButtonText : getShopNowButtonText()}
                    />
                </div>
                {!isSecondBanner && (
                    <DismissButton onClick={handleDismiss} />
                )}
            </div>
        </div>
    ) : null;
};

export default BlackFridayBanner;