import Image from 'next/image'
import { Calendar, BarChart3, ClipboardList } from 'lucide-react'
import styles from './Stats.module.css'
import ScrollReveal from './ScrollReveal'

const FEATURES = [
  { Icon: Calendar, key: 'calendar' as const },
  { Icon: BarChart3, key: 'reports' as const },
  { Icon: ClipboardList, key: 'sync' as const },
]

export default function Stats({ dict }: { dict: any }) {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left – text */}
          <ScrollReveal direction="left" className={styles.content}>
            <span className={styles.tag}>Dziennik & Raporty</span>
            <h2 className={styles.title}>{dict.stats.title}</h2>
            <p className={styles.desc}>{dict.stats.desc}</p>
            <ul className={styles.list}>
              {FEATURES.map(({ Icon, key }, i) => (
                <li key={i} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <span>{dict.stats[key]}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://play.google.com/store/apps/details?id=com.corebell.diabcam"
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pobierz aplikację →
            </a>
          </ScrollReveal>

          {/* Right – phone stack */}
          <ScrollReveal direction="right" className={styles.visual}>
            <div className={styles.phoneStack}>
              <Image
                src="/assets/sceen_diary.webp"
                alt="Dziennik posiłków"
                width={210}
                height={420}
                className={styles.phoneBg}
              />
              <Image
                src="/assets/screen_report.webp"
                alt="Raport statystyk"
                width={230}
                height={460}
                className={styles.phoneFg}
              />

              {/* Floating stat card */}
              <div className={styles.floatCard}>
                <div className={styles.floatIcon}>📊</div>
                <div>
                  <div className={styles.floatTitle}>Raport tygodniowy</div>
                  <div className={styles.floatSub}>PDF gotowy do eksportu</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
