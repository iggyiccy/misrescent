import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import org1 from '@/images/org/org1.webp'
import org2 from '@/images/org/org2.webp'
import org3 from '@/images/org/org3.webp'
import org4 from '@/images/org/org4.webp'
import org5 from '@/images/org/org5.webp'
import org6 from '@/images/org/org6.webp'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1502987846294-e7ec70f4b393?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={2873}
              height={1915}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            關於我們
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>謹向牧師，教會領袖，主內同工在基督裡問安！​</p>
            <p>
              「所以, 你們要去, 使萬民作我的門徒,
              奉父、子、聖靈的名給他們施洗。」 馬太福音 28:19
            </p>
            <p>
              這是主耶穌基督升天之前給祂教會的大使命。在維省近年華人教會不斷增長,
              其中有不少的中小型教會願意推廣宣教事工，但縱使她們有一顆熱切的心,由於資源的限制，宣教對她們來說是一個很大的障礙。但是，如果眾教會能一起工作，便可以更容易結合資源和努力來實現大使命。
            </p>
            <p className="font-bold">宣教資源中心宗旨:</p>
            <ul>
              <li>．聯繫維省內有宣教心志的教會</li>
              <li>．提供教會有一套簡潔而有效的宣教課程</li>
              <li>．通過課程讓各弟兄姊妹增加對宣教的認識和神學基礎</li>
              <li>．為有志參與宣教工作的門徒提供鼓勵和訓練</li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink> */}
            <SocialLink
              href="mailto:info@misrescent.org"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              info@misrescent.org
            </SocialLink>
          </ul>
        </div>
      </div>
      {/* 信仰宣言
      我們相信全部新舊約聖經是神的啟示，將祂救贖人類的計劃完全啟示出來，
      也是信仰與生活最高神聖的準則。
      我們相信獨一的真活神，即永存的聖父、聖子與聖靈。
      我們相信聖子耶穌基督，是真神也是真人，由聖靈感孕童貞女馬利亞所生。祂死於
      十字架上，流血為人贖罪。神使祂從死裡復活、升天，並要照祂的應許快要親自再臨。
      我們相信聖靈，三一真神的第三位，與聖父、聖子同質、同權。同存。祂的工作使人
      知罪、重生，並住在信徒心中，使他有能力過聖潔的生活與事奉神、服務人。
      我們相信人是照神的形象造的，在亞當裡墮落成為罪人，都需要神的救恩。
      我們相信悔改的罪人唯賴神的恩典得以重生，並因信耶穌基督得以稱義。
      我們相信義人身體復活得永生，不義的人復活受永刑。
      我們相信教會的元首是基督。教會是一體的，由聖靈所重生的人組成，並在敬拜、
      交通、傳福音及事奉上發揮其功用。 */}
      <div className="flex flex-col items-center pt-16">
        <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          信仰宣言
        </h1>
        <div className="mt-6 max-w-2xl space-y-7 px-2 text-base text-zinc-600 dark:text-zinc-400">
          <ul
            style={{ listStyleType: 'decimal' }}
            className="space-y-2 text-left"
          >
            <li>
              我們相信全部新舊約聖經是神的啟示，將祂救贖人類的計劃完全啟示出來，也是信仰與生活最高神聖的準則。
            </li>
            <li>我們相信獨一的真活神，即永存的聖父、聖子與聖靈。</li>
            <li>
              我們相信聖子耶穌基督，是真神也是真人，由聖靈感孕童貞女馬利亞所生。祂死於十字架上，流血為人贖罪。神使祂從死裡復活、升天，並要照祂的應許快要親自再臨。
            </li>
            <li>
              我們相信聖靈，三一真神的第三位，與聖父、聖子同質、同權。同存。祂的工作使人知罪、重生，並住在信徒心中，使他有能力過聖潔的生活與事奉神、服務人。
            </li>
            <li>
              我們相信人是照神的形象造的，在亞當裡墮落成為罪人，都需要神的救恩。
            </li>
            <li>
              我們相信悔改的罪人唯賴神的恩典得以重生，並因信耶穌基督得以稱義。
            </li>
            <li>我們相信義人身體復活得永生，不義的人復活受永刑。</li>
            <li>
              我們相信教會的元首是基督。教會是一體的，由聖靈所重生的人組成，並在敬拜、交通、傳福音及事奉上發揮其功用。
            </li>
          </ul>
        </div>
        <h1 className="py-16 text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          合作機構
        </h1>
        <div className="flex max-w-28 justify-center pb-4 sm:max-w-2xl sm:flex-row">
          <Image src={org1} alt="org1" />
          <Image src={org2} alt="org2" />
        </div>
        <div className="flex max-w-48 justify-center pb-4 sm:max-w-2xl sm:flex-row">
          <Image src={org3} alt="org3" />
        </div>
        <div className="flex max-w-52 justify-center pb-4 sm:max-w-2xl sm:flex-row">
          <Image src={org4} alt="org4" />
        </div>
        <div className="flex max-w-28 justify-center pb-4 sm:max-w-2xl sm:flex-row">
          <Image src={org5} alt="org5" />
          <Image src={org6} alt="org6" />
        </div>
      </div>
    </Container>
  )
}
