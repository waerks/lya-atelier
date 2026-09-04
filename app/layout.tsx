import type {Metadata} from 'next'; import {Playfair_Display,Inter} from 'next/font/google'; import './globals.css'; import Header from '@/components/Header'; import Footer from '@/components/Footer';
const playfair=Playfair_Display({subsets:['latin'],variable:'--font-playfair',display:'swap'}); const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'});
export const metadata:Metadata={title:{default:'LYA ATELIER — Architecture intérieure',template:'%s — LYA ATELIER'},description:'Studio d’architecture intérieure basé à Paris.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" className={`${playfair.variable} ${inter.variable}`}><body className="font-sans"><Header/>{children}<Footer/></body></html>}
