
import Swal from'sweetalert2';

//Product
export class Alert {
    public parts: { [key: string]: any } = {};

    public listParts(): void {
       Swal.fire({
        ...this.parts
       });
    }
}
