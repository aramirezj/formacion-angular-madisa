export interface Libro {
    id?: number;
    titulo: string;
    cantidadPaginas: number;
    autor?: string;
    stock: number;
    precio: number;
}