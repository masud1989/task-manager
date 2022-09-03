import Swal from "sweetalert2"
import { UpdateStatusRequest } from "../apiRequest/apiRequest"


 export const updateAlert =(id, status) =>{
    return Swal.fire( {
        title: 'Status Change',
        input: 'select',
        inputOptions: {New: 'New', Completed: 'Completed', Progress: 'Progress', Canceled: 'Canceled'  },
        inputValue: status,
    }).then((result) => {
        UpdateStatusRequest(id, result.value).then((res)=>{
            return res;
        })
    })
}

export default updateAlert;
