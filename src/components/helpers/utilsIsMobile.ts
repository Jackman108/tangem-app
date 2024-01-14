const sizeMobile = 393

export const utilsIsMobile = () =>
    document.documentElement.clientWidth <= sizeMobile;

export const getShopNowButtonText = () => {
    return utilsIsMobile() ? 'Shop now' : 'Shop now through Monday';
};