type TeamCardProps = {
  name: string
  role: string
  description?: string
  image: string
  foco?: string
}

export default function TeamCard({ name, role, image, foco }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center h-full">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        style={{ objectPosition: foco }}
      />

      <h3 className="font-semibold text-[#1177E3]">{name}</h3>
      <p className="text-sm text-blue-600 mb-2">{role}</p>

      {/* <p className="text-sm text-gray-600">
        {description}
      </p> */}
    </div>
  )
}
