import { useState } from "react";
import "../styles/index.css";
import CRInput from "../UI/CRInput";
import { useTheme } from "../../context/ThemeProvider";
import CRDate from "../UI/CRDate";

const App = () => {
  const [prueba, setPrueba] = useState("");
  const [resetear, setResetear] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full h-screen bg-white dark:bg-neutral-800 flex justify-center items-center">
      <div className="w-1/2 justify-center m-auto p-5">
        {/* // ADD BUTTON rigth top absulute to change the theme */}
        <button className="absolute right-0 top-0" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <CRInput title="Nombre" placeholder="sotz" setValue={setPrueba} reset={resetear} maxLength={50} />
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
    </div>
  );
};

export default App;
