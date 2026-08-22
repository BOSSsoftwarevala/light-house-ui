import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, LockKeyhole, Mail, Power } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign In | Software Vala" },
      {
        name: "description",
        content:
          "Sign in to your Software Vala account to access the software ecosystem.",
      },
      { property: "og:title", content: "Sign In | Software Vala" },
      {
        property: "og:description",
        content:
          "Sign in to your Software Vala account to access the software ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SoftwareValaLogin,
});

const STARS = [
  { top: "8%", left: "12%", size: 2, dur: "3.6s", delay: "0s" },
  { top: "15%", left: "78%", size: 2, dur: "4.4s", delay: "0.8s" },
  { top: "22%", left: "45%", size: 1.5, dur: "5s", delay: "1.4s" },
  { top: "6%", left: "58%", size: 2.5, dur: "3.2s", delay: "0.4s" },
  { top: "30%", left: "8%", size: 1.5, dur: "4.8s", delay: "2s" },
  { top: "12%", left: "92%", size: 1.5, dur: "3.9s", delay: "1s" },
  { top: "38%", left: "88%", size: 2, dur: "5.4s", delay: "0.2s" },
  { top: "26%", left: "30%", size: 1, dur: "4.1s", delay: "1.8s" },
  { top: "48%", left: "5%", size: 1.5, dur: "4.6s", delay: "0.6s" },
  { top: "42%", left: "96%", size: 2, dur: "3.4s", delay: "1.2s" },
  { top: "60%", left: "14%", size: 1, dur: "5.2s", delay: "2.4s" },
  { top: "55%", left: "82%", size: 1.5, dur: "4s", delay: "0.9s" },
];

const DUST = [
  { left: "38%", bottom: "26%", size: 3, dur: "8s", delay: "0s" },
  { left: "46%", bottom: "30%", size: 2, dur: "10s", delay: "1.6s" },
  { left: "54%", bottom: "28%", size: 2.5, dur: "9s", delay: "3s" },
  { left: "60%", bottom: "32%", size: 2, dur: "11s", delay: "0.8s" },
  { left: "42%", bottom: "36%", size: 2, dur: "9.5s", delay: "4.2s" },
  { left: "58%", bottom: "24%", size: 3, dur: "8.6s", delay: "2.4s" },
];

