import ProfileHeader from "../components/ProfileHeader"
import LinksContainer from "../components/LinksContainer"

export default function Links() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-300 to-white flex justify-center px-4 py-10">
      <div className=" 
      w-full max-w-md
    bg-white
    rounded-2xl
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    border border-gray-100
    p-6
  ">
        <ProfileHeader />
        <LinksContainer />
        <p className="mt-8 text-center text-xs text-gray-400">
          ©{new Date().getFullYear()} Meus Sentidos
        </p>

      </div>
    </main>
  )
}
