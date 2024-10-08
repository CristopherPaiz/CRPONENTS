import { useState } from "react";
import "../styles/index.css";
import CRInput from "../UI/CRInput";
import { useTheme } from "../../context/ThemeProvider";
import CRDate from "../UI/CRDate";
import CRButton from "../UI/CRButton";

const App = () => {
  const { theme, setTheme } = useTheme();

  // ##### ESTADOS #####
  const [prueba, setPrueba] = useState("");
  const [resetear, setResetear] = useState(false);

  // ##### RENDER #####
  return (
    <div className="w-full h-screen bg-white dark:bg-neutral-800 flex justify-center items-center">
      <div className="w-1/2 justify-center m-auto p-5">
        <button className="absolute right-0 top-0" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* /////////////////////////////////////// COMPONENTES /////////////////////////////////////// */}
        <CRInput title="Nombre" placeholder="Escriba su nombre" setValue={setPrueba} reset={resetear} />
        <CRDate title="Fecha" setValue={setPrueba} reset={resetear} />
        <CRButton title="Resetear" icon="close" onClick={() => setResetear(!resetear)} />

        {/* ##### PARA LAS PRUEBAS ##### */}
        {prueba && (
          <p className="text-center text-xl mt-2">
            {prueba}, {resetear ? "true" : "false"}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
