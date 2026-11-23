"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState, type ReactNode } from "react"
import { ArrowDown, ArrowUp, BookOpen, Church, Cross, HeartHandshake, Menu, MessageCircle, ScrollText, X } from "lucide-react"
import sourceBlocks from "@/data/teaching-content.json"

const links = [
  ["your-life", "Your Life Truly Begins Anew"],
  ["life-began", "Here Is How Your Life Began"],
  ["steps", "Steps to a Happy Christian Life"],
  ["public-confession", "Public Confession"],
  ["baptism", "Baptism"],
  ["attendance", "Regular Church Attendance"],
  ["prayer", "Prayer Life"],
  ["bible-reading", "Daily Bible Reading"],
  ["consecrate", "Consecrate Your All"],
  ["soul-winner", "Be a Soul Winner"],
  ["remember", "Remember"],
  ["covenant", "Church Covenant"],
  ["confession-faith", "A Condensed Statement of Our Confession of Faith"],
  ["welcome", "A Special Welcome to New Members"],
] as const

const lessons = [
  { id: "public-confession", title: "Public Confession", icon: MessageCircle, description: "Take your stand openly and confess your faith in Christ." },
  { id: "baptism", title: "Baptism", icon: Cross, description: "Follow the Lord in believer’s baptism by immersion." },
  { id: "attendance", title: "Regular Attendance", icon: Church, description: "Grow in fellowship, worship, and service with the church." },
  { id: "prayer", title: "Prayer Life", icon: HeartHandshake, description: "Make room each day to speak with the Lord." },
  { id: "bible-reading", title: "Daily Bible Reading", icon: BookOpen, description: "Read, believe, remember, and live by God’s Word." },
  { id: "consecrate", title: "Consecrate Your All", icon: ScrollText, description: "Offer your life, time, talents, and service to God." },
  { id: "soul-winner", title: "Be a Soul Winner", icon: Cross, description: "Share the good news and your personal testimony." },
]

const blockText = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim()
const starts = (phrase: string) => sourceBlocks.findIndex((block) => blockText(block).toLowerCase().startsWith(phrase.toLowerCase()))
const startsExact = (phrase: string) => sourceBlocks.findIndex((block) => blockText(block).toLowerCase() === phrase.toLowerCase())
const paragraph = (html: string, key: number, extra = "") => <div key={key} className={`source-paragraph ${extra}`} dangerouslySetInnerHTML={{ __html: html }} />
const anchor = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

function ScriptureQuote({ html, itemKey }: { html: string; itemKey: number }) {
  const text = blockText(html)
  const citation = text.match(/\b(?:Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|Samuel|Kings|Chronicles|Ezra|Nehemiah|Esther|Job|Psalms?|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|Corinthians|Galatians|Ephesians|Philippians|Colossians|Thessalonians|Timothy|Titus|Philemon|Hebrews|James|Peter|Jude|Revelation)\s+\d+(?::[\d,\s–-]+)?(?:\s*\(KJV\))?\s*\.?$/i)?.[0]?.trim()
  const passage = citation ? html.replace(citation, "") : html
  return <blockquote key={itemKey} className="scripture-quote source-scripture"><div dangerouslySetInnerHTML={{ __html: passage }} />{citation && <cite>{citation}</cite>}</blockquote>
}

