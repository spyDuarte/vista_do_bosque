'use client';
export default function DashboardPage() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Painel do Morador</h1>
      <p className="text-gray-600 mb-6">Ambiente protegido. Módulos operacionais serão integrados conforme roadmap.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-emerald-50 p-4 rounded-lg"><h3 className="font-medium text-emerald-800">Chamados</h3><p className="text-sm text-emerald-600">2 pendentes</p></div>
        <div className="bg-blue-50 p-4 rounded-lg"><h3 className="font-medium text-blue-800">Reservas</h3><p className="text-sm text-blue-600">1 confirmada</p></div>
        <div className="bg-amber-50 p-4 rounded-lg"><h3 className="font-medium text-amber-800">Comunicados</h3><p className="text-sm text-amber-600">3 novos</p></div>
      </div>
    </div>
  );
}
