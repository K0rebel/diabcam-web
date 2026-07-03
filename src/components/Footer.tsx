import Link from 'next/link'
import Image from 'next/image'
import { Facebook } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer({ lang, dict }: { lang: string; dict: any }) {
  const privacyPath = lang === 'pl' ? '/pl/polityka-prywatnosci' : '/en/privacy-policy'
  const contactPath = lang === 'pl' ? '/pl/kontakt' : '/en/contact'

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandLogo}>
            <Image
              src="/assets/icon-rounded.webp"
              alt="DiabCam Logo"
              width={30}
              height={30}
              className={styles.logoImg}
            />
            <span className={styles.brandName}>DiabCam</span>
          </div>
          <p className={styles.tagline}>Inteligentny skaner posiłków AI</p>
        </div>

        {/* Links */}
        <nav className={styles.links} aria-label="Stopka – nawigacja">
          <Link href={privacyPath} className={styles.link}>
            {dict.footer.privacy}
          </Link>
          <Link href={contactPath} className={styles.link}>
            {dict.footer.contact}
          </Link>
          <a
            href="https://www.facebook.com/diabcam"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            aria-label="Facebook"
          >
            <Facebook size={17} strokeWidth={2} />
          </a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>{dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
