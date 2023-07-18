import cock from '@/../public/cock.jpg'
import qrCode from '@/../public/qrCode.jpg'
import Card from '@/components/cards/cat/Card'
import { IFooterProps } from '@/components/footer'
import { Layout } from '@/components/layout'
import { INavBarProps } from '@/components/navbar'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next Demo',
  description: 'Welcome to Next.js'
}
const cardContent = {
  tag: 'latte',
  title: `A cock latte`,
  body: '不知道为什么就变成这样了',
  author: 'Alex',
  time: '2h ago',
  cardImage: cock,
  avatar: cock
}
const navbarData : INavBarProps = {}
const footerData : IFooterProps = {
  title: "Demo",
      linkList: [
        {
          title: "技术栈",
          list: [
            {
              label: "react",
            },
            {
              label: "typescript",
            },
            {
              label: "ssr",
            },
            {
              label: "nodejs",
            },
          ],
        },
        {
          title: "了解更多",
          list: [
            {
              label: "掘金",
              link: "https://juejin.cn/user/2714061017452557",
            },
            {
              label: "知乎",
              link: "https://www.zhihu.com/people/zmAboutFront",
            },
            {
              label: "csdn",
            },
          ],
        },
        {
          title: "联系我",
          list: [{ label: "微信" }, { label: "QQ" }],
        },
      ],
      qrCode: {
        image: qrCode.src,
        text: "Next Demo",
      },
      copyRight: "Copyright © 2022 xxx. 保留所有权利",
      siteNumber: "粤ICP备XXXXXXXX号-X",
      publicNumber: "粤公网安备 xxxxxxxxxxxxxx号",
    }

const Page : any = () => {
  return (
    <>
      <Layout navbarData={navbarData} footerData={footerData}>
        <Link href="/dashboard">Dashboard</Link>
        <div style={{ display: 'flex',justifyContent:'space-evenly' }}>
          <Card {...cardContent} />
          <Card {...cardContent} />
          <Card {...cardContent} />
        </div>
      </Layout>
    </>
  )
}
export default Page
