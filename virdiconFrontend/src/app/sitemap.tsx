import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://virdicon.com',
            lastModified: new Date(),
        },
        {
            url: 'https://virdicon.com/about',
            lastModified: new Date(),
        },
        {
            url: 'https://virdicon.com/services',
            lastModified: new Date(),
        },
        {
            url: 'https://virdicon.com/development',
            lastModified: new Date(),
        },
        {
            url: 'https://virdicon.com/services',
            lastModified: new Date(),
        },
        {
            url: 'https://virdicon.com/policy',
            lastModified: new Date(),
        },
    ]
}