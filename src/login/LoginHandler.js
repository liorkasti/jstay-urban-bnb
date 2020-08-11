const fields = ["email", "password"]
let state = [{},{}]
export const sendValue = (loginInfo)=>{
    const typeIndex = fields.indexOf(loginInfo.type);

    state[typeIndex] = loginInfo
}
export const requestLogin = () =>{
    
}

export const requestGoogleLogin = async () => {
    const googleResponse = await logInWithGoogle();
    saveUserLoginData(googleResponse)
}
const saveUserLoginData = (responseData) => {
    console.warn(responseData)
}