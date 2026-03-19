import Image from 'next/image'
import styles from './Features.module.css'
import { Eye, Mic, ListChecks } from 'lucide-react'

export default function Features({ dict }: { dict: any }) {
  return (
    <section className={`${styles.features} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.content} animate-fade-in`}>
            <h2 className={styles.title}>{dict.features.aiTitle}</h2>
            <p className={styles.description}>{dict.features.aiDesc}</p>
            
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Eye size={24} />
                </div>
                <div>
                  <h3>Vision AI</h3>
                  <p>{dict.features.aiDesc}</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Mic size={24} />
                </div>
                <div>
                  <h3>{dict.features.voiceTitle}</h3>
                  <p>{dict.features.voiceDesc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.visual} animate-fade-in delay-2`}>
            <Image 
              src="/assets/screen_scan.png" 
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
