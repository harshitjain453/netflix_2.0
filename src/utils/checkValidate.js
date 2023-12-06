export const checkValidate=(email,password)=>{
    //    const validateName=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
       const validateEmail= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)
       const validatePassword=/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(password)

       if(!validateEmail){
          return "Email is Invalid"
       }
       if(!validatePassword){
        return "Password is Invalid"
       }
    //    if(!validateName){
    //     return "Name is Invalid"
    //    }

       return null 
}