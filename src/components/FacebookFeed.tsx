'use client'

import styles from './FacebookFeed.module.css'


export default function FacebookFeed({ dict }: { dict: any }) {
  return (
    <section id="news" className={`${styles.news} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{dict.news.title}</h2>
          <p className={styles.description}>{dict.news.description}</p>
        </div>

        
        <div className={styles.container}>
          <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiabcam&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" 
            width="500" 
            height="800" 
            style={{ border: 'none', overflow: 'hidden', width: '100%', minWidth: '180px', maxWidth: '500px' }} 
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen={true} 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Facebook Feed"
          ></iframe>
        </div>



      </div>
    </section>
  )
}
