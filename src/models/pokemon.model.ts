import type IType from "./type.model"

export default interface IPokemon {
    id: number
    order: number
    name: string
    img: string
    type: [IType]
    color: string
}