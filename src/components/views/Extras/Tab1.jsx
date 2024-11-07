import { useEffect } from "react";

const Tab1 = () => {
  useEffect(() => {
    console.log("Componente TAB1 montado"); // mostrar el indice del componente que se monto
  }, []);
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-xl text-white">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold tracking-wide">Dashboard</h2>
        <p className="text-sm opacity-75">Bienvenido de nuevo, Cristopher</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 transform transition duration-500 hover:scale-105">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/50" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Cristopher</h3>
            <p className="text-gray-600 text-sm">Desarrollador de React</p>
          </div>
        </div>
        <div className="mt-4 flex justify-around">
          <div>
            <p className="font-bold text-xl text-gray-900">42</p>
            <p className="text-sm text-gray-600">Proyectos</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-900">105</p>
            <p className="text-sm text-gray-600">Tareas</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-900">15</p>
            <p className="text-sm text-gray-600">Alertas</p>
          </div>
        </div>
      </div>

      {/* Stats Panel */}
      <div className="bg-purple-800 p-4 rounded-lg shadow-lg mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="font-semibold text-xl">75%</p>
            <p className="text-sm">Completado</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-xl">120</p>
            <p className="text-sm">Puntos</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-xl">3.5 hrs</p>
            <p className="text-sm">Promedio</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around mt-6">
        <button className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-2 px-4 rounded transition duration-300">Ver Proyectos</button>
        <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded transition duration-300">Crear Tarea</button>
        <button className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded transition duration-300">Notificaciones</button>
      </div>

      {/* Footer */}
      <div className="text-center text-xs opacity-50 mt-6">
        <p>Todos los derechos reservados © 2024</p>
      </div>
    </div>
  );
};

export default Tab1;
