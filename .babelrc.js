const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                // helps webpack in tree-shaking(if we disable modules)
                modules: isTest ? 'commonjs' : false,
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
}
