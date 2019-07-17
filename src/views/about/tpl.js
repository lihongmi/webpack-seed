import content from './about.ejs'
import layout from 'layout/layout/layout.js'
const pageTitle = '关于我们'

const temp = layout.init({ pageTitle }).run(content())

export default temp
