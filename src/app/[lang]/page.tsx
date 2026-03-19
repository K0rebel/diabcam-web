import { getDictionary } from '@/lib/get-dictionary'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ValueProp from '@/components/ValueProp'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pl' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)


  return (
    <main>
      <Navbar lang={lang} dict={dict} />
      <Hero dict={dict} />
      <Features dict={dict} />
      <ValueProp dict={dict} />
      <Stats dict={dict} />
      <Footer dict={dict} />
    </main>
  )
}
