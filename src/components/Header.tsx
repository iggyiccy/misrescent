import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
// import { Logo } from '@/components/Logo'
import Logo from '../images/misrescent_logo.png'
import Image from 'next/image'

const navigation = [
  { name: '首頁', href: '#', current: true },
  { name: '關於我們', href: '#', current: false },
  { name: '宣教活動', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image src={Logo} alt="Misrescent" height={72} />
          {/* <Logo className="h-12 w-auto text-slate-900" /> */}
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-04">TBA</time>
              {` `}-{` `}
              <time dateTime="2022-04-06">June, 2024</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Nunawading, VIC</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <div className="flex items-center space-x-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-blue-200 text-blue-900'
                    : 'text-blue-900 hover:bg-blue-200 hover:text-blue-900',
                  'rounded-md px-3 py-2 text-sm font-medium',
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* <Button href="#">Get your tickets</Button> */}
        </div>
      </Container>
    </header>
  )
}
