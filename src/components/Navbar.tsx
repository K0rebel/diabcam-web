'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.inner} container`}>
        <Link href={`/${lang}`} className={styles.logo} onClick={close}>
          <Image
            src="/assets/icon-rounded.webp"
            alt="DiabCam Logo"
            width={36}
            height={36}
            className={styles.logoImg}
          />
          <span className={styles.logoText}>DiabCam</span>
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Otwórz menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop + Mobile links */}
        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <a href="/#features" className={styles.navLink} onClick={close}>
            Funkcje
          </a>
          <a href="/#news" className={styles.navLink} onClick={close}>
            {dict.news.title}
          </a>
          <Link href={`/${lang}/blog`} className={styles.navLink} onClick={close}>
            {dict.blog?.title || 'Blog'}
          </Link>
          <Link
            href={`/${lang === 'pl' ? 'en' : 'pl'}`}
            className={styles.langSwitch}
            onClick={close}
          >
            {lang === 'pl' ? 'EN' : 'PL'}
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.corebell.diabcam"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            {dict.hero.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
