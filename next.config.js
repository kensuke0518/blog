module.exports = {
    exportPathMap: function () { //ルーティング設定
        return {
            '/': { page: '/' },
            '/other': { page: '/other.js' }
        }
    },
    assetPrefix: process.env.NODE_ENV === "production" ? "/project_name" : ""
}