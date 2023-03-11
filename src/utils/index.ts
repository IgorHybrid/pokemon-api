export const getImageURL = (typeName:string) => {
    return new URL(`/src/assets/images/types/${typeName}.svg`, import.meta.url).href
}

export const capitalizeFirstLetter = (value:string) => {
    return value[0].toUpperCase() + value.slice(1);
}