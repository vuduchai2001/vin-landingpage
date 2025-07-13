import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-4">
        Welcome to Next.js
      </h1>

      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={120}
        height={30}
        className="mx-auto dark:invert"
      />

      <p className="mt-6 text-center text-sm text-gray-600">
        Edit <code>src/app/page.tsx</code> and save to reload.
      </p>

      <a
        href="https://nextjs.org/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-center underline text-blue-500 hover:text-blue-700"
      >
        Read the Docs →
      </a>
    </div>
  )
}
