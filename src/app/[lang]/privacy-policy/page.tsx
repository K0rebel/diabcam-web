import { getDictionary } from '@/lib/get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent'

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pl' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main>
      <Navbar lang={lang} dict={dict} />
      <div className="section animate-fade-in">
        <div className="container">
          <PrivacyPolicyContent lang={lang} />
        </div>
      </div>
      <Footer lang={lang} dict={dict} />
    </main>
  )
}
