import { useState } from "react";
import CRDate from "../UI/CRDate";
import "../styles/index.css";
import CRInput from "../UI/CRInput";

const App = () => {
  const [prueba, setPrueba] = useState("");
  const [resetear, setResetear] = useState(false);
  return (
    <div className="w-1/2 justify-center m-auto my-48 p-5">
      <CRInput title="Nombre" setValue={setPrueba} reset={resetear} />
      <CRDate title="Fecha" setValue={setPrueba} reset={resetear} />

      {/* ############# PARA LAS PRUEBAS ############# */}

      {prueba && (
        <p className="text-center text-xl mt-2">
          {prueba}, {resetear ? "true" : "false"}
        </p>
      )}

      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setResetear(!resetear)}>
        reset
      </button>
    </div>
  );
};

export default App;
