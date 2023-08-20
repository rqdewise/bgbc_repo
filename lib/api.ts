import fs from  'fs'
import { join } from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import Iframes from '@/components/Iframes'
import Video from '@/components/VideoIframe'


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

    const {frontmatter, content} = await compileMDX<{ title: string, date: string, tags: string[]}>(
        {
            source: fileContents,
            components: {
                Iframes,
                Video,
            },
            options: {parseFrontmatter: true},
        }
    )
    
    const pageContent: PageContent = {
        meta: {slug: realSlug, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags},
        content
    }

    return pageContent

}
