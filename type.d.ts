type Meta = {
    slug: string,
    title: string,
    description: string,
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

type NavLink = {
    id: string,
    name: string,
    href: string,
    icon: string,
}

type Settings = {
    sitename: string,
    logo?: string,
    phone?: string,
    email?: string,
    address?: string,
}