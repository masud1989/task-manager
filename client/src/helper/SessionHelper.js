class SessionHelper{
    setToken(token){
        return localStorage.setItem("token", token)
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

    removeSession(){
        localStorage.clear()
        window.location.href='/login'
    }
}



export const { setToken, getToken, setUserDetails, getUserDetails, removeSession } = new SessionHelper();