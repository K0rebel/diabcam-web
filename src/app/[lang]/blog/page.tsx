import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import plDict from '@/dictionaries/pl.json'
import enDict from '@/dictionaries/en.json'

const dicts: Record<string, typeof plDict> = { pl: plDict, en: enDict }

// Generujemy statyczne strony dla każdej wersji językowej w czasie BUDOWANIA
export async function generateStaticParams() {
  return [{ lang: 'pl' }, { lang: 'en' }]
}

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
  const dict = dicts[lang] ?? plDict
  return {
    title: `${dict.blog.title} | DiabCam`,
    description: dict.blog.subtitle,
  }
}

export default async function BlogIndex({ params: { lang } }: { params: { lang: string } }) {
  const dict = dicts[lang] ?? plDict
  // getAllPosts() jest wywoływane podczas BUDOWANIA, nie w runtime serverless
  const posts = getAllPosts()

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <h1 className={styles.title}>{dict.blog.title}</h1>
            <p className={styles.subtitle}>{dict.blog.subtitle}</p>
          </header>

          {posts.length === 0 ? (
            <div className={styles.empty}>Brak wpisów.</div>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <Link href={`/${lang}/blog/${post.slug}`} key={post.slug} className={styles.card}>
                  <div className={styles.imageWrap}>
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className={styles.image}
                      />
                    ) : (
                      <div className={styles.placeholder} />
                    )}
                  </div>
                  <div className={styles.content}>
                    <p className={styles.date}>{post.date}</p>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.description}</p>
                    <span className={styles.readMore}>{dict.blog.readMore}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