function SourceText({ blocks, start = 0, end = blocks.length }: { blocks: string[]; start?: number; end?: number }) {
  const content = blocks.slice(start, end)
  const nodes: ReactNode[] = []
  let offset = 0
  while (offset < content.length) {
    const text = blockText(content[offset])
    const isBullet = /^\*\s/.test(text)
    const isNumbered = /^\d+\.\s/.test(text)
    if (isBullet || isNumbered) {
      const listStart = offset
      while (offset < content.length && (isBullet ? /^\*\s/.test(blockText(content[offset])) : /^\d+\.\s/.test(blockText(content[offset])))) offset++
      const originalItems = content.slice(listStart, offset)
      if (isNumbered && originalItems.length === 1 && !/^\d+\.\s*We believe/i.test(blockText(originalItems[0]))) {
        nodes.push(paragraph(originalItems[0], start + listStart, "source-numbered"))
        continue
      }
      const items = originalItems.map((html, index) => {
        const withoutMarker = html.replace(/^<p[^>]*>\s*(?:\*|\d+\.)\s*/i, "").replace(/<\/p>\s*$/i, "")
        return <li key={start + listStart + index} dangerouslySetInnerHTML={{ __html: withoutMarker }} />
      })
      nodes.push(isBullet ? <ul className="source-list" key={start + listStart}>{items}</ul> : <ol className="source-list source-list-numbered" key={start + listStart}>{items}</ol>)
      continue
    }
    const subsection = /^[a-z]\.\s/i.test(text)
    const quote = /^[\u0027“]/.test(text) || /^"/.test(text)
    const scripture = (quote || text.includes('"')) && /\b(?:Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|Samuel|Kings|Chronicles|Ezra|Nehemiah|Esther|Job|Psalms?|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|Corinthians|Galatians|Ephesians|Philippians|Colossians|Thessalonians|Timothy|Titus|Philemon|Hebrews|James|Peter|Jude|Revelation)\s+\d/i.test(text)
    const style = `${subsection ? "source-subsection" : ""} ${quote ? "source-quote" : ""}`
    nodes.push(scripture ? <ScriptureQuote key={start + offset} html={content[offset]} itemKey={start + offset} /> : paragraph(content[offset], start + offset, style))
    offset++
  }
  return <>{nodes}</>
}

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return <div className="section-heading" id={id}><span>{eyebrow}</span><h2>{title}</h2></div>
}

function ChurchDocumentSection({ eyebrow, title, id, blocks, start, end }: { eyebrow: string; title: string; id: string; blocks: string[]; start: number; end: number }) {
  return <section className="content-section document-section" id={id}>
    <SectionHeading eyebrow={eyebrow} title={title} id={`${id}-heading`} />
    <div className="document-copy"><SourceText blocks={blocks} start={start} end={end} /></div>
  </section>
}

function OpeningWorksheet({ blocks, start, end }: { blocks: string[]; start: number; end: number }) {
  return <div className="opening-worksheet">
    {blocks.slice(start, end).map((html, offset) => {
      const index = start + offset
      const text = blockText(html)
      if (/^My Name/i.test(text)) return <label className="worksheet-name" htmlFor="new-believer-name" key={index}>My Name<input id="new-believer-name" name="name" type="text" autoComplete="name" /></label>
      if (/^I was Saved/i.test(text)) return <fieldset className="worksheet-date" key={index}><legend>I was Saved</legend><div>{["Month", "Day", "Year"].map((part) => <label key={part} htmlFor={`saved-${part.toLowerCase()}`}>{part}<input id={`saved-${part.toLowerCase()}`} name={`saved-${part.toLowerCase()}`} type="text" inputMode="numeric" maxLength={part === "Year" ? 4 : 2} /></label>)}</div></fieldset>
      return <SourceText blocks={blocks} start={index} end={index + 1} key={index} />
    })}
  </div>
}

