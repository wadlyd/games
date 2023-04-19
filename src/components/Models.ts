export interface Producto{
    id: number,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string,
    imagen: string,
}

export type ProductAdded = {
    id: number,
    nombre: string,
    precio: number,
    categoria: string,
    descripcion: string,
    imagen: string,
}