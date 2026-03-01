import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center font-sans p-6 md:p-12">
      <main className="flex w-full max-w-4xl flex-col items-center justify-center gap-12 text-center sm:items-start sm:text-left py-20">
        <Image
          className="next-logo-themed opacity-90"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-base-content leading-tight">
            To get started, edit the <span className="text-primary italic">page.tsx</span> file.
          </h1>
          <p className="max-w-xl text-lg md:text-xl leading-relaxed text-base-content/70">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-6 pt-4 text-base font-semibold sm:flex-row">
          <a
            className="btn btn-primary btn-lg px-8 rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="btn btn-ghost btn-lg px-8 rounded-full border border-base-content/10 hover:border-primary transition-all"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
