module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/other': { page: '/other' }
        }
    },
    assetPrefix: process.env.NODE_ENV === "production" ? "/project_name" : ""
}