import type IType from "./type.model"

export default interface IPokemon {
    order: number
    name: string
    img: string
    type: [IType]
    color: string
}