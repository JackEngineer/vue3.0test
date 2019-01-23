module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: ()=>{
                    return 'http://localhost:8080';
                },
                ws: true,
                changeOrigin: true
            }
        }
    },
    /**
     * Type: boolean
     * Default: true
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
     */
    productionSourceMap: process.env.NODE_ENV !== 'production',
    /**
     * Type: string
     * publicPath 部署应用包时的基本 URL
     */
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : './',
    /**
     * Type: string
     * outputDir 生产环境构建文件的目录
     * tips: 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
     */
    outputDir: process.env.outputDir,
    /**
     * Type: string
     * assetsDir 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
     * tips: 从生成的资源覆写 filename 或 chunkFilename 时，assetsDir 会被忽略
     */
    assetsDir: './',
    /**
     * Type: string
     * indexPath 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
     */
    indexPath: 'index.html',
    /**
     * Type: boolean
     * Default: require('os').cpus().length > 1
     * 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
     */
    parallel:false
};
