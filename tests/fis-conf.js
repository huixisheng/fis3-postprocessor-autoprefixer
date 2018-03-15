// fis3 release -d output

fis.match('css/*.css',{
    postprocessor : fis.plugin("autoprefixer",{
        // https://github.com/ai/browserslist#queries
        // "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
        "browsers": ['last 2 iOS major versions'],
        "flexboxfixer": true,
        "gradientfixer": true
    })
})