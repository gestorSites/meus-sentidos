import { profissionais } from "../data/profissionais"
import Reveal from "../components/Reveal"
import { Link } from "react-router-dom"

export default function EquipePage() {

  const profissionaisArray = Object.entries(profissionais)

  const profissionaisPorArea = profissionaisArray.reduce((acc, [slug, prof]) => {

    if (!acc[prof.area]) {
      acc[prof.area] = []
    }

    acc[prof.area].push({ slug, ...prof })

    return acc
  }, {} as Record<string, any[]>)

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">

      <h1 className="text-4xl font-bold text-center text-[#1177E3]">
        Nossa Equipe
      </h1>

      {Object.entries(profissionaisPorArea).map(([area, lista]) => (

        <section key={area} className="space-y-4">

          <h2 className="text-2xl font-semibold text-[#1177E3]">
            {area}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {lista.map((prof, i) => (

              <Reveal key={prof.slug} delay={i * 0.06}>

                <Link
                  to={`/profissionais/${prof.slug}`}
                  className="group block text-center"
                >

                  <img
                    src={prof.foto}
                    alt={prof.nome}
                    className="w-full aspect-square object-cover rounded-xl shadow-md group-hover:scale-105 transition"
                  />

                  <h3 className="mt-4 font-semibold text-lg">
                    {prof.nome}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {prof.cargo}
                  </p>

                </Link>

              </Reveal>

            ))}

          </div>

        </section>

      ))}

    </div>
  )
}