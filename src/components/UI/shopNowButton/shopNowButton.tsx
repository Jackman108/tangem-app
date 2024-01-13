// ShopNowButton.tsx
import React from 'react';
import styles from '../../BlackFridayBanner/BlackFridayBanner.module.css'; 

type ShopNowButtonProps = {
    onClick: () => void;
    buttonText?: string;
};

const ShopNowButton: React.FC<ShopNowButtonProps> = ({ onClick, buttonText = "Shop now" }) => {
    return (        
        <button className={styles.shopNowButton} onClick={onClick}>
            {buttonText}
        </button>
    );
};

export default ShopNowButton;
