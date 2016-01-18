fis3-postprocessor-autoprefixer
----

基于[postcss/autoprefixer](https://github.com/postcss/autoprefixer)的fis3后处理插件


## 安装 ##

    sudo npm insstall [-g] fis3-postprocessor-autoprefixer

## 使用说明 ##


    fis.match('css/*.css',{
        postprocessor : fis.plugin("autoprefixer",{
            // https://github.com/ai/browserslist#queries
            "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
            "flexboxfixer": true,
            "gradientfixer": true
        })
    })

> 关于browsers如何设置请参考[browserslist](https://github.com/ai/browserslist#queries)

## 为何有这个 ##
- 使用css3标准语法，兼容性交给处理器
- 含有前缀的css转为标准css3语法
- 没有找到符合要求的包

## 其他 ##

未来考虑添加[cssnext](http://cssnext.io/)。到时候估计改名 fis3-postprocessor-postcss
