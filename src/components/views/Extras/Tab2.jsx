import { useEffect } from "react";

const Tab2 = () => {
  useEffect(() => {
    console.log("Componente TAB2 montado"); // mostrar el indice del componente que se monto
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-wider">Panel de Tarjetas</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {["Proyecto A", "Proyecto B", "Proyecto C", "Proyecto D", "Proyecto E"].map((title, index) => (
          <div key={index} className="group bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {/* Card Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
              <span className="text-sm font-medium text-gray-500 group-hover:text-indigo-500 transition-colors">#{index + 1}</span>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4">
                Este es un resumen del contenido de la tarjeta para {title}. Puedes ver los detalles o realizar acciones rápidas.
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">Última actualización: Hoy</p>
                <span className="text-xs text-green-500 font-bold">Activo</span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="border-t border-gray-200 p-4 flex justify-between">
              <button className="text-indigo-600 hover:text-indigo-400 font-semibold text-sm">Ver más</button>
              <button className="text-red-500 hover:text-red-400 font-semibold text-sm">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab2;
