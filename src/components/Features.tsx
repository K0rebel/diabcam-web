import Image from 'next/image'
import styles from './Features.module.css'
import { Camera, Mic, Search } from 'lucide-react'

export default function Features({ dict }: { dict: any }) {
  return (
    <section className={`${styles.features} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.content} animate-fade-in`}>
            <h2 className={styles.title}>{dict.features.title}</h2>
            <p className={styles.description}>{dict.features.description}</p>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Camera size={24} />
                </div>
                <div>
                  <h3>{dict.features.photoTitle}</h3>
                  <p>{dict.features.photoDesc}</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Mic size={24} />
                </div>
                <div>
                  <h3>{dict.features.describeTitle}</h3>
                  <p>{dict.features.describeDesc}</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Search size={24} />
                </div>
                <div>
                  <h3>{dict.features.searchTitle}</h3>
                  <p>{dict.features.searchDesc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.visual} animate-fade-in`}>
            <Image
              src="/assets/screen_scan.webp"
              alt="Scanning Meal"
              width={400}
              height={800}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
