import styles from './ValueProp.module.css'
import { Activity, Flame, Heart } from 'lucide-react'

export default function ValueProp({ dict }: { dict: any }) {
  return (
    <section className={`${styles.valueProp} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{dict.hero.title}</h2>
          <p className={styles.subtitle}>{dict.diets.subtitle}</p>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.item} animate-fade-in`}>
            <div className={styles.iconWrapper}>
              <Heart className={styles.icon} />
            </div>
            <h3>{dict.diets.diabeticTitle}</h3>
            <p>{dict.diets.diabeticDesc}</p>
          </div>
          <div className={`${styles.item} animate-fade-in delay-1`}>
            <div className={styles.iconWrapper}>
              <Flame className={styles.icon} />
            </div>
            <h3>{dict.diets.ketoTitle}</h3>
            <p>{dict.diets.ketoDesc}</p>
          </div>
          <div className={`${styles.item} animate-fade-in delay-2`}>
            <div className={styles.iconWrapper}>
              <Activity className={styles.icon} />
            </div>
            <h3>{dict.diets.fitnessTitle}</h3>
            <p>{dict.diets.fitnessDesc}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
