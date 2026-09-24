import { useEffect, useMemo, useState } from "react";
import {
  Heart, Music, Pause, Menu, X, Sparkles, Camera, Mail,
  Flower2, HeartHandshake, ChevronDown
} from "lucide-react";

/* =========================================================
   💗 PERSONALIZATION — CHANGE ONLY THESE VALUES
   ========================================================= */
const girlfriendName = "MANE";
const yourName = "NINNA MANE";
const anniversaryDate = "OUR SPECIAL DATE";
const relationshipMessage = "You make ordinary moments feel extraordinary. ❤️";

/* =========================================================
   📸 PHOTOS — replace these paths with your own images
   Put files inside: public/assets/
   Example: /assets/photo1.jpg
   ========================================================= */
const memories = [
  { image: "/assets/photo1.jpeg", date: "Our special day", caption: "The day I realized how special you are ❤️" },
  { image: "/assets/photo2.jpeg", date: "A favorite memory", caption: "One of my favorite memories with you 🥺" },
  { image: "/assets/photo3.jpeg", date: "Just us", caption: "Just us being us 🫶" },
  { image: "/assets/photo4.jpg", date: "That beautiful moment", caption: "I'd choose this moment again and again." },
  { image: "/assets/photo5.jpg", date: "A little adventure", caption: "Somehow every adventure is better with you 🌸" },
  { image: "/assets/photo6.jpg", date: anniversaryDate, caption: relationshipMessage },
];

/* ========================================================= */

