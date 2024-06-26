module.exports = {
    syntax: 'postcss-scss',
    Plugins: [
        require('autoprefixer'),
        require('cssnano')
    ]
}