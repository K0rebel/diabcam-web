import Image from 'next/image'
import styles from './Hero.module.css'
import heroImg from '../../public/assets/hero-scan.webp'

export default function Hero({ dict }: { dict: any }) {
  return (
    <header className={`${styles.hero} section`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.content} animate-fade-in`}>
          <h1 className={styles.title}>{dict.hero.title}</h1>
          <p className={styles.description}>{dict.hero.description}</p>
          <div className={`${styles.actions} delay-1`}>
            <a href="https://play.google.com/store/apps/details?id=com.corebell.diabcam" className={styles.cta}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt={dict.hero.cta}
                width={160}
                height={48}
              />
            </a>
          </div>
        </div>
        <div className={`${styles.mockup} animate-fade-in`}>
          <Image
            src={heroImg}
            alt="DiabCam Mockup"
            width={450}
            height={900}
            priority
            fetchPriority="high"
            className={styles.image}
          />
        </div>
      </div>
    </header>
  )
}
