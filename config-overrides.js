const path = require('path')
const { override, addWebpackAlias } = require("customize-cra");

const resolvePath = relativePath => path.resolve(__dirname, `src/${relativePath}`)

module.exports = override(
    addWebpackAlias({
        'vectors': resolvePath('assets/vectors'),
        'components': resolvePath('components'),
        'config': resolvePath('config'),
        'providers': resolvePath('providers'),
        'views': resolvePath('views')
    })
)