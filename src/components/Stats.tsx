import Image from 'next/image'
import styles from './Stats.module.css'
import { Calendar, BarChart3, Cloud } from 'lucide-react'

export default function Stats({ dict }: { dict: any }) {
  return (
    <section className={`${styles.stats} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.visual} animate-fade-in`}>
            <div className={styles.imageStack}>
              <Image
                src="/assets/sceen_diary.webp"
                alt="Diary Screen"
                width={300}
                height={600}
                className={styles.imageBack}
              />
              <Image
                src="/assets/screen_report.webp"
                alt="Report Screen"
                width={300}
                height={600}
                className={styles.imageFront}
              />
            </div>
          </div>
          <div className={`${styles.content} animate-fade-in delay-2`}>
            <h2 className={styles.title}>{dict.stats.title}</h2>
            <p className={styles.description}>{dict.stats.desc}</p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon}><Calendar size={20} /></div>
                <span>{dict.stats.calendar}</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}><BarChart3 size={20} /></div>
                <span>{dict.stats.reports}</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}><Cloud size={20} /></div>
                <span>{dict.stats.sync}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
