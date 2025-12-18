import getColors from 'get-image-colors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const imagePath = path.join(__dirname, 'src/assets/logo.png')

getColors(imagePath).then(colors => {
    console.log('Colors found:')
    colors.map(color => console.log(color.hex()))
}).catch(err => {
    console.error('Error:', err)
})
