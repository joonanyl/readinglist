import Link from "next/link"

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center text-center items-center p-20 space-y-4">
        <h1 className="text-6xl font-bold">
          Welcome to <br /> Readinglist
        </h1>
        <p className="text-xl max-w-2xl">
          Discover, organize, and cherish your reading journey with Readinglist.
          Curate a personal collection, get recommendations, and connect with
          fellow book enthusiasts. Start today!
        </p>
        <div className="flex gap-2">
          <button className="bg-white hover:bg-slate-100 font-semibold py-2 px-4 border border-black rounded-full">
            <p className="bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
              <Link href={`/login`}>Get started</Link>
            </p>
          </button>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded-full">
            <Link href={`/login`}>Log in</Link>
          </button>
        </div>
      </div>
    </main>
  )
}
