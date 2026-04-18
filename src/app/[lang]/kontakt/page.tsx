import { getDictionary } from '@/lib/get-dictionary'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './Contact.module.css'
import { Mail, MessageCircle, Facebook } from 'lucide-react'


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
            <h1 className={styles.title}>Kontakt</h1>
            <p className={styles.description}>
              Masz pytania? Chętnie na nie odpowiemy. Skontaktuj się z nami jedną z poniższych metod:
            </p>
            
            <div className={styles.options}>
              <a href="mailto:corebelldev@gmail.com" className={styles.option}>
                <div className={styles.icon}>
                  <Mail size={24} />
                </div>
                <div>
                  <div className={styles.label}>Adres email</div>
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

              <a href="https://www.facebook.com/diabcam" target="_blank" rel="noopener noreferrer" className={styles.option}>
                <div className={styles.icon}>
                  <Facebook size={24} />
                </div>
                <div>
                  <div className={styles.label}>Facebook</div>
                  <div className={styles.value}>facebook.com/diabcam</div>
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
