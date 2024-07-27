import fs from  'fs'
import { join } from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

import PostImage from '@/components/post-image'
import Iframes from '@/components/Iframes'
import Video from '@/components/videoIframe'
import SpanItalic from '@/components/span-italic'
import { Separator } from '@/components/ui/separator'

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

    const {frontmatter, content} = await compileMDX<{ title: string, description:string, date: string, tags: string[]}>(
        {
            source: fileContents,
            components: {
                Iframes,
                Video,
                PostImage,
                SpanItalic,
                Separator,
            },
            options: {parseFrontmatter: true},
        }
    )
    
    const pageContent: PageContent = {
        meta: {slug: realSlug, title: frontmatter.title, description: frontmatter.description, date: frontmatter.date, tags: frontmatter.tags},
        content
    }
    
    return pageContent
}
