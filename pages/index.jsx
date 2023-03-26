import Head from 'next/head'
import { ThemeSwitcher, SideBar, Hero, About, Works, Contact } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Đào Xuân Quý</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <ThemeSwitcher />
      <SideBar />
      <main className='bg-secondary dark:bg-tertiary transition-all duration-300 min-h-screen ml-64 overflow-hidden'>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
    </>
  )
}