const path = require("path")
const fs = require("fs")
const Tool = require("./utils/tool.js")
var rootPath = process.cwd()


var dirArr=fs.readdirSync(`${rootPath}`)
var config;
if( dirArr.indexOf("package.json")!=-1){
    let str=fs.readFileSync(`${rootPath}/package.json`,'utf8')
    config=JSON.parse(str).vuetool
}


//dir模板生成的相对位置, name模板名字 tem 使用模板名称
var argvs={
    templatePath:"",
    templateType:"vue-com",
    componentDir:"",
    componentName:"",
}
if(config){
    argvs=config
}
//处理命令行参数
for(i=2;i<process.argv.length;i++){
    var arr=process.argv[i].split("=")
    switch(arr[0]){
        case "--tempath":
            argvs["templatePath"]=arr[1];
            break;
        case "--tem":
            argvs["templateType"]=arr[1];
            break;
        case "--dir":
            argvs["componentDir"]=arr[1];
            break;
        case "--name":
            argvs["componentName"]=arr[1];
            break;
    }
}

//生成目标路径
var segmentArr = argvs.componentDir.split("/")
var targetPath=rootPath;
for(var i=0;i<segmentArr.length;i++){
    targetPath=path.resolve(targetPath, './', segmentArr[i]);
    if(!fs.existsSync(targetPath)){
        fs.mkdirSync(targetPath)
    };
}

//生成目标componet目录
if(!argvs.componentName){
    console.error('error:require component name,command line whould be like "vue-create name=temName"')

}else if(!fs.existsSync(`${targetPath}/${argvs.componentName}`)){
    //新建组件
    fs.mkdirSync(targetPath+"/"+argvs.componentName)
    //读取模板文件
    var files;
    if(argvs.templatePath==""){
        //使用全局模板
        files = fs.readdirSync(`${__dirname}/templates/${argvs.templateType}`)
    }else{
        files = fs.readdirSync(`${rootPath}/${argvs.templatePath}/${argvs.templateType}`)        
    }
    for(let i=0;i<files.length;i++){

        try {
            let str;
            if(argvs.templatePath==""){
                str=fs.readFileSync(`${__dirname}/templates/${argvs.templateType}/${files[i]}`,'utf8')
            }else{
                str=fs.readFileSync(`${rootPath}/${argvs.templatePath}/${argvs.templateType}/${files[i]}`,'utf8')                
            }
            
            str=str.replace(/vue-name/g,argvs.componentName);
            let classN=Tool.PreCharsToUpper(argvs.componentName)
            str=str.replace(/vue-Name/g,classN);
            fs.appendFileSync(`${targetPath}/${argvs.componentName}/${files[i]}`, str);
        } catch (err) {
            /* Handle the error */
        }
    }
   
    console.log("create component success")
}else{
    console.error('error: "%s" existed,please use other component name', argvs.componentName)
};


