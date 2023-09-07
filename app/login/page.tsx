import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mx-auto mb-60 w-full sm:w-[350px]">
        <div className="flex flex-col space-y-3 p-4 text-center">
          <p className="text-3xl">📖</p>
          <h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
          <p className="text-sm text-gray-400">
            Login using your Google account
          </p>
          <button className="bg-black text-white border font-semibold rounded-lg py-4 hover:text-black hover:bg-white hover:border-black transition-all duration-300">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  )
}
