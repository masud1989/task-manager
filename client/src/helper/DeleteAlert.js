import Swal from "sweetalert2";
import { DeleteRequest } from "../apiRequest/apiRequest";
// import { DeleteRequest } from "../APIRequest/APIRequest";

export function DeleteAlert(id){
    return Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete'
      }).then((result) => {
        if (result.isConfirmed) {
            // alert(id)
          return DeleteRequest(id).then((deleteResult)=>{
            return deleteResult
          })

        }
      })
}
export default DeleteAlert;