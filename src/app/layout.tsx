import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template:
      '%s | Mission Resource Centre | MRC 宣教資源中心 | Melbourne, VIC Australia',
    default:
      'Mission Resource Centre | MRC 宣教資源中心 | Melbourne, VIC Australia',
  },
  description:
    '這是主耶穌基督升天之前給祂教會的大使命。在維省近年華人教會不斷增長, 其中有不少的中小型教會願意推廣宣教事工，但縱使她們有一顆熱切的心,由於資源的限制，宣教對她們來說是一個很大的障礙。但是，如果眾教會能一起工作，便可以更容易結合資源和努力來實現大使命。Mission Resource Centre 宣教資源中心宗旨:​​ 聯繫維省內有宣教心志的教會。提供教會有一套簡潔而有效的宣教課程。通過課程讓各弟兄姊妹增加對宣教的認識和神學基礎。為有志參與宣教工作的門徒提供鼓勵和訓練。',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-11TV528SRR"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-11TV528SRR');
          `}
        </Script>
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
