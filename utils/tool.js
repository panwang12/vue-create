//转化首字母大写
module.exports.PreCharsToUpper=function (str){
    if(typeof str=="string"&& str!=""){
        return str[0].toUpperCase()+str.slice(1)
    }else{
        console.log("input character invalid")
    }
}