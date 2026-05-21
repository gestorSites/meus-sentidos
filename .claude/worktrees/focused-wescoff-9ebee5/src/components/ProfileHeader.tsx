import logoMeusSentidos from '../assets/logoMeusSentidos.jpg'

export default function ProfileHeader() {
  return (
    <div className="text-center mb-8">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={logoMeusSentidos}
          alt="Logo Meus Sentidos"
          loading="lazy"
          className="
            w-24 h-24 rounded-full
            object-cover
            border border-gray-200
            shadow-sm
            mx-auto
          "
        />
      </div>

      <h1 className="text-base font-semibold text-gray-900">
        Meus Sentidos
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        Centro de Desenvolvimento Humano
      </p>
    </div>
  )
}
