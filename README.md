## vue-create
### get start
 1. npm install @entaurus/vue-tool -g 全局安装工具
 2. vue-create --name=myconponent   会在当前目录生成一个vue 的单文件组件,组件的名字是mycomponent
    * 必须 --name=mycomponent, 组件名  也是模板文件vue-name/vue-Name的变量名字
    * --dir=componentPath/componentPath 组件生成的位置
    * --tempath=path1/path2,如果需要定制模板, 指定模板存放的位置,如果不指定,使用默认模板
    * 如果指定了模板位置,还需要指定模板名称 --tem=template-name 这个模板包含了你要生成的组件,组件文件vue-name变量是组件名,vue-Name是大写

### 定制模板
 1. 在项目根目录新建模板文件夹
 2. 在package.json的vuetool.emplatePath字段指定模板文件的位置 example foo/tem
 3. 在模板文件夹新建组件模板,文件夹名就是模板名

###package.json
 1. package.json的配置文件,指定vuetool的配置
  "vuetool":{
    "templatePath":"", //同命令行 --tempath
    "templateType":"", //同命令行 --tem
    "componentDir":"", //同命令行 --dir
    "componentName":"" //同命令行 --name
  },