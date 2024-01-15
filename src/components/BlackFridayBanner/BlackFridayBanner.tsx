'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/components/BlackFridayBanner/BlackFridayBanner.module.css';
import DismissButton from '@/components/UI/DismissButton/DismissButton';
import ShopNowButton from '@/components/UI/ShopNowButton/ShopNowButton';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import { getShopNowButtonText, utilsIsMobile } from '@/components/helpers/utilsIsMobile';
import { useScrollAndResize } from '@/components/helpers/eventHandlers';

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
        handleResize(); 
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