function FloatingHearts() {
  const items = useMemo(
    () => Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${(i * 37) % 100}%`,
      delay: `${(i % 8) * 1.2}s`,
      duration: `${8 + (i % 6)}s`,
      size: `${12 + (i % 4) * 5}px`,
      emoji: ["♡", "♥", "✦", "🌸", "🦋"][i % 5]
    })),
    []
  );

  return (
    <div className="floating-layer" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="floating-particle"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

function Intro({ onOpen }) {
  return (
    <section className="intro" id="home">
      <div className="intro-glow" />
      <div className="teddy teddy-large" aria-hidden="true">
        <div className="ear left" />
        <div className="ear right" />
        <div className="face">
          <span className="eye e1">•</span><span className="eye e2">•</span>
          <span className="blush b1">●</span><span className="blush b2">●</span>
          <span className="mouth">ᴗ</span>
        </div>
        <div className="teddy-heart">❤️</div>
      </div>

      <p className="eyebrow intro-reveal">A tiny website from my heart</p>
      <h1 className="intro-title intro-reveal delay-1">Hey {girlfriendName}… ❤️</h1>
      <p className="intro-subtitle intro-reveal delay-2">I made something for you…</p>
      <p className="intro-note intro-reveal delay-3">
        Because there’s something I really want to tell you 🥺
      </p>
      <button className="primary-btn intro-reveal delay-4" onClick={onOpen}>
        <Heart size={19} fill="currentColor" /> Open My Heart
      </button>
      <p className="scroll-hint"><ChevronDown size={17} /> scroll gently</p>
    </section>
  );
}

function SorrySection({ onForgive }) {
  const [clicked, setClicked] = useState(false);
  return (
    <section className="section" id="sorry">
      <div className="section-kicker"><Mail size={17} /> from my heart</div>
      <div className="glass-card sorry-card">
        <div className="card-copy">
          <h2>I’m Sorry, My Love 🥺❤️</h2>
          <p>
            I know I made a mistake, and I know saying “sorry” can never completely
            express how I feel.
          </p>
          <p>
            But I want you to know that I genuinely regret hurting you.
          </p>
          <p>
            You mean so much more to me than my ego, my anger, or any silly misunderstanding.
          </p>
          <p>If I could go back and change that moment, I would.</p>
          <p>
            I’m not asking you to forget what happened. I’m just asking you to look at
            my heart and know that I’m truly sorry. ❤️
          </p>
          <button className="secondary-btn" onClick={() => { setClicked(true); onForgive(); }}>
            <Heart size={18} fill="currentColor" /> Forgive Me? 🥺❤️
          </button>
          {clicked && <span className="tiny-response">One tiny step closer to a smile… 🥹</span>}
        </div>
        <div className="teddy-wrap">
          <div className="speech">I’m really sorry 🥺❤️</div>
          <div className="teddy">
            <div className="ear left" /><div className="ear right" />
            <div className="face">
              <span className="eye e1">•</span><span className="eye e2">•</span>
              <span className="blush b1">●</span><span className="blush b2">●</span>
              <span className="mouth">ᴗ</span>
            </div>
            <div className="teddy-heart">💗</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sorryLines = [
  "Sorry for making you upset 🥺",
  "Sorry for being stupid sometimes 😭",
  "Sorry for hurting your feelings 💔",
  "Sorry for not understanding you properly 🥺",
  "Sorry for making you overthink ❤️",
  "Sorry for everything I could have handled better 🫶"
];

function SorryCards() {
  const [active, setActive] = useState(null);
  return (
    <section className="section soft-section" aria-label="More apologies">
      <div className="section-heading">
        <div className="section-kicker"><Sparkles size={17} /> okay… one more thing</div>
        <h2>Okay… I know one Sorry isn’t enough 😭</h2>
        <p>So here are a few more, straight from the boy who should have handled things better.</p>
      </div>
      <div className="sorry-grid">
        {sorryLines.map((text, index) => (
          <button
            className={`sorry-tile ${active === index ? "active" : ""}`}
            key={text}
            onClick={() => setActive(index)}
          >
            <span className="tile-heart">♥</span>
            {text}
            {active === index && <span className="tile-pop">✨ 🥺 ✨</span>}
          </button>
        ))}
      </div>
    </section>
  );
}

function WhyYouMatter() {
  const items = [
    ["🌸", "Your Smile", "Your smile can completely change my day."],
    ["🧸", "Your Cuteness", "Sometimes I genuinely wonder how someone can be this cute."],
    ["🫶", "Your Heart", "You care so deeply, and that's one of the things I love about you."],
    ["🌙", "Your Presence", "Even ordinary moments feel special when you're around."],
    ["❤️", "YOU", "At the end of everything, it's simply you."]
  ];
  return (
    <section className="section" id="why">
      <div className="section-heading">
        <div className="section-kicker"><HeartHandshake size={17} /> the important part</div>
        <h2>Because You Mean Everything To Me ❤️</h2>
      </div>
      <div className="why-grid">
        {items.map(([icon, title, text]) => (
          <article className="why-card" key={title}>
            <span className="why-icon">{icon}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Memories() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="section soft-section" id="memories">
      <div className="section-heading">
        <div className="section-kicker"><Camera size={17} /> little pieces of us</div>
        <h2>Our Little World ❤️</h2>
        <p>Replace the six images with your own favorite moments.</p>
      </div>
      <div className="memory-grid">
        {memories.map((memory, i) => (
          <button className="memory-card" key={i} onClick={() => setSelected(memory)}>
            <img
              src={memory.image}
              alt={memory.caption}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div className="photo-placeholder">
              <Camera size={28} />
              <span>Add photo {i + 1}</span>
            </div>
            <div className="memory-overlay">
              <small>{memory.date}</small>
              <strong>{memory.caption}</strong>
              <span>♥</span>
            </div>
          </button>
        ))}
      </div>
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}><X /></button>
            <img src={selected.image} alt={selected.caption} />
            <h3>{selected.caption}</h3>
            <p>{selected.date}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function LoveLetter() {
  return (
    <section className="section" id="letter">
      <div className="letter-paper">
        <div className="letter-stamp">♥</div>
        <div className="section-kicker"><Mail size={17} /> handwritten feelings</div>
        <h2>A Letter From My Heart 💌</h2>
        <div className="letter-body">
          <p>My Love,</p>
          <p>I don't want this website to replace a real apology.</p>
          <p>
            I made it because sometimes my heart has more to say than my words can express.
          </p>
          <p>I'm sorry.</p>
          <p>
            I'm sorry for the moment I hurt you.<br />
            I'm sorry for the things I could have said differently.<br />
            I'm sorry for making you feel anything less than loved.
          </p>
          <p>You are incredibly special to me.</p>
          <p>
            And if I get another chance, I don't want to just say I'll do better.
            <br /><strong>I want to show you.</strong>
          </p>
          <p>
            I love your smile.<br />
            I love your little habits.<br />
            I love the way you make ordinary moments feel special.
          </p>
          <p>And most importantly…</p>
          <p className="big-love">I love YOU. ❤️</p>
          <p>So here's my tiny request:</p>
          <p>Can you forgive this stupid boy? 🥺👉👈</p>
          <p className="signature">With all my heart,<br />{yourName} ❤️</p>
        </div>
      </div>
    </section>
  );
}

function ForgiveSection({ onYes }) {
  const [notYetCount, setNotYetCount] = useState(0);
  const messages = [
    "Are you sure? 🥺",
    "Even the teddy is crying 😭🧸",
    "I promise I'll do better 🥺❤️",
    "Okay okay… I'll keep apologizing 😭"
  ];
  return (
    <section className="section forgive-section" id="forgive">
      <div className="forgive-card">
        <div className="forgive-flower">🌷</div>
        <h2>So… Can I Have One More Chance? 🥺❤️</h2>
        <p className="forgive-sub">{messages[Math.min(notYetCount, messages.length - 1)]}</p>
        <div className="choice-row">
          <button className="yes-btn" onClick={onYes}>
            YES ❤️
          </button>
          <button
            className="notyet-btn"
            style={{
              transform: `translate(${notYetCount ? ((notYetCount % 2 ? 1 : -1) * 18) : 0}px, ${notYetCount ? -8 : 0}px)`
            }}
            onClick={() => setNotYetCount((n) => Math.min(n + 1, 4))}
          >
            NOT YET 😭
          </button>
        </div>
        <p className="small-note">No pressure. Your feelings matter. I just wanted you to know how sorry I am. ❤️</p>
      </div>
    </section>
  );
}

function Celebration() {
  return (
    <div className="celebration">
      {Array.from({ length: 34 }, (_, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${(i * 29) % 100}%`,
            animationDelay: `${(i % 10) * 0.08}s`,
            "--x": `${((i % 7) - 3) * 24}px`
          }}
        >
          {["❤️", "💕", "🌹", "✨", "💖"][i % 5]}
        </span>
      ))}
    </div>
  );
}

