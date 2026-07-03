import Image from 'next/image'
import { Camera, Mic, Search } from 'lucide-react'
import styles from './Features.module.css'
import ScrollReveal from './ScrollReveal'

const FEATURES = [
  {
    Icon: Camera,
    titleKey: 'photoTitle' as const,
    descKey: 'photoDesc' as const,
    color: '#2f52db',
    colorBg: 'rgba(47,82,219,0.09)',
  },
  {
    Icon: Mic,
    titleKey: 'describeTitle' as const,
    descKey: 'describeDesc' as const,
    color: '#7c3aed',
    colorBg: 'rgba(124,58,237,0.09)',
  },
  {
    Icon: Search,
    titleKey: 'searchTitle' as const,
    descKey: 'searchDesc' as const,
    color: '#0ea5e9',
    colorBg: 'rgba(14,165,233,0.09)',
  },
]

export default function Features({ dict }: { dict: any }) {
  return (
    <section id="features" className={`${styles.features} section`}>
      <div className="container">
        {/* Header */}
        <ScrollReveal className={styles.header}>
          <span className={styles.tag}>Jak to działa</span>
          <h2 className={styles.title}>{dict.features.title}</h2>
          <p className={styles.subtitle}>
            Trzy szybkie i inteligentne sposoby, aby zalogować każdy posiłek —
            bez ważenia, bez stresu.
          </p>
        </ScrollReveal>

        {/* Feature cards */}
        <div className={styles.grid}>
          {FEATURES.map(({ Icon, titleKey, descKey, color, colorBg }, i) => (
            <ScrollReveal key={i} delay={i * 120} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{ background: colorBg, color } as React.CSSProperties}
              >
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className={styles.cardTitle}>{dict.features[titleKey]}</h3>
              <p className={styles.cardDesc}>{dict.features[descKey]}</p>
              <div
                className={styles.cardAccent}
                style={{ background: color } as React.CSSProperties}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Showcase row */}
        <ScrollReveal className={styles.showcase}>
          <div className={styles.showcaseImgWrap}>
            <Image
              src="/assets/screen_scan.webp"
              alt="Ekran skanowania posiłku w DiabCam"
              width={260}
              height={520}
              className={styles.showcaseImg}
            />
            <div className={styles.imgGlow} />
          </div>

          <div className={styles.showcaseText}>
            <div className={styles.showcaseBadge}>AI Vision</div>
            <h3 className={styles.showcaseHeading}>
              Wystarczy jedno zdjęcie
            </h3>
            <p className={styles.showcaseDesc}>
              Technologia rozpoznawania obrazu analizuje skład potrawy w sekundy.
              DiabCam automatycznie wyliczy wymienniki węglowodanowe (WW), kalorie
              i makroskładniki — bez konieczności ważenia.
            </p>
            <ul className={styles.showcaseList}>
              <li>✓ Rozpoznawanie złożonych dań wieloskładnikowych</li>
              <li>✓ Korekta porcji jednym suwakiem</li>
              <li>✓ Historia i ulubione posiłki</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
