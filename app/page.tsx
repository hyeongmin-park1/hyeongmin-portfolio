"use client";

import { useEffect, useState } from "react";
import {
  PROFILE,
  ABOUT,
  STRENGTHS,
  FLAGSHIP,
  PROJECTS,
  EXPERIENCE,
  SKILLS,
  RESEARCH,
  EDUCATION,
  AWARDS,
  UI,
  type Lang,
  type L,
  type LList,
  type Project,
} from "@/lib/content";

const PHONE = process.env.NEXT_PUBLIC_PHONE;

export default function Page() {
  const [lang, setLang] = useState<Lang>("ko");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang === "ko" || savedLang === "en") setLang(savedLang);
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  function switchLang(next: Lang) {
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.setAttribute("lang", next);
  }
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  const t = (l: L) => l[lang];
  const tl = (l: LList) => l[lang];

  return (
    <>
      <header className="topbar no-print">
        <div className="wrap">
          <a className="brand" href="#top">
            HyeongMin Park <b>/ FDE</b>
          </a>
          <div className="controls">
            <div className="seg" role="group" aria-label="language">
              <button aria-pressed={lang === "ko"} onClick={() => switchLang("ko")}>
                KO
              </button>
              <button aria-pressed={lang === "en"} onClick={() => switchLang("en")}>
                EN
              </button>
            </div>
            <button className="btn btn--icon" onClick={toggleTheme} aria-label="toggle theme">
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="btn btn--accent" onClick={() => window.print()}>
              <DownloadIcon />
              {t(UI.labels.download)}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="wrap">
        {/* hero */}
        <section className="hero">
          <div className="hero-id">
            <div className="role">{t(PROFILE.role)}</div>
            <h1 className="display">HYEONGMIN PARK</h1>
            <div className="name-ko">{t(PROFILE.name)}</div>
          </div>

          <div className="hero-body">
            <div className="hero-text">
              <p className="tagline">
                {t(PROFILE.taglineLead)}
                <br />
                <span className="tag-role">{t(PROFILE.taglineRole)}</span>
              </p>
              <p className="sub">{t(PROFILE.subtagline)}</p>
              <div className="meta">
                <span>{t(PROFILE.location)}</span>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                {PHONE && <a href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}>{PHONE}</a>}
                <a href={PROFILE.github} target="_blank" rel="noreferrer">
                  github.com/{PROFILE.githubHandle}
                </a>
                {PROFILE.linkedin && (
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
            <div className="portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="박형민 HyeongMin Park" width={300} height={400} />
            </div>
          </div>

          <div className="strengths">
            {STRENGTHS.map((s, i) => (
              <div className="strength" key={i}>
                <h3>{t(s.title)}</h3>
                <p>{t(s.body)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* about */}
        <section className="section" id="about">
          <div className="eyebrow">{t(UI.nav.about)}</div>
          <p className="sub" style={{ maxWidth: "64ch", fontSize: "1.05rem" }}>
            {t(ABOUT)}
          </p>
        </section>

        {/* flagship */}
        <section className="section" id="flagship">
          <div className="eyebrow">{t(UI.sections.flagship)}</div>
          <div className="flagship">
            <div className="proj-head">
              <span className="title">{FLAGSHIP.name}</span>
              <span className="period">{t(FLAGSHIP.period)}</span>
            </div>
            <p className="proj-oneliner">{t(FLAGSHIP.oneLiner)}</p>
            {FLAGSHIP.role && <p className="role-line">{t(FLAGSHIP.role)}</p>}
            {FLAGSHIP.url && (
              <p style={{ marginTop: 8 }}>
                <a className="proj-link" href={FLAGSHIP.url} target="_blank" rel="noreferrer">
                  {FLAGSHIP.urlLabel} ↗
                </a>
              </p>
            )}
            {FLAGSHIP.problem && (
              <div className="field">
                <div className="label">{t(UI.labels.problem)}</div>
                <p>{t(FLAGSHIP.problem)}</p>
              </div>
            )}
            <div className="field">
              <div className="label">{t(UI.labels.whatIdid)}</div>
              <ul className="bullets">
                {tl(FLAGSHIP.bullets).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <Chips stack={FLAGSHIP.stack} />
          </div>
        </section>

        {/* projects */}
        <section className="section" id="work">
          <div className="eyebrow">{t(UI.sections.projects)}</div>
          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.name} p={p} lang={lang} />
            ))}
          </div>
        </section>

        {/* experience */}
        <section className="section" id="experience">
          <div className="eyebrow">{t(UI.sections.experience)}</div>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <div className="exp" key={i}>
                <div className="top">
                  <div>
                    <span className="company">{t(e.company)}</span>{" "}
                    <span className="title">{t(e.title)}</span>
                  </div>
                  <span className="period">{t(e.period)}</span>
                </div>
                <ul className="bullets">
                  {tl(e.bullets).map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* skills */}
        <section className="section" id="skills">
          <div className="eyebrow">{t(UI.sections.skills)}</div>
          <div className="skills">
            {SKILLS.map((g, i) => (
              <div className="skillgroup" key={i}>
                <div className="label">{t(g.group)}</div>
                <div className="chips">
                  {g.items.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* research */}
        <section className="section" id="research">
          <div className="eyebrow">{t(UI.sections.research)}</div>
          <ul className="research">
            {tl(RESEARCH).map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        {/* education + awards */}
        <section className="section">
          <div className="two">
            <div>
              <div className="eyebrow">{t(UI.sections.education)}</div>
              <div className="edulist">
                {EDUCATION.map((e, i) => (
                  <div className="mini" key={i}>
                    <h3>{t(e.school)}</h3>
                    <p style={{ color: "var(--ink-soft)" }}>{t(e.degree)}</p>
                    <p className="muted">{t(e.period)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow">{t(UI.sections.awards)}</div>
              <ul className="awardlist">
                {AWARDS.map((a, i) => (
                  <li key={i}>
                    <span>{t(a.text)}</span>
                    {t(a.meta) && <span className="when">{t(a.meta)}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="big">HYEONGMIN PARK</div>
          <div className="links">
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              github.com/{PROFILE.githubHandle}
            </a>
            {PROFILE.linkedin && (
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
          </div>
          <div className="note">Forward Deployed Engineer / Seoul</div>
        </div>
      </footer>
    </>
  );
}

function Chips({ stack }: { stack: string[] }) {
  return (
    <div className="chips">
      {stack.map((s) => (
        <span className="chip" key={s}>
          {s}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ p, lang }: { p: Project; lang: Lang }) {
  const t = (l: L) => l[lang];
  return (
    <article className="card">
      <div className="proj-head">
        <span className="title">{p.name}</span>
        <span className="period">{t(p.period)}</span>
      </div>
      {p.meta && <span className="badge">{t(p.meta)}</span>}
      <p className="proj-oneliner" style={{ fontSize: "0.98rem", marginTop: 8 }}>
        {t(p.oneLiner)}
      </p>
      {p.url && (
        <p style={{ marginTop: 6 }}>
          <a className="proj-link" href={p.url} target="_blank" rel="noreferrer">
            {p.urlLabel} ↗
          </a>
        </p>
      )}
      <ul className="bullets">
        {p.bullets[lang].map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {p.awards && <div className="award">🏆 {t(p.awards)}</div>}
      <Chips stack={p.stack} />
    </article>
  );
}

/* ---- icons ---- */
function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}
