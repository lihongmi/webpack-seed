import content from './page1.ejs'
import layout from 'layout/layoutcommon/layout.js'
const pageTitle = 'page1'




const temp = layout.init({ pageTitle }).run(content())

export default temp
