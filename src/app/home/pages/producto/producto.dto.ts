import { MarcaDTO } from "../marca/marca.dto";
import { TipoProductoDTO } from "../tipo-producto/tipo-producto.dto";

export interface ProductoDTO {
    
    idProducto: number;
    idTipoProducto: number;
    idMarca: number;
    nombreProducto: string;
    descripcionProducto: string;
    valorProducto: number;
    ubicacionFoto: string;
    fechaCreacion: string;

}