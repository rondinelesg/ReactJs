import Principal from '@/pages/Principal'
import Sobre from '@/pages/Sobre'
import Header from '@/components/Layout/Header/index'
import { Fragment } from 'react'
import "./"
import { Footer } from '@/components/Layout/Footer'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Principal />
        <Sobre />
      </main>
      <Footer />
    </Fragment>

  )
}
