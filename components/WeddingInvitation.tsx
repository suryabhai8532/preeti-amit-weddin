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

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center mb-10">
      <p className="uppercase tracking-[.35em] text-xs text-[#a7793d]">
        {eyebrow}
      </p>

      <h2 className="serif text-5xl md:text-6xl mt-2">
        {title}
      </h2>

      <div className="gold-line w-28 mx-auto mt-5" />
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
          className="rounded-2xl border border-[#a7793d]/25 bg-white/60 py-4"
        >
          <div className="serif text-3xl">
            {String(value).padStart(2, "0")}
          </div>

          <div className="text-[10px] uppercase tracking-[.2em] opacity-60">
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
    <div className="relative max-w-sm mx-auto h-52 rounded-[2rem] border border-[#a7793d]/30 bg-[#efe3cf] p-3 shadow-sm">
      <div className="h-full rounded-[1.5rem] border border-[#a7793d]/25 flex flex-col items-center justify-center bg-[#fffaf1] text-center">
        <span className="text-xs uppercase tracking-[.3em] opacity-60">
          Save the Date
        </span>

        {revealed ? (
          <>
            <div className="serif text-5xl mt-2">11</div>

            <div className="tracking-[.25em] text-sm">
              DECEMBER · 2026
            </div>
          </>
        ) : (
          <>
            <div className="serif text-3xl mt-3">
              Scratch to reveal
            </div>

            <button
              onClick={scratch}
              className="mt-5 rounded-full border border-[#a7793d] px-5 py-2 text-xs tracking-[.2em] uppercase"
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
              "repeating-linear-gradient(135deg,#c5ad88 0 10px,#b59b74 10px 20px)",
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
      <main className="min-h-screen paper noise flex items-center justify-center px-6 text-center">
        <div className="max-w-2xl reveal">
          <div className="float text-6xl mb-7">
            ॐ
          </div>

          <p className="serif text-xl tracking-[.18em]">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <p className="serif text-lg leading-relaxed mt-4 opacity-80">
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
            <br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
          </p>

          <div className="gold-line w-32 mx-auto my-8" />

          <p className="uppercase tracking-[.28em] text-xs opacity-60">
            With the blessings of Shri Ganesh and our beloved families
          </p>

          <h1 className="script text-7xl md:text-9xl mt-5">
            Preeti
          </h1>

          <div className="serif text-3xl my-1">
            &
          </div>

          <h1 className="script text-7xl md:text-9xl">
            Amit
          </h1>

          <p className="serif text-lg mt-5 opacity-75">
            Pramod Kumar & Kumari Smita Sinha
            <br />
            &
            <br />
            Lt. Ashok Kumar & Lt. Pratima Kumari
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#3e3028] text-white px-7 py-3 uppercase tracking-[.18em] text-xs shadow-lg"
          >
            Open Invitation
            <ChevronDown size={15} />
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="paper noise">

      {/* HERO */}

      <header className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

        <div className="absolute top-6 right-6">
          <button
            onClick={() => setPlaying(!playing)}
            className="rounded-full border border-[#a7793d]/30 p-3 bg-white/50"
          >
            {playing ? (
              <Pause size={17} />
            ) : (
              <Music2 size={17} />
            )}
          </button>
        </div>

        <p className="uppercase tracking-[.4em] text-xs text-[#a7793d]">
          We are getting married
        </p>

        <h1 className="script text-8xl md:text-[10rem] leading-none mt-4">
          Preeti
        </h1>

        <div className="serif text-5xl">
          &
        </div>

        <h1 className="script text-8xl md:text-[10rem] leading-none">
          Amit
        </h1>

        <p className="serif text-xl mt-8 max-w-xl opacity-75">
          Two hearts. One beautiful beginning.
        </p>

        <a
          href="#date"
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown />
        </a>
      </header>

      {/* DATE */}

      <section
        id="date"
        className="py-24 px-6"
      >
        <SectionTitle
          eyebrow="The Date"
          title="Save the Date"
        />

        <p className="text-center opacity-65 mb-8">
          Scratch below to reveal our wedding date
        </p>

        <ScratchDate />
      </section>

      {/* COUNTDOWN */}

      <section className="py-24 px-6 bg-[#f1e8d8]/55">
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
              className="rounded-3xl border border-[#a7793d]/20 bg-white/55 p-7"
            >
              <span className="text-xs tracking-[.3em] text-[#a7793d]">
                {number}
              </span>

              <h3 className="serif text-3xl mt-2">
                {title}
              </h3>

              <p className="mt-3 leading-7 opacity-70">
                {text}
              </p>
            </article>
          ))}

        </div>
      </section>

      {/* EVENTS */}

      <section className="py-24 px-6 bg-[#efe6d7]/65">
        <SectionTitle
          eyebrow="The Celebrations"
          title="Join our festivities"
        />

        <div className="max-w-3xl mx-auto space-y-4">

          {events.map((event, index) => (
            <article
              key={event.title}
              className="flex gap-5 items-start rounded-3xl bg-white/65 border border-[#a7793d]/15 p-6"
            >

              <div className="w-12 h-12 rounded-full border border-[#a7793d]/40 flex items-center justify-center shrink-0">
                <span className="serif">
                  {index + 1}
                </span>
              </div>

              <div className="flex-1">

                <div className="flex flex-wrap items-baseline justify-between gap-2">

                  <h3 className="serif text-2xl md:text-3xl">
                    {event.title}
                  </h3>

                  <span className="text-xs tracking-[.18em] uppercase opacity-55">
                    {event.time}
                  </span>

                </div>

                <p className="text-xs text-[#a7793d] mt-1">
                  {event.location}
                </p>

                <p className="mt-2 opacity-65">
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

        <div className="max-w-3xl mx-auto rounded-[2rem] border border-[#a7793d]/20 bg-white/60 p-8 text-center">

          <MapPin className="mx-auto text-[#a7793d]" />

          <h3 className="serif text-4xl mt-3">
            Rajgir Residency
          </h3>

          <p className="opacity-65 mt-2">
            Near Kund Par, Rajgir,
            <br />
            Nalanda, Bihar, India
          </p>

          <a
            href={wedding.maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-6 rounded-full bg-[#3e3028] text-white px-6 py-3 text-xs uppercase tracking-[.2em]"
          >
            Get Directions
          </a>

        </div>

      </section>

      {/* GALLERY */}

      <section className="py-24 px-6 bg-[#f1e8d8]/55">

        <SectionTitle
          eyebrow="Moments to remember"
          title="Our Gallery"
        />

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3">

          {["01", "02", "03", "04", "05", "06"].map((number) => (

            <div
              key={number}
              className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#ded0ba] to-[#f8f0e4] border border-[#a7793d]/15 flex items-center justify-center"
            >

              <div className="text-center opacity-45">

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
            className="w-full rounded-2xl border border-[#a7793d]/20 bg-white/65 px-5 py-4 outline-none"
          />

          <select
            value={form.attending}
            onChange={(event) =>
              setForm({
                ...form,
                attending: event.target.value,
              })
            }
            className="w-full rounded-2xl border border-[#a7793d]/20 bg-white/65 px-5 py-4"
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
            className="w-full rounded-2xl border border-[#a7793d]/20 bg-white/65 px-5 py-4"
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
            className="w-full rounded-2xl border border-[#a7793d]/20 bg-white/65 px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-[#3e3028] text-white py-4 uppercase tracking-[.2em] text-xs flex justify-center gap-2 items-center"
          >
            <Send size={15} />
            Send RSVP
          </button>

        </form>

      </section>

      {/* FOOTER */}

      <footer className="py-20 px-6 text-center bg-[#3e3028] text-[#fbf6eb]">

        <Heart className="mx-auto fill-current" />

        <div className="script text-6xl mt-4">
          Preeti & Amit
        </div>

        <p className="mt-3 opacity-60">
          {wedding.hashtag}
        </p>

        <p className="text-[10px] uppercase tracking-[.3em] opacity-45 mt-10">
          Made with love
        </p>

      </footer>

    </main>
  );
}
