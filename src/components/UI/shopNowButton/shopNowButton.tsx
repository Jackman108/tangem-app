// ShopNowButton.tsx
import React from 'react';
import styles from './ShopNowButton.module.css'; 

type ShopNowButtonProps = {
    onClick: () => void;
};

const ShopNowButton: React.FC<ShopNowButtonProps> = ({ onClick }) => {
    return (
        <div className={styles.wrapperShopNowButton}>
            <button className={styles.shopNowButton} onClick={onClick}>
                Shop now
            </button>
        </div>
    );
};

export default ShopNowButton;
