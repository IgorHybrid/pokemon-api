import tinycolor from 'tinycolor2';

export const getImageURL = (typeName:string) => {
    return new URL(`/src/assets/images/types/${typeName}.svg`, import.meta.url).href
}

export const capitalizeFirstLetter = (value:string) => {
    return value[0].toUpperCase() + value.slice(1);
}

export const setBackgroundColor = (color:string) => {
    const newColor = tinycolor(color); 
    return newColor.lighten(20).toHexString();
}

export const setDarkerColor = (color:string) => {
    const newColor = tinycolor(color); 
    return newColor.darken(20).desaturate().toHexString();
}