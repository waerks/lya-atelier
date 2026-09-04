import type {MetadataRoute} from 'next'; export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://lya-atelier.vercel.app/sitemap.xml'}}
