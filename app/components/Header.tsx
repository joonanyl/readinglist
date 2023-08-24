function PersonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fill-rule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  )
}

export default function Header() {
  return (
    <div className="pb-4 mt-4 border-b-2">
      <div className="flex items-center justify-between px-6">
        <h1 className="font-semibold text-lg lg:text-xl">📖 Readinglist</h1>
        <p>📖</p>
        <div className="text-lg flex flex-row gap-4">
          <p>Docs</p>
          <p>List</p>
          <p>Search</p>
        </div>
      </div>
    </div>
  )
}
