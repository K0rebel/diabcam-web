import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '@/lib/blog'
import { getDictionary } from '@/lib/get-dictionary'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export async function generateMetadata({ params: { lang, slug } }: { params: { lang: string; slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: 'Not found' }
  }
  return {
    title: `${post.title} | DiabCam`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPost({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  const dict = await getDictionary(lang as any)
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar lang={lang} dict={dict} />
      <main className={styles.main}>
        <article className={styles.article}>
          <div className="container">
            <Link href={`/${lang}/blog`} className={styles.backLink}>
              {dict.blog.backToBlog}
            </Link>

            <header className={styles.header}>
              <div className={styles.meta}>
                <span className={styles.date}>{dict.blog.publishedOn}: {post.date}</span>
              </div>
              <h1 className={styles.title}>{post.title}</h1>
            </header>
          </div>

          {post.coverImage && (
            <div className={styles.coverWrapper}>
              <div className="container">
                <div className={styles.imageWrap}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className={styles.image}
                    priority
                  />
                </div>
              </div>
            </div>
          )}

          <div className="container">
            <div className={styles.content}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  )
}
