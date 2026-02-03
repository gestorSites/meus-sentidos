import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Opa! Essa página não foi encontrada.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-blue-900 text-white hover:bg-blue-900/90 transition"
      >
        Voltar para o início
      </Link>
    </div>
  );
}
