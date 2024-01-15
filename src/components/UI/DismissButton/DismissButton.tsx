// DismissButton.tsx
import React from 'react';
import Image from 'next/image';
import cross from '../../../../public/Close.svg';
import styles from '@/components/BlackFridayBanner/BlackFridayBanner.module.css'; 


type DismissButtonProps = {
    onClick: () => void;
};

const DismissButton: React.FC<DismissButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.dismissButton} onClick={onClick}>
            <Image
                priority
                src={cross}
                alt={'cross Image'}
                quality={100}
                width={24}
                height={24}
                placeholder='empty'
                className={styles.dismissImage}
            />
        </button>
    );
};

export default DismissButton;
