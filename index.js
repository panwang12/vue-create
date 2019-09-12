const path = require("path")
const fs = require("fs")
const Tool = require("./utils/tool.js")
var targetPath = process.cwd()
//dir模板生成的相对位置, name模板名字 tem 使用模板名称
var argvs={
    dir:"",
    name:"",
    tem:"tem1"
}

for(i=2;i<process.argv.length;i++){
    var arr=process.argv[i].split("=")
    argvs[arr[0]]=arr[1]
}


var paths = argvs.dir.split("/")
//生成目标路径
for(var i=0;i<paths.length;i++){
    targetPath=path.resolve(targetPath, './', paths[i]);
    if(!fs.existsSync(targetPath)){
        fs.mkdirSync(targetPath)
    };
}

//生成目标componet目录
if(!argvs.name){
    console.error('error:require component name,command line whould be like "vue-create name=temName"')

}else if(!fs.existsSync(`${targetPath}/${argvs.name}`)){
    //新建组件
    fs.mkdirSync(targetPath+"/"+argvs.name)
    //读取模板文件
    var files = fs.readdirSync(`${process.cwd()}/templates/${argvs.tem}`)

    for(let i=0;i<files.length;i++){
        try {
            let str=fs.readFileSync(`${process.cwd()}/templates/${argvs.tem}/${files[i]}`,'utf8')
            str=str.replace(/vue-name/g,argvs.name);
            let classN=Tool.PreCharsToUpper(argvs.name)
            str=str.replace(/vue-Name/g,classN);
            fs.appendFileSync(`${targetPath}/${argvs.name}/${files[i]}`, str);
        } catch (err) {
            /* Handle the error */
        }
    }
   
    console.log("create component success")
}else{
    console.error('error: "%s" existed,please use other component name', argvs.name)
};


