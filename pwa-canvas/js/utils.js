export function rand(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min) + min);
}

export function randNotSmall() {
    const val = rand(...arguments);
    if (val < 1.3 && val > -1.3) {
        return randNotSmall(...arguments);
    }
    return val;
}

export function getVMIN() {
    return Math.min(...getWindowSize());
}

export function getWindowSize() {
    return [window.innerWidth, window.innerHeight];
}

export const __ = ((lang, locale = 'en') => {
    return str => lang[locale][str] || str;
})({
    en: {
        outViewport: 'You went abroad the block',
        blueBlockTouch: 'Overwhelmed with the blue block'
    }
});

export const sizeFactor = (_sizeFactor => {
    return val => {
        return val * _sizeFactor;
    }
})(getVMIN() / 555);

export function isNaN(val){
    return val !== val;
}