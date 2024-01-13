'use client'
import React, { useState } from 'react';
import BlackFridayBanner from '@/components/BlackFridayBanner/BlackFridayBanner'
import styles from './page.module.css'

const Home: React.FC = () => {
    const [showSecondBanner, setShowSecondBanner] = useState(false);

    const handleDismissFirstBanner = () => {
        setShowSecondBanner(true);
    };

    return (
        <main className={styles.main}>
            <BlackFridayBanner
                bannerKey="banner1"
                onDismiss={handleDismissFirstBanner}
            />

            {showSecondBanner &&
                <BlackFridayBanner
                    bannerKey="banner2"
                    onDismiss={() => setShowSecondBanner(false)}
                    isSecondBanner
                />}
        </main>
    );
};

export default Home;