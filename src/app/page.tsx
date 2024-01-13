'use client'
import React from 'react';
import BlackFridayBanner from '@/components/BlackFridayBanner/BlackFridayBanner'
import styles from './page.module.css'

const Home: React.FC = () => {
    const handleDismiss = () => {
        console.log('Banner dismissed');
    };

    return (
        <main className={styles.main}>
            <BlackFridayBanner onDismiss={handleDismiss} />
        </main>
    );
};

export default Home;