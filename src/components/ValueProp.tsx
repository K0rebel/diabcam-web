import { Activity, Flame, Heart } from 'lucide-react'
import styles from './ValueProp.module.css'
import ScrollReveal from './ScrollReveal'

const ITEMS = [
  {
    Icon: Heart,
    title: 'Dla Diabetyków',
    desc: 'Precyzyjne szacowanie WW (Wymienników Węglowodanowych) i WBT. Kontrola Indeksu Glikemicznego i Ładunku Glikemicznego.',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.09)',
  },
  {
    Icon: Flame,
    title: 'Dla Keto i Low Carb',
    desc: 'Automatyczne śledzenie węglowodanów netto i proporcji makroskładników zoptymalizowanych pod Twoje zapotrzebowanie.',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.09)',
  },
  {
    Icon: Activity,
    title: 'Dla Dbających o Sylwetkę',
    desc: 'Monitoruj makroskładniki i kalorie bez konieczności ręcznego ważenia każdego produktu.',
    color: '#2f52db',
    bg: 'rgba(47,82,219,0.09)',
  },
]

export default function ValueProp({ dict }: { dict: any }) {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className={styles.tag}>Dlaczego DiabCam?</span>
          <h2 className={styles.title}>{dict.diets.title}</h2>
          <p className={styles.subtitle}>{dict.diets.subtitle}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {ITEMS.map(({ Icon, title, desc, color, bg }, i) => (
            <ScrollReveal key={i} delay={i * 130} className={styles.card}>
              <div
                className={styles.accentBar}
                style={{ background: color } as React.CSSProperties}
              />
              <div
                className={styles.iconWrap}
                style={{ background: bg, color } as React.CSSProperties}
              >
                <Icon size={22} strokeWidth={2} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
