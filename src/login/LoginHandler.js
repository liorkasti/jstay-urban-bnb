const fields = ["email", "password"]
let state = [{},{}]
export const sendValue = (loginInfo)=>{
    const typeIndex = fields.indexOf(loginInfo.type);

    state[typeIndex] = loginInfo
}
export const requestLogin = () =>{
    
}