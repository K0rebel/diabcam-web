import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer({ dict }: { dict: any }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image 
              src="/assets/icon-rounded.png" 
              alt="DiabCam Logo" 
              width={32} 
              height={32} 
            />
            <span>DiabCam</span>
          </div>
          <div className={styles.links}>
            <Link href="#">{dict.footer.privacy}</Link>
            <Link href="#">{dict.footer.terms}</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{dict.footer.rights}</p>
          <div className={styles.socials}>
            {/* Social icons if needed */}
          </div>
        </div>
      </div>
    </footer>
  )
}
