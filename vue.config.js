module.exports = {
    devServer: {
        disableHostCheck: true,
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',//打包后的位置(如果不设置这个静态资源会报404)
    // publicPath: process.env.NODE_ENV === "production" ? "http://localhost:8080/dist" : "./"
    outputDir: "dist",//打包后的目录名称
    assetsDir: "static",//静态资源目录名称
    productionSourceMap: false,  //去掉打包的时候生成的map文件
    lintOnSave: true,
    filenameHashing: false,
}