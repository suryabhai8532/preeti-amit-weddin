"use client";

import { useState, useEffect } from "react";
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
  date: "11 December 2026",
  venue: "Rajgir Residency",
  address: "Near Kund Par, Rajgir, Nalanda, Bihar, India",
  maps:
    "https://maps.google.com/?q=Rajgir+Residency+Rajgir+Nalanda",
  hashtag: "#PreetiWedsAmit",
};

const COLORS = {
  velvet: "#5A1830",
  darkVelvet: "#3E0F21",
  silver: "#F1F2F4",
  silverWhite: "#FAFAFB",
  silverBorder: "#C9CBD0",
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
    <div className="text-center mb-12">
      <p
        className="uppercase tracking-[0.35em] text-xs mb-3"
        style={{ color: COLORS.velvet }}
      >
        {eyebrow}
      </p>

      <h2
        className="font-serif text-4xl md:text-5xl"
        style={{ color: COLORS.velvet }}
      >
        {title}
      </h2>

      <div className="flex items-center justify-center gap-3 mt-5">
        <span
          className="w-16 h-px"
          style={{ backgroundColor: COLORS.silverBorder }}
        />
        <Heart
          size={15}
          fill={COLORS.velvet}
          style={{ color: COLORS.velvet }}
        />
        <span
          className="w-16 h-px"
          style={{ backgroundColor: COLORS.silverBorder }}
        />
      </div>
    </div>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(wedding.dateISO).getTime();

    const update = () => {
      const difference = target - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    ["Days", timeLeft.days],
    ["Hours", timeLeft.hours],
    ["Minutes", timeLeft.minutes],
    ["Seconds", timeLeft.seconds],
  ];

  return (
    <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl py-4 px-2 border backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(255,255,255,0.6)",
            borderColor: COLORS.silverBorder,
          }}
        >
          <div
            className="text-2xl md:text-4xl font-serif"
            style={{ color: COLORS.velvet }}
          >
            {String(value).padStart(2, "0")}
          </div>

          <div
            className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] mt-1"
            style={{ color: COLORS.muted }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ScratchDate() {
  const [progress, setProgress] = useState(0);

  const scratch = () => {
    setProgress((previous) =>
      Math.min(previous + 25, 100)
    );
  };

  const revealed = progress >= 100;

  return (
    <div className="text-center">
      <p
        className="uppercase tracking-[0.3em] text-[10px] mb-5"
        style={{ color: COLORS.muted }}
      >
        A little surprise
      </p>

      <button
        onClick={scratch}
        className="relative mx-auto block w-72 h-32 rounded-3xl overflow-hidden border shadow-sm"
        style={{
          backgroundColor: COLORS.silverWhite,
          borderColor: COLORS.silverBorder,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <p
              className="font-serif text-2xl"
              style={{ color: COLORS.velvet }}
            >
              {revealed ? "11 DECEMBER 2026" : "Scratch to reveal"}
            </p>

            {!revealed && (
              <p
                className="text-xs mt-2"
                style={{ color: COLORS.muted }}
              >
                Tap here ✨
              </p>
            )}
          </div>
        </div>

        {!revealed && (
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: COLORS.velvet,
              opacity: Math.max(0, 1 - progress / 100),
            }}
          >
            <Sparkles
              size={25}
              className="text-white"
            />
          </div>
        )}
      </button>

      {!revealed && (
        <p
          className="text-[10px] mt-4 uppercase tracking-[0.2em]"
          style={{ color: COLORS.muted }}
        >
          Tap multiple times to reveal
        </p>
      )}
    </div>
  );
}

const events = [
  {
    date: "09 DEC",
    title: "Haldi",
    time: "10:00 AM",
    description:
      "A joyful morning filled with colours, laughter and blessings.",
    icon: "🌼",
  },
  {
    date: "09 DEC",
    title: "Mehendi",
    time: "05:00 PM",
    description:
      "An evening of mehendi, music and beautiful memories.",
    icon: "🌿",
  },
  {
    date: "10 DEC",
    title: "Sangeet",
    time: "07:00 PM",
    description:
      "A magical evening of music, dance and celebrations.",
    icon: "🎶",
  },
  {
    date: "11 DEC",
    title: "Wedding",
    time: "07:00 PM",
    description:
      "The beautiful beginning of our forever.",
    icon: "💍",
  },
  {
    date: "12 DEC",
    title: "Reception",
    time: "07:00 PM",
    description:
      "Join us for dinner, blessings and celebration.",
    icon: "✨",
  },
];

export default function WeddingInvitation() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitRSVP = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    alert(
      `Thank you ${name}! Your RSVP has been received.`
    );

    setName("");
    setMessage("");
  };

  if (!started) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{
          background: `
            radial-gradient(
              circle at 20% 20%,
              rgba(255,255,255,0.95),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              ${COLORS.silverWhite},
              ${COLORS.silver}
            )
          `,
        }}
      >
        <div className="text-center max-w-lg">
          <p
            className="uppercase tracking-[0.45em] text-xs mb-6"
            style={{ color: COLORS.velvet }}
          >
            Together with their families
          </p>

          <h1
            className="font-serif text-6xl md:text-8xl"
            style={{ color: COLORS.velvet }}
          >
            {wedding.bride}
          </h1>

          <div
            className="text-3xl my-3 font-serif"
            style={{ color: COLORS.muted }}
          >
            &
          </div>

          <h1
            className="font-serif text-6xl md:text-8xl"
            style={{ color: COLORS.velvet }}
          >
            {wedding.groom}
          </h1>

          <p
            className="mt-8 text-sm"
            style={{ color: COLORS.muted }}
          >
            Invite you to celebrate their wedding
          </p>

          <button
            onClick={() => setStarted(true)}
            className="mt-10 px-9 py-4 rounded-full text-white uppercase tracking-[0.25em] text-xs transition-transform hover:scale-105"
            style={{
              backgroundColor: COLORS.velvet,
              boxShadow: `0 15px 40px rgba(90,24,48,0.22)`,
            }}
          >
            Open Invitation
          </button>

          <div className="mt-8">
            <ChevronDown
              size={20}
              className="mx-auto animate-bounce"
              style={{ color: COLORS.velvet }}
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.silver,
        color: COLORS.text,
      }}
    >
      {/* MUSIC BUTTON */}
      <button
        onClick={() => setPlaying(!playing)}
        aria-label="Toggle music"
        className="fixed right-5 top-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border"
        style={{
          backgroundColor: COLORS.silverWhite,
          borderColor: COLORS.silverBorder,
          color: COLORS.velvet,
        }}
      >
        {playing ? <Pause size={18} /> : <Music2 size={18} />}
      </button>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at 50% 30%,
              rgba(255,255,255,0.95),
              transparent 45%
            ),
            linear-gradient(
              180deg,
              ${COLORS.silverWhite},
              ${COLORS.silver}
            )
          `,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 -top-20 -left-20"
            style={{ backgroundColor: COLORS.velvet }}
          />

          <div
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 -bottom-20 -right-20"
            style={{ backgroundColor: COLORS.velvet }}
          />
        </div>

        <div className="relative text-center max-w-4xl">
          <p
            className="uppercase tracking-[0.5em] text-xs md:text-sm mb-7"
            style={{ color: COLORS.velvet }}
          >
            We are getting married
          </p>

          <h1
            className="font-serif text-7xl md:text-9xl leading-none"
            style={{ color: COLORS.velvet }}
          >
            {wedding.bride}
          </h1>

          <div className="flex items-center justify-center gap-5 my-4">
            <span
              className="w-16 md:w-28 h-px"
              style={{
                backgroundColor: COLORS.silverBorder,
              }}
            />

            <Heart
              size={24}
              fill={COLORS.velvet}
              style={{ color: COLORS.velvet }}
            />

            <span
              className="w-16 md:w-28 h-px"
              style={{
                backgroundColor: COLORS.silverBorder,
              }}
            />
          </div>

          <h1
            className="font-serif text-7xl md:text-9xl leading-none"
            style={{ color: COLORS.velvet }}
          >
            {wedding.groom}
          </h1>

          <p
            className="mt-8 text-sm md:text-base"
            style={{ color: COLORS.muted }}
          >
            {wedding.date}
          </p>

          <p
            className="mt-2 text-sm"
            style={{ color: COLORS.muted }}
          >
            {wedding.venue}
          </p>

          <div className="mt-12">
            <Countdown />
          </div>

          <div className="mt-12">
            <ChevronDown
              size={22}
              className="mx-auto animate-bounce"
              style={{ color: COLORS.velvet }}
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            eyebrow="With love"
            title="Two hearts, one beautiful journey"
          />

          <p className="leading-8 max-w-2xl mx-auto">
            With the blessings of our families, we invite
            you to be a part of our special day as we begin
            this beautiful journey together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div
              className="rounded-3xl p-8 border"
              style={{
                backgroundColor: COLORS.silverWhite,
                borderColor: COLORS.silverBorder,
              }}
            >
              <p
                className="uppercase tracking-[0.25em] text-[10px] mb-4"
                style={{ color: COLORS.velvet }}
              >
                The Bride
              </p>

              <h3
                className="font-serif text-3xl mb-4"
                style={{ color: COLORS.velvet }}
              >
                {wedding.bride}
              </h3>

              <p className="text-sm leading-7">
                {wedding.brideParents}
              </p>
            </div>

            <div
              className="rounded-3xl p-8 border"
              style={{
                backgroundColor: COLORS.silverWhite,
                borderColor: COLORS.silverBorder,
              }}
            >
              <p
                className="uppercase tracking-[0.25em] text-[10px] mb-4"
                style={{ color: COLORS.velvet }}
              >
                The Groom
              </p>

              <h3
                className="font-serif text-3xl mb-4"
                style={{ color: COLORS.velvet }}
              >
                {wedding.groom}
              </h3>

              <p className="text-sm leading-7">
                {wedding.groomParents}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DATE REVEAL */}
      <section
        className="py-24 px-6"
        style={{
          backgroundColor: COLORS.silverWhite,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="Save the date"
            title="Our special day"
          />

          <ScratchDate />
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Celebrations"
            title="Wedding Events"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={`${event.title}-${index}`}
                className="rounded-3xl p-7 border transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: COLORS.silverWhite,
                  borderColor: COLORS.silverBorder,
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs uppercase tracking-[0.25em]"
                    style={{ color: COLORS.velvet }}
                  >
                    {event.date}
                  </span>

                  <span className="text-2xl">
                    {event.icon}
                  </span>
                </div>

                <h3
                  className="font-serif text-3xl mt-6"
                  style={{ color: COLORS.velvet }}
                >
                  {event.title}
                </h3>

                <p
                  className="text-xs uppercase tracking-[0.2em] mt-3"
                  style={{ color: COLORS.muted }}
                >
                  {event.time}
                </p>

                <p className="text-sm leading-7 mt-5">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        className="py-24 px-6"
        style={{
          backgroundColor: COLORS.silverWhite,
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            eyebrow="Our story"
            title="A beginning to forever"
          />

          <p className="leading-8">
            Every beautiful story has a special beginning.
            Ours is filled with moments, smiles, family,
            friendship and countless memories that brought
            us to this beautiful day.
          </p>

          <p
            className="font-serif text-3xl md:text-4xl mt-10"
            style={{ color: COLORS.velvet }}
          >
            And now, forever begins...
          </p>
        </div>
      </section>

      {/* VENUE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            eyebrow="The venue"
            title="Join us in Rajgir"
          />

          <div
            className="rounded-3xl p-8 md:p-12 border text-center"
            style={{
              backgroundColor: COLORS.silverWhite,
              borderColor: COLORS.silverBorder,
            }}
          >
            <MapPin
              size={35}
              className="mx-auto mb-5"
              style={{ color: COLORS.velvet }}
            />

            <h3
              className="font-serif text-4xl"
              style={{ color: COLORS.velvet }}
            >
              {wedding.venue}
            </h3>

            <p
              className="mt-5 text-sm leading-7"
              style={{ color: COLORS.muted }}
            >
              {wedding.address}
            </p>

            <a
              href={wedding.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-full text-white text-xs uppercase tracking-[0.2em]"
              style={{
                backgroundColor: COLORS.velvet,
              }}
            >
              <MapPin size={15} />
              Open in Maps
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        className="py-24 px-6"
        style={{
          backgroundColor: COLORS.silverWhite,
        }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Memories"
            title="Our Gallery"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-2xl border flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: COLORS.silver,
                  borderColor: COLORS.silverBorder,
                }}
              >
                <div className="text-center">
                  <Heart
                    size={25}
                    className="mx-auto mb-3"
                    style={{ color: COLORS.velvet }}
                  />

                  <p
                    className="text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: COLORS.muted }}
                  >
                    Your photo here
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-center text-xs mt-7"
            style={{ color: COLORS.muted }}
          >
            Photos can be added here later.
          </p>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <SectionTitle
            eyebrow="Be our guest"
            title="RSVP"
          />

          <form
            onSubmit={submitRSVP}
            className="rounded-3xl p-8 border"
            style={{
              backgroundColor: COLORS.silverWhite,
              borderColor: COLORS.silverBorder,
            }}
          >
            <label className="block text-xs uppercase tracking-[0.2em] mb-2">
              Your Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-xl px-4 py-3 outline-none border mb-6"
              style={{
                backgroundColor: COLORS.silver,
                borderColor: COLORS.silverBorder,
              }}
            />

            <label className="block text-xs uppercase tracking-[0.2em] mb-2">
              Message
            </label>

            <textarea
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="Leave a message for the couple..."
              rows={5}
              className="w-full rounded-xl px-4 py-3 outline-none border resize-none"
              style={{
                backgroundColor: COLORS.silver,
                borderColor: COLORS.silverBorder,
              }}
            />

            <button
              type="submit"
              className="w-full mt-6 rounded-xl py-4 text-white flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs"
              style={{
                backgroundColor: COLORS.velvet,
              }}
            >
              <Send size={16} />
              Send RSVP
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-20 px-6 text-center"
        style={{
          backgroundColor: COLORS.darkVelvet,
          color: "#FFFFFF",
        }}
      >
        <Heart
          size={28}
          fill="white"
          className="mx-auto mb-6"
        />

        <h2 className="font-serif text-4xl md:text-5xl">
          {wedding.bride} & {wedding.groom}
        </h2>

        <p className="mt-5 opacity-80">
          {wedding.hashtag}
        </p>

        <p className="text-[10px] uppercase tracking-[0.3em] opacity-50 mt-10">
          Made with love
        </p>
      </footer>
    </main>
  );
}
