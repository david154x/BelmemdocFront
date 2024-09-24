export interface ProductoCreateDTO {
    
    idTipoProducto: number;
    idMarca: number;

    nombreProducto: string;
    descripcionProducto: string;

    valorProducto: number;

    ubicacionFoto: Blob | null;

}