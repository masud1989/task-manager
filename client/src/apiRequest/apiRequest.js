import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { SetProfile } from "../redux/state-slice/profileSlice";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
import { SetSummary } from "../redux/state-slice/summary-slice";
import { SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask } from "../redux/state-slice/task-slice";
import store from "../redux/store/store";

const BaseURL = 'http://localhost:5000/api/v1';
const AxiosHeader = {headers:{"token":getToken()}}

// Registration Request 
export const RegistrationRequest = (email, name, address, mobile, password, photo) => {
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/registration";
    let PostBody = { "email":email, "name":name, "address":address, "mobile":mobile, "password":password, "photo":photo }
    
    return axios.post(URL, PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status === 200){
            if(res.data["status"] === "fail"){
                if(res.data["data"]["keyPattern"]["email"] === 1 ){
                    ErrorToast("This Email already Exists")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong-1")
                    return false;
                }
            }
            else{
                SuccessToast("User Registration Successful")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong-2")
            return false;
        }


    }).catch((error)=>{
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong from Catch-3")
        return false;
    })

}
//Login Request
export const LoginRequest = (email, password) => {
    store.dispatch(ShowLoader())

    let URL = BaseURL+"/login";
    let postBody={"email":email, "password":password}

    return axios.post(URL,postBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status === 200){
            setToken(res.data['token']);
            setUserDetails(res.data['data'])
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast('Invalid Email or Password');
            return false;
        }

    }).catch((err)=>{
        ErrorToast("Something Went Wrong-catch")
        store.dispatch(HideLoader())
    })

}

// Create Task Request
export const CreateTaskRequest = (title, description) =>{
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/createTask";
    let postBody = {"title":title, "description":description, "status":"New"}

    return axios.post(URL,postBody,AxiosHeader).then((res)=>{
        if(res.status === 200){
            SuccessToast('New Task Created Successful')
            store.dispatch(HideLoader())
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            store.dispatch(HideLoader())
            return false;
        }
    }).catch((err)=>{
        ErrorToast('Something Went Wrong from catch')
        store.dispatch(HideLoader())
        return false;
    })
}

// Task ListByStatus Request
export const TaskListByStatus = (status)=>{
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/taskListByStatus/"+status;
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status === 200){
            if(status === 'New'){
                store.dispatch(SetNewTask(res.data['data']))
            }
            else if(status === 'Progress'){
                store.dispatch(SetProgressTask(res.data['data']))
            }
            else if(status === 'Completed'){
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(status === 'Canceled'){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
        }
        else{
            ErrorToast('Something Went Wrong')
        }
    }).catch((err)=>{
        ErrorToast('Something Went Wrong from catch')
        store.dispatch(HideLoader())
        return false;
    })
}

// Task Summary Request
export const SummaryRequest = ()=>{
    store.dispatch(ShowLoader())
    let URL =BaseURL+"/taskStatusCount";
    axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if(res.status === 200){
            store.dispatch(SetSummary(res.data['data']))
        }
        else{
            ErrorToast('Something Went Wrong')
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong-Catch")
    })
}

//Delete Request
export const DeleteRequest = (id) => {
    store.dispatch(ShowLoader())
    const URL = BaseURL+"/deleteTask/"+id;
    return axios.get(URL,AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if(res.status === 200){
            SuccessToast('Task Deleted Success')
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            return false;
        }

    }).catch((error) => {
        ErrorToast('Something Went Wrong catch')
        store.dispatch(HideLoader())
        return false;
    })

}


//Update Status Request
export const UpdateStatusRequest = (id, status) => {
    store.dispatch(ShowLoader())
    const URL = BaseURL+"/updateTaskStatus/"+id+"/"+status;
     axios.get(URL,AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if(res.status === 200){
            SuccessToast('Task Status Update Success')
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            return false;
        }

    }).catch((err) => {
        ErrorToast('Something Went Wrong catch')
        store.dispatch(HideLoader())
        return false;
    })

}

//Get Profile Request
export const ProfileDetailsRequest = () => {
    store.dispatch(ShowLoader())
    const URL = BaseURL+"/profileDetails";
    return axios.get(URL, AxiosHeader).then((res) => {
        store.dispatch(HideLoader())
        if(res.status === 200){
            store.dispatch(SetProfile(res.data['data'][0]))
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            return false;
        }

    }).catch((err) => {
        ErrorToast('Something Went Wrong catch')
        store.dispatch(HideLoader())
        return false;
    })
}

// Registration Request 
export const ProfileUpdateRequest = (email, name, address, mobile, password, photo) => {
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/profileUpdate";
    let PostBody = { "email":email, "name":name, "address":address, "mobile":mobile, "password":password, "photo":photo }
    let UserDetails = { "email":email, "name":name, "address":address, "mobile":mobile, "photo":photo  }
    return axios.post(URL, PostBody, AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status === 200){
            SuccessToast('Profile Updated Success')
            setUserDetails(UserDetails)
            return true;                                                                                     
            }
            
        else{
            ErrorToast("Something Went Wrong-2")
            return false;
        }


    }).catch((error)=>{
        ErrorToast("Something Went Wrong from Catch-3")
        
        store.dispatch(HideLoader())
        return false;
    })

}

// Verify Email Request (Email)
export const RecoverVerifyEmailRequest = (email) => {
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/RecoverVerifyEmailRequest/"+email;
    return axios.get(URL).then((res) => {
        store.dispatch(HideLoader())
        if(res.status === 200){
            //Messages
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            return false;
        }

    }).catch((err) => {
        ErrorToast('Something Went Wrong catch')
        store.dispatch(HideLoader())
        return false;
    })
}

// Verify Email Request (OTP)
export const RecoverVerifyOTPRequest = (email,OTP) => {
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/RecoverVerifyEmailRequest/"+email+"/"+OTP;
    return axios.get(URL).then((res) => {
        store.dispatch(HideLoader())
        if(res.status === 200){
            //Messages
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            return false;
        }

    }).catch((err) => {
        ErrorToast('Something Went Wrong catch')
        store.dispatch(HideLoader())
        return false;
    })
}

// Recover Reset Password Request
export const RecoverResetPasswordRequest = (email,OTP,password) => {
    store.dispatch(ShowLoader())


    let URL = BaseURL+"/RecoverVerifyEmailRequest/"+email+"/"+OTP;
    let postBody = {email:email, OTP:OTP, password:password}
    return axios.post(URL, postBody).then((res) => {
        store.dispatch(HideLoader())
        if(res.status === 200){
            //Messages
            return true;
        }
        else{
            ErrorToast('Something Went Wrong')
            return false;
        }

    }).catch((err) => {
        ErrorToast('Something Went Wrong catch')
        store.dispatch(HideLoader())
        return false;
    })
}