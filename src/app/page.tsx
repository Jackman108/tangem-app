'use client'
import React, { useState } from 'react';
import BlackFridayBanner from '@/components/BlackFridayBanner/BlackFridayBanner'
import styles from '@/app/page.module.css'

const Home: React.FC = () => {
    const [showSecondBanner, setShowSecondBanner] = useState(false);

    const handleDismissFirstBanner = () => {
        setShowSecondBanner(true);
    };

    const handleDismissSecondBanner = () => {
        setShowSecondBanner(false);
    };

    return (
        <main className={styles.main}>
            <BlackFridayBanner
                bannerKey="banner1"
                onDismiss={handleDismissFirstBanner}
                shopNowButtonText="Shop now"
            />

            {showSecondBanner &&
                <BlackFridayBanner
                    bannerKey="banner2"
                    onDismiss={handleDismissSecondBanner}
                    isSecondBanner
                    shopNowButtonText="Shop now through Monday"
                />}
        </main>
    );
};

export default Home;