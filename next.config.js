const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css') 
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withCSS(withSass())
