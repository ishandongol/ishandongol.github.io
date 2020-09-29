import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const portfolioDirectory = join(process.cwd(), '_portfolio')
const experienceDirectory = join(process.cwd(), '_experience')

export function getPortfolioSlugs() {
  return fs.readdirSync(portfolioDirectory)
}

export function getPortfolioBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(portfolioDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPortfolios(fields: string[] = []) {
  const slugs = getPortfolioSlugs()
  const portfolio = slugs
    .map((slug) => getPortfolioBySlug(slug, fields))
    // sort portfolio by date in descending order
    .sort((portfolio1, portfolio2) => (portfolio1.date > portfolio2.date ? -1 : 1))
  return portfolio
}

export function getAllExperience() {
  const fullPath = join(experienceDirectory, `index.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  console.log(data,content)
  return []
}
