"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
  const search = useSearchParams()
  const [query, setQuery] = useState<string | null>(
    search ? search.get("q") : ""
  )
  const router = useRouter()

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (typeof query !== "string") {
      return
    }

    const encodedQuery = encodeURI(query)
    router.push(`/search?q=${encodedQuery}`)
  }

  return (
    <form onSubmit={onSearch} className="flex justify-center w-2/3">
      <input
        value={query || ""}
        onChange={(e) => setQuery(e.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-yellow-50 bg-zinc-800 focus:bg-zinc-900 rounded-full focus:outline-none focus:ring-[1px] focus:ring-yellow-50 placeholder:text-zinc-400"
        placeholder="Search for a book"
      />
    </form>
  )
}
