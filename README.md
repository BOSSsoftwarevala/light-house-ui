# Light House UI

import { useState } from "react";

import { Eye, EyeOff, LockKeyhole, Mail, Power } from "lucide-react";

export default function SoftwareValaLogin() {

  const [lampOn, setLampOn] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  return (

    <main

      className={`min-h-screen overflow-hidden transition-all duration-700 ${

        lampOn

          ? "bg-[#07101f]"

          : "bg-[#02050b]"

      }`}

    >

      <div

        className={`absolute inset-0 transition-all duration-700 pointer-events-none ${

          lampOn

            ? "opacity-100"

            : "opacity-0"

        }`}

        style={{

          background:

            "radial-gradient(circle at 28% 38%, rgba(255,190,90,.18), transparent 28%), radial-gradient(circle at 70% 50%, rgba(30,100,255,.10), transparent 35%)",

        }}

      />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-14 items-center">

          {/* LAMP */}

          <div className="relative flex items-center justify-center min-h-[520px]">

            <div

              className={`absolute bottom-16 w-72 h-24 rounded-full blur-3xl transition-all duration-700 ${

                lampOn ? "bg-amber-300/20" : "bg-transparent"

              }`}

            />

            <div className="relative w-[300px] h-[470px]">

              {/* Light */}

              <div

                className={`absolute top-20 left-1/2 -translate-x-1/2 w-[260px] h-[310px] transition-all duration-700 ${

                  lampOn ? "opacity-100" : "opacity-0"

                }`}

                style={{

                  background:

                    "radial-gradient(ellipse at top, rgba(255,211,130,.34), rgba(255,180,60,.08) 42%, transparent 72%)",

                  filter: "blur(8px)",

                }}

              />

              {/* Lampshade */}

              <div

                className={`absolute top-14 left-1/2 -translate-x-1/2 w-52 h-28 transition-all duration-500 ${

                  lampOn

                    ? "drop-shadow-[0_0_35px_rgba(255,196,90,.5)]"

                    : ""

                }`}

              >

                <div

                  className={`absolute inset-0 ${

                    lampOn ? "bg-[#d9a858]" : "bg-[#222a36]"

                  }`}

                  style={{

                    clipPath:

                      "polygon(20% 0, 80% 0, 100% 100%, 0 100%)",

                  }}

                />

                <div className="absolute bottom-0 left-0 right-0 h-3 bg-black/30" />

              </div>

              {/* Bulb */}

              <div

                className={`absolute top-[125px] left-1/2 -translate-x-1/2 w-11 h-11 rounded-full transition-all duration-500 ${

                  lampOn

                    ? "bg-[#fff0bd] shadow-[0_0_35px_15px_rgba(255,205,110,.55)]"

                    : "bg-[#303743]"

                }`}

              />

              {/* Stand */}

              <div className="absolute top-[175px] left-1/2 -translate-x-1/2 w-4 h-64 rounded-full bg-gradient-to-r from-[#161c25] via-[#707985] to-[#11161d]" />

              {/* Base */}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-7 rounded-[50%] bg-gradient-to-b from-[#7c858e] via-[#272e38] to-[#080b10] shadow-2xl" />

              {/* Switch */}

              <button

                type="button"

                onClick={() => setLampOn((value) => !value)}

                aria-label={lampOn ? "Turn lamp off" : "Turn lamp on"}

                className="absolute right-5 top-64 w-11 h-11 rounded-full border border-white/10 bg-[#111822] text-white/80 hover:text-white hover:scale-110 transition-all duration-300 shadow-xl"

              >

                <Power size={18} className="mx-auto" />

              </button>

            </div>

            <div className="absolute bottom-2 text-center">

              <p className="text-xs uppercase tracking-[0.35em] text-white/30">

                Software Vala

              </p>

              <p className="mt-2 text-sm text-white/40">

                {lampOn ? "Light is on" : "Turn on the light"}

              </p>

            </div>

          </div>

          {/* LOGIN */}

          <div

            className={`w-full max-w-md mx-auto transition-all duration-700 ${

              lampOn

                ? "opacity-100 translate-y-0"

                : "opacity-70 translate-y-1"

            }`}

          >

            <div className="mb-8">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-11 h-11 rounded-xl bg-[#e31b23] flex items-center justify-center shadow-lg">

                  <span className="text-white font-black text-lg">SV</span>

                </div>

                <div>

                  <div className="text-white font-bold text-lg">

                    Software Vala

                  </div>

                  <div className="text-white/35 text-xs">

                    Software ecosystem

                  </div>

                </div>

              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">

                Welcome back.

              </h1>

              <p className="mt-3 text-white/45">

                Sign in to continue to your Software Vala account.

              </p>

            </div>

            <form className="space-y-5">

              <div>

                <label className="block mb-2 text-sm text-white/60">

                  Email or username

                </label>

                <div className="relative">

                  <Mail

                    size={18}

                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"

                  />

                  <input

                    type="text"

                    placeholder="Enter your email"

                    className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.045] pl-12 pr-4 text-white placeholder:text-white/25 outline-none transition-all focus:border-white/30 focus:bg-white/[0.07]"

                  />

                </div>

              </div>

              <div>

                <label className="block mb-2 text-sm text-white/60">

                  Password

                </label>

                <div className="relative">

                  <LockKeyhole

                    size={18}

                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"

                  />

                  <input

                    type={showPassword ? "text" : "password"}

                    placeholder="Enter your password"

                    className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.045] pl-12 pr-12 text-white placeholder:text-white/25 outline-none transition-all focus:border-white/30 focus:bg-white/[0.07]"

                  />

                  <button

                    type="button"

                    onClick={() => setShowPassword((value) => !value)}

                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition"

                    aria-label={

                      showPassword

                        ? "Hide password"

                        : "Show password"

                    }

                  >

                    {showPassword ? (

                      <EyeOff size={18} />

                    ) : (

                      <Eye size={18} />

                    )}

                  </button>

                </div>

              </div>

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-white/45 cursor-pointer">

                  <input

                    type="checkbox"

                    className="accent-red-500"

                  />

                  Remember me

                </label>

                <button

                  type="button"

                  className="text-white/60 hover:text-white transition"

                >

                  Forgot password?

                </button>

              </div>

              <button

                type="submit"

                className="w-full h-14 rounded-2xl bg-[#e31b23] hover:bg-[#f1262f] active:scale-[.98] text-white font-semibold shadow-[0_12px_35px_rgba(227,27,35,.22)] transition-all"

              >

                Sign In

              </button>

            </form>

            <p className="mt-7 text-center text-sm text-white/35">

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







Mobile friendly

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/21967a4e-ea8d-4c81-b59c-3b786ec53ba2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
