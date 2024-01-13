import React from 'react';
import styles from './BlackFridayBannerContent.module.css';

const BlackFridayBannerContent: React.FC = () => {
    return (
        <>
            <p className={styles.title}><strong>Black Friday</strong><span className={styles.titleDate}>, 24-27 Nov</span></p>
            <p className={styles.discount}><strong>10%OFF</strong></p>
            <p className={styles.useCode}>Use code <strong className={styles.code}>10FRIDAY</strong> at checkout</p>
        </>
    );
};

export default BlackFridayBannerContent;