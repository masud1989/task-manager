class SessionHelper{
    setToken(token){
        return localStorage.setItem("token", token)
    }

    getToken(){
        return localStorage.getItem("token")
    }

    getToken(){
        return localStorage.getItem("token")
    } 
    setUserDetails(userDetails){
        return localStorage.setItem('userDetails', JSON.stringify( userDetails))
    }

    getUserDetails(){
        return JSON.parse(localStorage.getItem("userDetails"))
    }
}

export const { setToken, getToken, setUserDetails, getUserDetails } = new SessionHelper();