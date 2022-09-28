export const getHelloDaniel = ()=> {
    return "hello daniel"
}

export const getHelloWithFirstName = (firstName)=>{
    return `hello ${firstName}`
}

export const getSumOfNum1AndNum2 = (num1,num2)=>{
    return num1+num2
}

export const getNum1DevidedByNum2 = (num1,num2)=>{
    return num1/num2
}

export const getMinNumber = (num1,num2,num3)=>{
    if (num1<num2&&num1<num3) {
        return num1
    }
    if (num2<num1&&num2<num3) {
        return num2
    }
    if (num3<num2&&num3<num1) {
        return num3
    }
}
getMinNumber(5,8,6)
