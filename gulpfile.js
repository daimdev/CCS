const gulp = require('gulp')
const sass = require('gulp-sass')
const path = require('path')



const repoRoot = path.join(__dirname, '/')
const govUkFrontendToolkitRoot = path.join(repoRoot, 'node_modules/govuk_frontend_toolkit/stylesheets')
const govUkElementRoot = path.join(repoRoot, 'node_modules/govuk-elements-sass/public/sass')
const govUkFrontendRoot = path.join(repoRoot, 'node_modules/govuk-frontend/govuk')
const appDirectory = `./src/main/common/components/imported`


const assetsDirectory = './src/main/public'
const stylesheetsDirectory = `${assetsDirectory}/styles`
const antennaWebChatDirectory = `./src/main/public/assets`
const govUkFronendStylesheets = `${stylesheetsDirectory}/govuk-frontend`