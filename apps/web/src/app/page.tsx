import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-emerald-700 mb-4">Vista do Bosque</h1>
      <p className="text-gray-600 mb-8 max-w-lg">Sistema de gestão condominial. Acesse o portal para chamados, reservas e comunicados.</p>
      <div className="flex gap-4">
        <Link href="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition">Acessar Portal</Link>
      </div>
    </div>
  );
}
