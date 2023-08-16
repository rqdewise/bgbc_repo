type Meta = {
    id: string,
    title: string,
    date: string,
    tags: string[],
}

type PageContent = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,

}

type PageSlugs = {
    slug: string,
    fullPath: string,
}