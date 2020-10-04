const fs = require('fs')
const path = require('path')

const dir = path.join(process.cwd(), '_portfolio')

function getPortfolioSlugs() {
  return fs.readdirSync(dir)
}
const files = getPortfolioSlugs()
const privacyPolicy = files.map((file) =>{
  return{
    source: `/portfolio/${file.split('.')[0]}/privacy`,
    destination: `/portfolio/${file.split('.')[0]}/privacy.html`
  }
})
const portfolio = files.map((file) =>{
  return{
    source: `/portfolio/${file.split('.')[0]}`,
    destination: `/portfolio/${file.split('.')[0]}.html`
  }
})
console.log(JSON.stringify([...portfolio,...privacyPolicy]))