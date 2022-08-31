import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { HideLoader, ShowLoader } from "../redux/state-slice/settings-slice";
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