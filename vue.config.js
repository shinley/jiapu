module.exports = {
    lintOnSave: false,
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                // options placed here will be merged with default configuration and passed to electron-builder
                "extraFiles":"./public/jiapu.db"
            }
        }
    }
}