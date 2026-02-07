import ProfileHeader from "../components/ProfileHeader"
import LinksContainer from "../components/LinksContainer"

export default function Links() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center px-4 py-12">
      <div
        className="
          w-full max-w-md
          bg-white
          rounded-3xl
          shadow-[0_8px_24px_rgba(0,0,0,0.06)]
          border border-gray-100
          px-6 py-8
        "
      >
        <ProfileHeader />
        <LinksContainer />

        <p className="mt-10 text-center text-xs text-gray-400">
          ©{new Date().getFullYear()} Meus Sentidos
        </p>
      </div>
    </main>
  )
}
