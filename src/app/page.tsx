import cock from '@/../public/cock.jpg'
import Card from '@/components/cards/cat/Card'
import { ILayoutProps, Layout } from '@/components/layout'
import { Metadata } from 'next'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next Demo',
  description: 'Welcome to Next.js'
}
const t = {
  tag: 'latte',
  title: `A cock latte`,
  body: '不知道为什么就变成这样了',
  author: 'Alex',
  time: '2h ago',
  cardImage: cock,
  avatar: cock
}
const Page = (data: AppProps & ILayoutProps) => {
  const { navbarData, footerData } = data
  return (
    <>
      <Layout navbarData={navbarData} footerData={footerData}>
        <Link href="/dashboard">Dashboard</Link>
        <div style={{ display: 'flex' }}>
          <Card {...t} />
          <Card {...t} />
          <Card {...t} />
        </div>
      </Layout>
    </>
  )
}
export default Page
