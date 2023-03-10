export const getImageURL = (typeName:string|undefined) => {
    return new URL(`/src/assets/images/types/${typeName}.svg`, import.meta.url).href
}