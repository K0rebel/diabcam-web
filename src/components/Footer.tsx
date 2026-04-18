import Link from 'next/link'
import Image from 'next/image'
import { Facebook } from 'lucide-react'
import styles from './Footer.module.css'


export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  const privacyPath = lang === 'pl' ? '/pl/polityka-prywatnosci' : '/en/privacy-policy'
  const contactPath = lang === 'pl' ? '/pl/kontakt' : '/en/contact'

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/assets/icon-rounded.webp"
              alt="DiabCam Logo"
              width={32}
              height={32}
            />
            <span>DiabCam</span>
          </div>
          <div className={styles.links}>
            <Link href={privacyPath}>{dict.footer.privacy}</Link>
            <Link href={contactPath}>{dict.footer.contact}</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{dict.footer.rights}</p>
          <div className={styles.socials}>
            <a 
              href="https://www.facebook.com/diabcam" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
