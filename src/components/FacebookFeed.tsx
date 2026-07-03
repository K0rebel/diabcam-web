'use client'

import styles from './FacebookFeed.module.css'
import ScrollReveal from './ScrollReveal'

export default function FacebookFeed({ dict }: { dict: any }) {
  return (
    <section id="news" className={`${styles.section} section`}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <span className={styles.tag}>Aktualności</span>
          <h2 className={styles.title}>{dict.news.title}</h2>
          <p className={styles.desc}>{dict.news.description}</p>
        </ScrollReveal>

        <ScrollReveal delay={100} className={styles.embedOuter}>
          <div className={styles.embedCard}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiabcam&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="700"
              style={{
                border: 'none',
                overflow: 'hidden',
                width: '100%',
                minWidth: '180px',
                maxWidth: '500px',
                display: 'block',
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Feed DiabCam"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
