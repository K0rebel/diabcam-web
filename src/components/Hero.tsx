import Image from 'next/image'
import styles from './Hero.module.css'
import heroImg from '../../public/assets/hero-scan.webp'

export default function Hero({ dict }: { dict: any }) {
  return (
    <header className={styles.hero}>
      {/* Background decorations */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.gridLines} />
      </div>

      <div className={`${styles.container} container`}>
        {/* Left – content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Już dostępne na Android
          </div>

          <h1 className={styles.title}>
            Liczy się<br />
            <span className={styles.gradientText}>mniej&nbsp;liczenia</span>
          </h1>

          <p className={styles.description}>
            DiabCam to inteligentny skaner posiłków AI — dla diabetyków, keto i aktywnych.
            Zrób zdjęcie, powiedz głosem lub wyszukaj — resztę zrobi za Ciebie nasza technologia.
          </p>

          <div className={styles.actions}>
            <a
              href="https://play.google.com/store/apps/details?id=com.corebell.diabcam"
              className={styles.storeBadge}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt={dict.hero.cta}
                width={158}
                height={48}
              />
            </a>
            <a href="#ios-waitlist" className={styles.storeBadge}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                width={158}
                height={48}
                style={{ borderRadius: '8px' }}
              />
            </a>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5M+</span>
              <span className={styles.statLabel}>produktów w bazie</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>tryby skanowania</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>AI</span>
              <span className={styles.statLabel}>rozpoznawanie potraw</span>
            </div>
          </div>
        </div>

        {/* Right – phone mockup */}
        <div className={styles.mockupWrap}>
          <div className={styles.mockupGlow} />
          <Image
            src={heroImg}
            alt="DiabCam App – podgląd ekranu skanowania"
            width={300}
            height={600}
            priority
            fetchPriority="high"
            className={styles.phone}
          />

          {/* Floating info card */}
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>🍝</div>
            <div>
              <div className={styles.floatingTitle}>Spaghetti Bolognese</div>
              <div className={styles.floatingMeta}>42 WW · 680 kcal · wykryto AI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#features" className={styles.scrollDown} aria-label="Przewiń w dół">
        <div className={styles.scrollDot} />
      </a>
    </header>
  )
}
