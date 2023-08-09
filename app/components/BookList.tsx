import Image from "next/image"

type Book = {
  id?: string
  title: string
  authors: string[]
  img: string
  volumeInfo?: any
}

export function AddIcon() {
  return (
    <button className="flex items-center justify-center w-10 h-10 bg-zinc-600 rounded-full focus:shadow-outline hover:bg-zinc-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  )
}

export function BookCard({ authors, img, title }: Book) {
  return (
    <div className="bg-zinc-800 border border-yellow-50 rounded-lg shadow-md">
      <div className="flex justify-center items-center">
        <div className="mt-8">
          <Image
            src={img}
            alt="Book cover"
            sizes="100vw"
            height={100}
            width={200}
          />
        </div>
      </div>
      <div className="mt-4 px-4">
        <a href="#">
          <h5 className="text-2xl font-medium">{title}</h5>
        </a>
        <div className="flex flex-row justify-center space-x-1">
          {authors.map((author) => (
            <p key={author} className="text-lg text-gray-400 font-light">
              {author}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BookList({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
      {books?.map((book) => (
        <BookCard
          key={book.id}
          authors={book.volumeInfo.authors ? book.volumeInfo.authors : []}
          img={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
        />
      ))}
    </div>
  )
}