function TableOfContents({ active, onNavigate, mobile = false, onClose }: { active: string; onNavigate: (id: string) => void; mobile?: boolean; onClose?: () => void }) {
  return <nav aria-label="Table of contents" className={mobile ? "toc-mobile-list" : "toc-list"}>
    {links.map(([id, label], index) => <a key={id} href={`#${id}`} className={active === id ? "toc-link active" : "toc-link"} onClick={(event) => { event.preventDefault(); onNavigate(id); onClose?.() }}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
  </nav>
}

function LessonNavigationCard({ lesson, index }: { lesson: (typeof lessons)[number]; index: number }) {
  const Icon = lesson.icon
  return <a className="lesson-card" href={`#${lesson.id}`} onClick={(event) => { event.preventDefault(); anchor(lesson.id) }}><span className="lesson-card-number">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" size={18} strokeWidth={1.7} /><span className="lesson-card-copy"><strong>{lesson.title}</strong><small>{lesson.description}</small></span><ArrowDown aria-hidden="true" size={16} className="lesson-card-arrow" /></a>
}

function LessonSection({ lesson, number, blocks, start, end }: { lesson: (typeof lessons)[number]; number: number; blocks: string[]; start: number; end: number }) {
  const match = blocks.slice(start, end).findIndex((block) => {
    const text = blockText(block).toLowerCase()
    return text.startsWith(lesson.title.toLowerCase()) || (lesson.id === "soul-winner" && text.startsWith("e. be a soul - winner"))
  })
  const titleBlock = match >= 0 ? start + match : start
  const firstTeachingBlock = titleBlock + 1
  return <section className="lesson-section" id={lesson.id} aria-labelledby={`${lesson.id}-title`}>
    <div className="lesson-section-heading"><span className="lesson-number">{String(number).padStart(2, "0")}</span><h3 id={`${lesson.id}-title`}>{lesson.title}</h3></div>
    <div className="lesson-original-title" dangerouslySetInnerHTML={{ __html: blocks[titleBlock] }} />
    <SourceText blocks={blocks} start={firstTeachingBlock} end={end} />
  </section>
}

export default function TeachingPage() {
  const blocks = sourceBlocks as string[]
  const [active, setActive] = useState("your-life")
  const [tocOpen, setTocOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = useMemo(() => ({ life: starts("Your Life Truly Begins Anew"), born: starts("HERE IS HOW YOUR LIFE BEGAN"), steps: starts("STEPS TO A HAPPY CHRISTIAN LIFE"), remember: startsExact("REMEMBER"), covenant: starts("CHURCH COVENANT"), faith: starts("A CONDENSED STATEMENT OF"), welcome: starts("A SPECIAL WELCOME TO NEW MEMBERS") }), [blocks])
  const lessonStarts = useMemo(() => [starts("1. PUBLIC CONFESSION"), starts("2. BAPTISM"), starts("3. REGULAR ATTENDANCE"), starts("4. PRAYER LIFE"), starts("5. DAILY BIBLE READING"), starts("6. CONSECRATE YOUR ALL"), starts("e. Be a SOUL - WINNER.")], [blocks])
  const lessonEnds = [...lessonStarts.slice(1), sections.remember]

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0)
      const visible = [...links].reverse().find(([id]) => {
        const el = document.getElementById(id)
        return el && el.getBoundingClientRect().top <= 150
      })
      if (visible) setActive(visible[0])
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navigate = (id: string) => { setActive(id); setTocOpen(false); setMenuOpen(false); anchor(id) }
  return <div className="site-shell">
    <div className="reading-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
    {/* <header className="site-header">
      <div className="header-inner">
        <Link href="https://www.bordergatebaptist.net/" className="brand" aria-label="Bordergate Baptist Church home"><Image src="/bgbc-logo.png" alt="Bordergate Baptist Church" width={930} height={222} priority /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="https://www.bordergatebaptist.net/">Home</Link><div className="nav-dropdown"><Link href="https://www.bordergatebaptist.net/mission-vision">About Us</Link><div className="dropdown-panel"><Link href="https://www.bordergatebaptist.net/our-story">Our Story</Link><Link href="https://www.bordergatebaptist.net/mission-vision">Mission &amp; Vision</Link><Link href="https://www.bordergatebaptist.net/from-pastor">From Our Pastor</Link><Link href="https://www.bordergatebaptist.net/time-location">Time &amp; Location</Link></div></div>
          <Link href="https://www.bordergatebaptist.net/ministries">Ministries</Link><div className="nav-dropdown"><Link href="https://www.bordergatebaptist.net/confession-of-faith">Beliefs</Link><div className="dropdown-panel"><Link href="https://www.bordergatebaptist.net/confession-of-faith">Confession of Faith</Link><Link href="https://www.bordergatebaptist.net/how-to-get-saved">How To Get Saved</Link><Link href="https://www.bordergatebaptist.net/confession-of-faith">Biblical Teachings</Link></div></div><Link href="https://www.bordergatebaptist.net/contact">Contact</Link>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation"><Link href="https://www.bordergatebaptist.net/">Home</Link><Link href="https://www.bordergatebaptist.net/mission-vision">About Us</Link><Link href="https://www.bordergatebaptist.net/our-story">Our Story</Link><Link href="https://www.bordergatebaptist.net/ministries">Ministries</Link><Link href="https://www.bordergatebaptist.net/confession-of-faith">Beliefs</Link><Link href="https://www.bordergatebaptist.net/how-to-get-saved">How To Get Saved</Link><Link href="https://www.bordergatebaptist.net/contact">Contact</Link></nav>}
    </header> */}

    <main>
      <div className="breadcrumb-wrap"><nav aria-label="Breadcrumb" className="breadcrumb"><Link href="https://www.bordergatebaptist.net/">Home</Link><span>/</span><Link href="https://www.bordergatebaptist.net/confession-of-faith">Resources</Link><span>/</span><span aria-current="page">Every Christian Should Seek To Answer</span></nav></div>
      <section className="hero"><div className="hero-inner"><div className="hero-copy"><span className="hero-kicker"><span /> New Believers Material</span><h1>Every Christian Should Seek<br className="desktop-break" /> The Answer To This Question...</h1><p className="hero-question">“Lord, What Wilt Thou Have Me To Do?”</p><p className="hero-reference">Acts 9:6 (KJV)</p></div><div className="hero-mark" aria-hidden="true"><BookOpen size={104} strokeWidth={0.8} /><span>BGBC</span></div></div></section>

      <div className="reading-layout">
        <aside className="toc-sidebar"><div className="toc-card"><div className="toc-title"><span>In this study</span><strong>Contents</strong></div><TableOfContents active={active} onNavigate={navigate} /><p className="reading-time">A discipleship guide for new believers</p></div></aside>
        <article className="reading-content">
          <div className="mobile-toc"><button className="mobile-toc-trigger" aria-expanded={tocOpen} onClick={() => setTocOpen(!tocOpen)}><span><BookOpen size={18} /> Table of contents</span>{tocOpen ? <X size={18} /> : <Menu size={18} />}</button>{tocOpen && <TableOfContents active={active} onNavigate={navigate} mobile onClose={() => setTocOpen(false)} />}</div>

          <section className="content-section welcome-intro" id="your-life">
            <SectionHeading eyebrow="01 · A new beginning" title="Your Life Truly Begins Anew" id="your-life-heading" />
            <OpeningWorksheet blocks={blocks} start={sections.life + 1} end={sections.born} />
          </section>

          <section className="content-section" id="life-began">
            <SectionHeading eyebrow="02 · The beginning" title="Here Is How Your Life Began" id="life-began-heading" />
            <div className="section-body"><SourceText blocks={blocks} start={sections.born + 1} end={sections.steps} /></div>
          </section>

          <section className="content-section steps-section" id="steps">
            <SectionHeading eyebrow="03 · A faithful walk" title="Steps to a Happy Christian Life" id="steps-heading" />
            <p className="section-intro">Seven practical lessons for growing in the Christian life.</p>
            <div className="lesson-grid">{lessons.map((lesson, index) => <LessonNavigationCard key={lesson.id} lesson={lesson} index={index} />)}</div>
            <div className="lesson-list">{lessons.map((lesson, index) => <LessonSection key={lesson.id} lesson={lesson} number={index + 1} blocks={blocks} start={lessonStarts[index]} end={lessonEnds[index]} />)}</div>
          </section>

          <section className="content-section remember-section" id="remember">
            <SectionHeading eyebrow="04 · Keep in mind" title="Remember" id="remember-heading" />
            <div className="section-body"><SourceText blocks={blocks} start={sections.remember + 1} end={sections.covenant - 1} /></div>
          </section>

          <ChurchDocumentSection eyebrow="05 · Our shared promise" title="Church Covenant" id="covenant" blocks={blocks} start={sections.covenant + 1} end={sections.faith - 1} />
          <ChurchDocumentSection eyebrow="06 · What we believe" title="A Condensed Statement of Our Confession of Faith" id="confession-faith" blocks={blocks} start={sections.faith + 2} end={sections.welcome - 1} />

          <aside className="editorial-note" aria-label="Manuscript editorial note"><strong>Manuscript note</strong><p>The uploaded manuscript has been preserved as supplied. Several apparent scanning or transcription irregularities—including “shine heart,” “God bath,” “baptism cloth,” “towardGod,” “Her salvation,” and the attribution “Peter 3:21”—are retained and may need review against the intended source.</p></aside>

          <section className="content-section final-welcome" id="welcome">
            <SectionHeading eyebrow="07 · Welcome to the family" title="A Special Welcome to New Members" id="welcome-heading" />
            <p className="welcome-scripture">Romans 12:1–2</p>
          </section>
        </article>
      </div>
    </main>

    <button className={`back-to-top ${progress > 12 ? "visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" disabled={progress <= 12}><ArrowUp size={19} /></button>
  </div>
}