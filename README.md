## vue-create
### get start
 1. 使用命令 **npm install @entaurus/vue-tool -g** 全局安装工具
 2. 命令行 **vue-create --name=myconponent**   会在当前目录生成一个vue 的单文件组件,组件的名字是mycomponent
    参数 **--name=mycomponent** 指定组件名,必须参数 也是模板文件vue-name/vue-Name的变量名字
    参数 **--dir=componentPath/componentPath** 组件生成的位置
    参数 **--tempath=path1/path2**,如果需要定制模板, 指定模板存放的位置,如果不指定,使用默认模板
    参数 **--tem=template-name** 如果指定了模板位置,还需要指定模板名,默认 *vue-com*

### 定制模板
 1. 在项目根目录新建模板文件夹
 2. 在package.json的vuetool.templatePath字段指定模板文件的位置 example foo/tem
 3. 在模板文件夹新建组件模板,文件夹名就是模板名

###package.json
 1. package.json的配置文件,指定vuetool的配置
 ```javascript
  "vuetool":{
    "templatePath":"", //同命令行 --tempath
    "templateType":"", //同命令行 --tem
    "componentDir":"", //同命令行 --dir
    "componentName":"" //同命令行 --name
  },
  ```
  **templatePath** 同命令行 **--tempath**,用于指定定制模板路径
  **templateType** 同命令行 **--tem**,用于指定定制模板名称
  **componentDir** 同命令行 **--dir**,用于指定组件父目录
  **componentName** 同命令行 **--name**,用于指定组件名