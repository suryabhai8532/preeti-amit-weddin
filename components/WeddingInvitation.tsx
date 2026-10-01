"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Heart,
  MapPin,
  Music2,
  Pause,
  Send,
  Sparkles,
} from "lucide-react";

const wedding = {
  bride: "Preeti",
  groom: "Amit Kumar",
  brideParents: "Daughter of Mr. Pramod Kumar & Mrs. Kumari Smita Sinha",
  groomParents: "Son of Lt. Ashok Kumar & Lt. Pratima Kumari",
  dateISO: "2026-12-11T19:00:00+05:30",
  venue: "Rajgir Residency",
  address: "Near Kund Par, Rajgir, Nalanda, Bihar, India",
  maps: "https://maps.google.com/?q=Rajgir+Residency+Rajgir+Nalanda",
  hashtag: "#PreetiWedsAmit",
};

/* =========================
   COLOR PALETTE
   Velvet Burgundy + Light Silver
========================= */

const COLORS = {
  velvet: "#5A1830",
  darkVelvet: "#3E0F21",
  lightSilver: "#F1F2F4",
  silverWhite: "#FAFAFB",
  silver: "#C9CBD0",
  softSilver: "#E5E6E9",
  text: "#4D454A",
  muted: "#756D73",
};

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center mb-10">
      <p
        className="uppercase tracking-[.35em] text-xs"
        style={{ color: COLORS.velvet }}
      >
        {eyebrow}
      </p>

      <h2
        className="serif text-5xl md:text-6xl mt-2"
        style={{ color: COLORS.velvet }}
      >
        {title}
      </h2>

      <div
        className="w-28 mx-auto mt-5"
        style={{
          height: "1px",
          background: COLORS.velvet,
        }}
      />
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const difference = Math.max(
        0,
        new Date(wedding.dateISO).getTime() - Date.now()
      );

      setTime({
        days: Math.floor(difference / 86400000),
        hours: Math.floor(difference / 3600000) % 24,
        minutes: Math.floor(difference / 60000) % 60,
        seconds: Math.floor(difference / 1000) % 60,
      });
    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 max-w-lg mx-auto">
      {Object.entries(time).map(([key, value]) => (
        <div
          key={key}
          className="rounded-2xl py-4"
          style={{
            border: `1px solid ${COLORS.silver}`,
            background: "rgba(255,255,255,0.65)",
          }}
        >
          <div
            className="serif text-3xl"
            style={{ color: COLORS.velvet }}
          >
            {String(value).padStart(2, "0")}
          </div>

          <div
            className="text-[10px] uppercase tracking-[.2em]"
            style={{ color: COLORS.muted }}
          >
            {key}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScratchDate() {
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);

  const scratch = () => {
    const next = Math.min(progress + 25, 100);

    setProgress(next);

    if (next >= 100) {
      setRevealed(true);
    }
  };

  return (
    <div
      className="relative max-w-sm mx-auto h-52 rounded-[2rem] p-3 shadow-sm"
      style={{
        border: `1px solid ${COLORS.silver}`,
        background: COLORS.softSilver,
      }}
    >
      <div
        className="h-full rounded-[1.5rem] flex flex-col items-center justify-center text-center"
        style={{
          border: `1px solid ${COLORS.silver}`,
          background: COLORS.silverWhite,
        }}
      >
        <span
          className="text-xs uppercase tracking-[.3em]"
          style={{ color: COLORS.muted }}
        >
          Save the Date
        </span>

        {revealed ? (
          <>
            <div
              className="serif text-5xl mt-2"
              style={{ color: COLORS.velvet }}
            >
              11
            </div>

            <div
              className="tracking-[.25em] text-sm"
              style={{ color: COLORS.velvet }}
            >
              DECEMBER · 2026
            </div>
          </>
        ) : (
          <>
            <div
              className="serif text-3xl mt-3"
              style={{ color: COLORS.velvet }}
            >
              Scratch to reveal
            </div>

            <button
              onClick={scratch}
              className="mt-5 rounded-full px-5 py-2 text-xs tracking-[.2em] uppercase"
              style={{
                border: `1px solid ${COLORS.velvet}`,
                color: COLORS.velvet,
              }}
            >
              Scratch {progress}%
            </button>
          </>
        )}
      </div>

      {!revealed && (
        <div
          className="absolute inset-3 pointer-events-none rounded-[1.5rem]"
          style={{
            opacity: Math.max(0.12, 1 - progress / 100),
            background:
              "repeating-linear-gradient(135deg,#BFC1C6 0 10px,#D5D6DA 10px 20px)",
          }}
        />
      )}
    </div>
  );
}

export default function WeddingInvitation() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [form, setForm] = useState({
    name: "",
    guests: "2",
    attending: "yes",
    message: "",
  });

  const events = [
    {
      title: "Lagan Chumaban & Mathmangra",
      time: "09 DECEMBER",
      location: "Kachahariya",
      text: "Traditional family celebrations and auspicious rituals.",
    },
    {
      title: "Mehendi & Sangeet",
      time: "10 DECEMBER",
      location: "Rajgir Residency",
      text: "An evening of mehendi, music, dance and togetherness.",
    },
    {
      title: "Mandapacchadan & Dev Pooja",
      time: "11 DECEMBER",
      location: "Rajgir Residency",
      text: "Sacred rituals and blessings as the wedding celebrations begin.",
    },
    {
      title: "Haldi Kalash & Dhritdhari",
      time: "11 DECEMBER",
      location: "Rajgir Residency",
      text: "Joyful haldi traditions with family and loved ones.",
    },
    {
      title: "Baarat Aagman & Preetibhoj",
      time: "11 DECEMBER · 7 PM",
      location: "Rajgir Residency",
      text: "Welcoming the baarat followed by the wedding feast.",
    },
    {
      title: "Shubh Vivaah",
      time: "11 DECEMBER · NIGHT",
      location: "Rajgir Residency",
      text: "With blessings of our families, Preeti & Amit begin their forever.",
    },
  ];

  if (!started) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-6 text-center"
        style={{
          background: COLORS.lightSilver,
          color: COLORS.text,
        }}
      >
        <div className="max-w-2xl reveal">
          <div
            className="float text-6xl mb-7"
            style={{ color: COLORS.velvet }}
          >
            ॐ
          </div>

          <p
            className="serif text-xl tracking-[.18em]"
            style={{ color: COLORS.velvet }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>

          <p
            className="serif text-lg leading-relaxed mt-4"
            style={{ color: COLORS.text }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
            <br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </p>

          <div
            className="w-32 mx-auto my-8"
            style={{
              height: "1px",
              background: COLORS.velvet,
            }}
          />

          <p
            className="uppercase tracking-[.28em] text-xs"
            style={{ color: COLORS.muted }}
          >
            With the blessings of Shri Ganesh and our beloved families
          </p>

          <h1
            className="script text-7xl md:text-9xl mt-5"
            style={{ color: COLORS.velvet }}
          >
            Preeti
          </h1>

          <div
            className="serif text-3xl my-1"
            style={{ color: COLORS.velvet }}
          >
            &
          </div>

          <h1
            className="script text-7xl md:text-9xl"
            style={{ color: COLORS.velvet }}
          >
            Amit
          </h1>

          <p
            className="serif text-lg mt-5"
            style={{ color: COLORS.muted }}
          >
            Pramod Kumar & Kumari Smita Sinha
            <br />
            &
            <br />
            Lt. Ashok Kumar & Lt. Pratima Kumari
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-10 inline-flex items-center gap-2 rounded-full text-white px-7 py-3 uppercase tracking-[.18em] text-xs shadow-lg"
            style={{ background: COLORS.darkVelvet }}
          >
            Open Invitation
            <ChevronDown size={15} />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        background: COLORS.lightSilver,
        color: COLORS.text,
      }}
    >
      {/* HERO */}

      <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

        <div className="absolute top-6 right-6">
          <button
            onClick={() => setPlaying(!playing)}
            className="rounded-full p-3"
            style={{
              border: `1px solid ${COLORS.silver}`,
              background: "rgba(255,255,255,.55)",
              color: COLORS.velvet,
            }}
          >
            {playing ? <Pause size={17} /> : <Music2 size={17} />}
          </button>
        </div>

        <p
          className="uppercase tracking-[.4em] text-xs"
          style={{ color: COLORS.velvet }}
        >
          We are getting married
        </p>

        <h1
          className="script text-8xl md:text-[10rem] leading-none mt-4"
          style={{ color: COLORS.velvet }}
        >
          Preeti
        </h1>

        <div
          className="serif text-5xl"
          style={{ color: COLORS.velvet }}
        >
          &
        </div>

        <h1
          className="script text-8xl md:text-[10rem] leading-none"
          style={{ color: COLORS.velvet }}
        >
          Amit
        </h1>

        <p
          className="serif text-xl mt-8 max-w-xl"
          style={{ color: COLORS.muted }}
        >
          Two hearts. One beautiful beginning.
        </p>

        <a
          href="#date"
          className="absolute bottom-8 animate-bounce"
          style={{ color: COLORS.velvet }}
        >
          <ChevronDown />
        </a>
      </header>

      {/* DATE */}

      <section id="date" className="py-24 px-6">
        <SectionTitle
          eyebrow="The Date"
          title="Save the Date"
        />

        <p
          className="text-center mb-8"
          style={{ color: COLORS.muted }}
        >
          Scratch below to reveal our wedding date
        </p>

        <ScratchDate />
      </section>

      {/* COUNTDOWN */}

      <section
        className="py-24 px-6"
        style={{
          background: COLORS.softSilver,
        }}
      >
        <SectionTitle
          eyebrow="Counting the moments"
          title="Until Forever"
        />

        <Countdown />
      </section>

      {/* STORY */}

      <section className="py-24 px-6">
        <SectionTitle
          eyebrow="Our Story"
          title="Two hearts, one story"
        />

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">

          {[
            [
              "01",
              "The Beginning",
              "A beautiful meeting became a beautiful bond.",
            ],
            [
              "02",
              "The Promise",
              "With every laugh and every little moment, our bond grew stronger.",
            ],
            [
              "03",
              "The Yes",
              "And then came the beautiful question that changed everything.",
            ],
            [
              "04",
              "Forever",
              "Now we invite the people we love to witness the beginning of our forever.",
            ],
          ].map(([number, title, text]) => (
            <article
              key={number}
              className="rounded-3xl p-7"
              style={{
                border: `1px solid ${COLORS.silver}`,
                background: "rgba(255,255,255,.60)",
              }}
            >
              <span
                className="text-xs tracking-[.3em]"
                style={{ color: COLORS.velvet }}
              >
                {number}
              </span>

              <h3
                className="serif text-3xl mt-2"
                style={{ color: COLORS.velvet }}
              >
                {title}
              </h3>

              <p
                className="mt-3 leading-7"
                style={{ color: COLORS.muted }}
              >
                {text}
              </p>
            </article>
          ))}

        </div>
      </section>

      {/* EVENTS */}

      <section
        className="py-24 px-6"
        style={{
          background: COLORS.softSilver,
        }}
      >
        <SectionTitle
          eyebrow="The Celebrations"
          title="Join our festivities"
        />

        <div className="max-w-3xl mx-auto space-y-4">

          {events.map((event, index) => (
            <article
              key={event.title}
              className="flex gap-5 items-start rounded-3xl p-6"
              style={{
                background: "rgba(255,255,255,.70)",
                border: `1px solid ${COLORS.silver}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{
                  border: `1px solid ${COLORS.velvet}`,
                  color: COLORS.velvet,
                }}
              >
                <span className="serif">
                  {index + 1}
                </span>
              </div>

              <div className="flex-1">

                <div className="flex flex-wrap items-baseline justify-between gap-2">

                  <h3
                    className="serif text-2xl md:text-3xl"
                    style={{ color: COLORS.velvet }}
                  >
                    {event.title}
                  </h3>

                  <span
                    className="text-xs tracking-[.18em] uppercase"
                    style={{ color: COLORS.muted }}
                  >
                    {event.time}
                  </span>

                </div>

                <p
                  className="text-xs mt-1"
                  style={{ color: COLORS.velvet }}
                >
                  {event.location}
                </p>

                <p
                  className="mt-2"
                  style={{ color: COLORS.muted }}
                >
                  {event.text}
                </p>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* VENUE */}

      <section className="py-24 px-6">

        <SectionTitle
          eyebrow="A place to celebrate"
          title="The Venue"
        />

        <div
          className="max-w-3xl mx-auto rounded-[2rem] p-8 text-center"
          style={{
            border: `1px solid ${COLORS.silver}`,
            background: "rgba(255,255,255,.65)",
          }}
        >
          <MapPin
            className="mx-auto"
            style={{ color: COLORS.velvet }}
          />

          <h3
            className="serif text-4xl mt-3"
            style={{ color: COLORS.velvet }}
          >
            Rajgir Residency
          </h3>

          <p
            className="mt-2"
            style={{ color: COLORS.muted }}
          >
            Near Kund Par, Rajgir,
            <br />
            Nalanda, Bihar, India
          </p>

          <a
            href={wedding.maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-6 rounded-full text-white px-6 py-3 text-xs uppercase tracking-[.2em]"
            style={{ background: COLORS.darkVelvet }}
          >
            Get Directions
          </a>
        </div>

      </section>

      {/* GALLERY */}

      <section
        className="py-24 px-6"
        style={{
          background: COLORS.softSilver,
        }}
      >

        <SectionTitle
          eyebrow="Moments to remember"
          title="Our Gallery"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">

          {["01", "02", "03", "04", "05", "06"].map((number) => (

            <div
              key={number}
              className="aspect-[4/5] rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg,#D7D9DD,#F8F9FA)",
                border: `1px solid ${COLORS.silver}`,
              }}
            >

              <div
                className="text-center"
                style={{ color: COLORS.muted }}
              >

                <Sparkles className="mx-auto" />

                <span className="text-xs tracking-[.25em] mt-2 block">
                  ADD PHOTO {number}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* RSVP */}

      <section className="py-24 px-6">

        <SectionTitle
          eyebrow="We'd love to know"
          title="RSVP"
        />

        <form
          onSubmit={(event) => {
            event.preventDefault();

            alert(
              `Thank you, ${form.name || "friend"}! Your RSVP has been recorded.`
            );
          }}
          className="max-w-xl mx-auto space-y-4"
        >

          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm({
                ...form,
                name: event.target.value,
              })
            }
            placeholder="Your name"
            className="w-full rounded-2xl px-5 py-4 outline-none"
            style={{
              border: `1px solid ${COLORS.silver}`,
              background: "rgba(255,255,255,.70)",
            }}
          />

          <select
            value={form.attending}
            onChange={(event) =>
              setForm({
                ...form,
                attending: event.target.value,
              })
            }
            className="w-full rounded-2xl px-5 py-4"
            style={{
              border: `1px solid ${COLORS.silver}`,
              background: "rgba(255,255,255,.70)",
            }}
          >
            <option value="yes">
              Joyfully attending
            </option>

            <option value="no">
              Regretfully declining
            </option>
          </select>

          <select
            value={form.guests}
            onChange={(event) =>
              setForm({
                ...form,
                guests: event.target.value,
              })
            }
            className="w-full rounded-2xl px-5 py-4"
            style={{
              border: `1px solid ${COLORS.silver}`,
              background: "rgba(255,255,255,.70)",
            }}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>

          <textarea
            value={form.message}
            onChange={(event) =>
              setForm({
                ...form,
                message: event.target.value,
              })
            }
            placeholder="A message for the couple (optional)"
            rows={4}
            className="w-full rounded-2xl px-5 py-4 outline-none"
            style={{
              border: `1px solid ${COLORS.silver}`,
    
                  