function SoftwareValaLogin() {
  const [lampOn, setLampOn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className={`relative min-h-screen overflow-hidden transition-all duration-700 ${
        lampOn ? "bg-[#07101f]" : "bg-[#02050b]"
      }`}
    >
      {/* Cinematic film grain */}
      <div className="sv-grain z-30" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 55%, rgba(2,5,11,.55) 100%)",
        }}
      />

      {/* Starfield */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {STARS.map((star, index) => (
          <span
            key={index}
            className="sv-twinkle absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 6px 1px rgba(255,255,255,.45)",
              ["--tw-dur" as string]: star.dur,
              ["--tw-delay" as string]: star.delay,
            }}
          />
        ))}
      </div>

      {/* Ambient aurora glow (drifting) */}
      <div
        className={`sv-aurora absolute inset-0 transition-all duration-700 pointer-events-none ${
          lampOn ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 28% 38%, rgba(255,190,90,.18), transparent 28%), radial-gradient(circle at 70% 50%, rgba(30,100,255,.10), transparent 35%), radial-gradient(circle at 50% 110%, rgba(227,27,35,.06), transparent 45%)",
        }}
      />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* LAMP */}
          <div className="order-1 lg:order-1 relative flex items-center justify-center min-h-[340px] sm:min-h-[420px] lg:min-h-[520px]">
            {/* Floor glow */}
            <div
              className={`absolute bottom-10 sm:bottom-16 w-48 sm:w-72 h-16 sm:h-24 rounded-full blur-3xl transition-all duration-700 ${
                lampOn ? "bg-amber-300/20" : "bg-transparent"
              }`}
            />

            {/* Wide ambient halo behind lamp */}
            <div
              className={`sv-halo absolute top-1/3 left-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full transition-opacity duration-700 pointer-events-none ${
                lampOn ? "" : "!opacity-0"
              }`}
              style={{
                background:
                  "radial-gradient(circle, rgba(255,205,110,.14), rgba(255,180,60,.05) 45%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />

            {/* Rising dust particles in the light */}
            {lampOn && (
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
              >
                {DUST.map((mote, index) => (
                  <span
                    key={index}
                    className="sv-dust absolute rounded-full bg-amber-100/70"
                    style={{
                      left: mote.left,
                      bottom: mote.bottom,
                      width: mote.size,
                      height: mote.size,
                      boxShadow: "0 0 5px 1px rgba(255,220,150,.5)",
                      ["--dust-dur" as string]: mote.dur,
                      ["--dust-delay" as string]: mote.delay,
                    }}
                  />
                ))}
              </div>
            )}

            <div className="relative w-[220px] h-[340px] sm:w-[300px] sm:h-[470px]">
              {/* Light cone */}
              <div
                className={`absolute top-12 sm:top-20 left-1/2 -translate-x-1/2 w-[180px] h-[220px] sm:w-[260px] sm:h-[310px] transition-all duration-700 ${
                  lampOn ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "radial-gradient(ellipse at top, rgba(255,211,130,.34), rgba(255,180,60,.08) 42%, transparent 72%)",
                  filter: "blur(8px)",
                }}
              />

              {/* Inner bright core of the cone */}
              <div
                className={`sv-flame absolute top-20 sm:top-28 left-1/2 -translate-x-1/2 w-[90px] h-[150px] sm:w-[130px] sm:h-[210px] transition-all duration-700 pointer-events-none ${
                  lampOn ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "radial-gradient(ellipse at top, rgba(255,232,170,.30), rgba(255,200,90,.10) 50%, transparent 78%)",
                  filter: "blur(10px)",
                }}
              />

              {/* Lampshade */}
              <div
                className={`absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 w-36 sm:w-52 h-20 sm:h-28 transition-all duration-500 ${
                  lampOn ? "drop-shadow-[0_0_35px_rgba(255,196,90,.5)]" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    lampOn ? "bg-[#d9a858]" : "bg-[#222a36]"
                  }`}
                  style={{
                    clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0 100%)",
                  }}
                />
                {/* Shade sheen */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    lampOn ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0 100%)",
                    background:
                      "linear-gradient(115deg, rgba(255,255,255,.35) 0%, transparent 32%, transparent 68%, rgba(0,0,0,.22) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 bg-black/30" />
                {/* Under-shade warm rim light */}
                <div
                  className={`absolute -bottom-1 left-2 right-2 h-1 rounded-full transition-opacity duration-500 ${
                    lampOn ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,230,170,.85), transparent)",
                    filter: "blur(2px)",
                  }}
                />
              </div>

              {/* Bulb */}
              <div
                className={`absolute top-[92px] sm:top-[125px] left-1/2 -translate-x-1/2 w-8 sm:w-11 h-8 sm:h-11 rounded-full transition-all duration-500 ${
                  lampOn
                    ? "bg-[#fff0bd] shadow-[0_0_35px_15px_rgba(255,205,110,.55)]"
                    : "bg-[#303743]"
                }`}
              >
                {/* Bulb hot core */}
                <div
                  className={`sv-flame absolute inset-[22%] rounded-full transition-opacity duration-500 ${
                    lampOn ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle, #ffffff, rgba(255,244,200,.9) 60%, transparent)",
                  }}
                />
              </div>

              {/* Stand */}
              <div className="absolute top-[135px] sm:top-[175px] left-1/2 -translate-x-1/2 w-3 sm:w-4 h-44 sm:h-64 rounded-full bg-gradient-to-r from-[#161c25] via-[#707985] to-[#11161d]">
                {/* Stand highlight catching lamp light */}
                <div
                  className={`absolute inset-y-0 left-[30%] w-[2px] rounded-full transition-opacity duration-700 ${
                    lampOn ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,215,140,.6), transparent 65%)",
                  }}
                />
              </div>

              {/* Base */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-36 sm:w-48 h-5 sm:h-7 rounded-[50%] bg-gradient-to-b from-[#7c858e] via-[#272e38] to-[#080b10] shadow-2xl">
                <div
                  className={`absolute inset-x-6 top-0 h-[3px] rounded-full transition-opacity duration-700 ${
                    lampOn ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,220,150,.5), transparent)",
                  }}
                />
              </div>

              {/* Switch */}
              <button
                type="button"
                onClick={() => setLampOn((value) => !value)}
                aria-label={lampOn ? "Turn lamp off" : "Turn lamp on"}
                className={`absolute right-2 sm:right-5 top-44 sm:top-64 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/10 bg-[#111822] text-white/80 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl ${
                  lampOn
                    ? "shadow-[0_0_18px_rgba(255,205,110,.25)] border-amber-200/20"
                    : ""
                }`}
              >
                <Power size={16} className="mx-auto sm:hidden" />
                <Power size={18} className="mx-auto hidden sm:block" />
              </button>
            </div>

            <div className="absolute bottom-0 sm:bottom-2 text-center">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/30">
                Software Vala
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/40">
                {lampOn ? "Light is on" : "Turn on the light"}
              </p>
            </div>
          </div>

          {/* LOGIN */}
          <div
            className={`order-2 lg:order-2 w-full max-w-md mx-auto transition-all duration-700 ${
              lampOn
                ? "opacity-100 translate-y-0"
                : "opacity-70 translate-y-1"
            }`}
          >
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-3 mb-5 sm:mb-7">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#e31b23] flex items-center justify-center shadow-lg overflow-hidden">
                  <div className="sv-shine" />
                  <span className="text-white font-black text-base sm:text-lg">
                    SV
                  </span>
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg">
                    Software Vala
                  </div>
                  <div className="text-white/35 text-[10px] sm:text-xs">
                    Software ecosystem
                  </div>
                </div>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
                style={{
                  textShadow: lampOn
                    ? "0 0 40px rgba(255,205,110,.15)"
                    : "none",
                }}
              >
                Welcome back.
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/45">
                Sign in to continue to your Software Vala account.
              </p>
            </div>

            {/* Glass panel around the form */}
            <div
              className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-7 backdrop-blur-xl transition-all duration-700"
              style={{
                boxShadow: lampOn
                  ? "0 24px 60px -20px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.06), 0 0 60px -30px rgba(255,190,90,.12)"
                  : "0 24px 60px -20px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.06)",
              }}
            >
              {/* Top edge light line */}
              <div
                className="pointer-events-none absolute top-0 left-8 right-8 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent)",
                }}
              />

              <form
                className="space-y-4 sm:space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm text-white/60">
                    Email or username
                  </label>
                  <div className="group relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-amber-200/70"
                    />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full h-12 sm:h-14 rounded-2xl border border-white/10 bg-white/[0.045] pl-12 pr-4 text-sm sm:text-base text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:border-amber-200/30 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(255,205,110,.06),0_0_24px_-6px_rgba(255,190,90,.25)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 sm:mb-2 text-xs sm:text-sm text-white/60">
                    Password
                  </label>
                  <div className="group relative">
                    <LockKeyhole
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors group-focus-within:text-amber-200/70"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full h-12 sm:h-14 rounded-2xl border border-white/10 bg-white/[0.045] pl-12 pr-12 text-sm sm:text-base text-white placeholder:text-white/25 outline-none transition-all duration-300 focus:border-amber-200/30 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(255,205,110,.06),0_0_24px_-6px_rgba(255,190,90,.25)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-sm">
                  <label className="flex items-center gap-2 text-white/45 cursor-pointer">
                    <input type="checkbox" className="accent-red-500 w-4 h-4" />
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="text-white/60 hover:text-white transition text-left sm:text-right"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="relative overflow-hidden w-full h-12 sm:h-14 rounded-2xl bg-[#e31b23] hover:bg-[#f1262f] active:scale-[.98] text-white font-semibold text-sm sm:text-base shadow-[0_12px_35px_rgba(227,27,35,.22)] hover:shadow-[0_16px_45px_rgba(227,27,35,.35)] transition-all duration-300"
                >
                  <div className="sv-shine" />
                  <span className="relative">Sign In</span>
                </button>
              </form>
            </div>

            <p className="mt-5 sm:mt-7 text-center text-xs sm:text-sm text-white/35">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-white hover:text-red-400 transition"
              >
                Create account
              </button>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