function FinalMessage() {
  return (
    <section className="final-section">
      <Flower2 className="final-flower" />
      <p>Whatever happens, I hope you always know…</p>
      <div className="final-lines">
        <span>You are loved.</span>
        <span>You are precious.</span>
        <span>You are special.</span>
        <span>You mean the world to me. ❤️</span>
      </div>
      <h2>I'm sorry, my love. 🥺❤️</h2>
      <p className="forever">Forever yours,<br /><strong>{yourName} 💕</strong></p>
      <div className="tiny-easter" title="Click me five times">♡</div>
    </section>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [secretClicks, setSecretClicks] = useState(0);
  const [secretVisible, setSecretVisible] = useState(false);

  useEffect(() => {
    document.title = `I'm Sorry, ${girlfriendName} ❤️`;
  }, []);

  const nav = [
    ["sorry", "💌 Sorry"],
    ["memories", "🌸 Memories"],
    ["letter", "💗 Letter"],
    ["forgive", "🫶 Forgive Me"]
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleMusic = () => {
    const audio = document.getElementById("love-audio");
    if (!audio) return;
    if (musicOn) {
      audio.pause();
      setMusicOn(false);
    } else {
      audio.play().then(() => setMusicOn(true)).catch(() => {
        alert("Add your music file at public/assets/romantic-music.mp3 first 🎵");
      });
    }
  };

  const celebrateYes = () => {
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 6500);
    setTimeout(() => scrollTo("final"), 500);
  };

  const secret = () => {
    const next = secretClicks + 1;
    setSecretClicks(next);
    if (next >= 5) setSecretVisible(true);
  };

  if (!opened) {
    return (
      <>
        <FloatingHearts />
        <Intro onOpen={() => setOpened(true)} />
      </>
    );
  }

  return (
    <div className="app">
      <FloatingHearts />
      <audio id="love-audio" loop preload="none">
        {/* Replace this with your music file: public/assets/romantic-music.mp3 */}
        <source src="/assets/romantic-music.mp3" type="audio/mpeg" />
      </audio>

      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          <Heart size={18} fill="currentColor" /> My Love
        </button>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-open" : ""}>
          {nav.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </nav>
      </header>

      <button className="music-btn" onClick={toggleMusic} aria-label="Toggle music">
        {musicOn ? <Pause size={19} /> : <Music size={19} />}
        <span>{musicOn ? "Pause" : "Music"}</span>
      </button>

      <main>
        <section className="mini-hero" id="home">
          <span className="hero-badge">For {girlfriendName} · {anniversaryDate} 💕</span>
          <h1>Hey {girlfriendName}… <span>❤️</span></h1>
          <p>I made a tiny corner of the internet just to say something my heart really means.</p>
          <div className="hero-divider">♡ ✦ ♡</div>
          <p className="hero-whisper">Psst… I miss you 🥺</p>
        </section>

        <SorrySection onForgive={() => {}} />
        <SorryCards />
        <WhyYouMatter />
        <Memories />
        <LoveLetter />
        <ForgiveSection onYes={celebrateYes} />

        <section className="one-more">
          <p>Okay, last thing… I promise 😭</p>
          <p>Actually… one last thing 🥺</p>
          <button className="hidden-heart" onClick={secret} aria-label="Hidden heart">♡</button>
          {secretVisible && (
            <div className="secret-message">
              Okay… you found my secret message.<br />
              I love you more than I know how to explain. ❤️🥺
            </div>
          )}
        </section>

        <section id="final">
          <FinalMessage />
        </section>
      </main>

      {celebrate && <Celebration />}
    </div>
  );
}

export default App;