"use client"

import { useSearchParams } from "next/navigation"
import SearchBar from "../components/SearchBar"
import Link from "next/link"
import useSWR from "swr"
import BookList from "../components/BookList"

const fetchBooks = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Couldn't fetch any books")
  }

  return res.json()
}

export default function SearchPage() {
  const search = useSearchParams()
  const searchQuery = search ? search.get("q") : null
  const encodedSearchQuery = encodeURI(searchQuery || "")
  const { data, error, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchBooks,
    {
      revalidateOnFocus: false,
    }
  )

  if (error) return <div>Failed to fetch data</div>

  if (isLoading) return <div>Loading...</div>

  return (
    <main className="flex flex-col justify-center items-center text-center p-20 space-y-6">
      <h1 className="text-4xl font-medium">
        <Link href="/search">Book search</Link>{" "}
      </h1>
      <SearchBar />
      <BookList books={data?.books?.items} />
    </main>
  )
}
