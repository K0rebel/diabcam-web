import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <Link href={`/${lang}`} className={styles.logo}>
          <Image
            src="/assets/icon-rounded.webp"
            alt="DiabCam Logo"
            width={40}
            height={40}
          />
          <span>DiabCam</span>
        </Link>
        <div className={styles.links}>
          <Link href={`/${lang === 'pl' ? 'en' : 'pl'}`} className={styles.langSwitch}>
            {lang === 'pl' ? 'English' : 'Polski'}
          </Link>
          <a href="https://play.google.com/store/apps/details?id=com.corebell.diabcam" className={styles.cta}>
            {dict.hero.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
