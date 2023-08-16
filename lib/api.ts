import fs from  'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const pagesDir = join(process.cwd(), '_pages')

export function getPageSlugs(){
    const files =  fs.readdirSync(pagesDir)

    const allPageSlugs = files.map( (file) => {
        //remove .mdx name
        const slug = file.replace(/\.mdx$/,'')
        
        const fullPath = join(pagesDir, file)
        
        const pageSlugs: PageSlugs = {
            slug,
            fullPath,
        }

        return pageSlugs
    })

    return allPageSlugs
}

export async function getPageBySlug(slug: string){
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(pagesDir, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark().use(remarkHtml).process(matterResult.content)

    const contentHtml = processedContent.toString()

    const pageContentHtml: Meta & { contentHtml: string } = {
        id : slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        tags: matterResult.data.tags,
        contentHtml
    }
  
    return pageContentHtml
}
