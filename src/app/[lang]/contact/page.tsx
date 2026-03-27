import { getDictionary } from '@/lib/get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../kontakt/Contact.module.css'
import { Mail, MessageCircle } from 'lucide-react'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as any)

  return (
    <main>
      <Navbar lang={lang} dict={dict} />
      <div className="section">
        <div className="container">
          <div className={styles.contactContainer}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
              Have questions? We'd love to hear from you. Get in touch with us through one of the following methods:
            </p>
            
            <div className={styles.options}>
              <a href="mailto:corebelldev@gmail.com" className={styles.option}>
                <div className={styles.icon}>
                  <Mail size={24} />
                </div>
                <div>
                  <div className={styles.label}>Email Address</div>
                  <div className={styles.value}>corebelldev@gmail.com</div>
                </div>
              </a>
              
              <a href="https://m.me/682745358260897" target="_blank" rel="noopener noreferrer" className={styles.option}>
                <div className={styles.icon}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className={styles.label}>Messenger</div>
                  <div className={styles.value}>m.me/682745358260897</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer lang={lang} dict={dict} />
    </main>
  )
}
