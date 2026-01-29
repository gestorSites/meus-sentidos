import logoMeusSentidos from '../assets/logoMeusSentidos.jpg'

export default function ProfileHeader() {
  return (
    <div className="text-center mb-10">

      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-yellow-400 blur-md opacity-70" />

        <img
          src={logoMeusSentidos}
          alt="Logo Meus Sentidos"
          className="relative w-24 h-24 rounded-full bg-white object-cover border-4 border-white shadow"
        />
      </div>

      <h1 className="text-lg font-semibold text-blue-900">
        Meus Sentidos
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Clínica especializada em TEA
      </p>
    </div>
  )
}
