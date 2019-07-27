// Especify what PostCSS plugin we want to use
// You need to export an object that contains a key called plugins
// 

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ]
}