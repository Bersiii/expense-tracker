import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <section className="mx-auto grid min-h-[400px] max-w-[1400px] mt-30 gap-10 px-8 py-0 lg:grid-cols-2 ">
      {/* LEFT SIDE */}
      <div className="max-w-[600px] " id="Home">
        {/* Heading */}
        <h1
          id="about"
          className="text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-3xl lg:text-[50px]"
        >
          Take control of
          <br />
          your <span className="text-teal-600">money</span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[520px] text-lg leading-8 text-slate-600">
          Montra helps you track expenses, set budgets, and build better
          financial habits — effortlessly.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/register"
            className="rounded-full bg-teal-600 not-only:px-8 py-4 text-base font-medium text-white shadow-lg shadow-orange-500/20 transition hover:bg-teal-800"
          >
            Get started - for free
          </Link>

          <Link
            href="/LearnMore"
            className="rounded-full border border-white bg-white/65 px-8 py-4 text-base font-medium text-slate-800 shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full items-start justify-center lg:justify-end ">
        <div className="w-full max-w-[650px] ">
          <Image
            src="/home1.png"
            alt="Montra financial dashboard"
            width={700}
            height={500}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
