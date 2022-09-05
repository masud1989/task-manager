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
    setOTP(OTP){
        return localStorage.setItem("OTP", OTP)
    }

    getOTP(){
        return localStorage.getItem("OTP")
    }
    setEmail(email){
        return localStorage.setItem("email", email)
    }

    getEmail(){
        return localStorage.getItem("email")
    }

}



export const { setToken, getToken, setUserDetails, getUserDetails, removeSession, setOTP, getOTP, setEmail, getEmail } = new SessionHelper();