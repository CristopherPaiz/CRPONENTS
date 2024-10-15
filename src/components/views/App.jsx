import { useState, useEffect } from "react";
import "../styles/index.css";
import CRInput from "../UI/CRInput";
import { useTheme } from "../../context/ThemeProvider";
import CRDate from "../UI/CRDate";
import CRButton from "../UI/CRButton";
import CRSelect from "../UI/CRSelect";
import CRModal from "../UI/CRModal";
import CRAlert from "../UI/CRAlert";
import CRLoader from "../UI/CRLoader";

const App = () => {
  const { theme, setTheme } = useTheme();

  // ##### ESTADOS #####
  const [prueba, setPrueba] = useState("");
  const [resetear, setResetear] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activateLoader, setActivateLoader] = useState(false);

  // OBJETOS DE PRUEBA
  const testData = [
    {
      value: 1,
      label: "Manzana",
      icon: "https://cdn-icons-png.flaticon.com/128/415/415733.png",
      description: "Una fruta roja y crujiente",
    },
    {
      value: 2,
      label: "Banana",
      icon: "https://cdn-icons-png.flaticon.com/128/10247/10247513.png",
      description: "Una fruta amarilla y alargada",
    },
    {
      value: 3,
      label: "Naranja",
      icon: "https://cdn-icons-png.flaticon.com/128/1728/1728765.png",
      description: "Una fruta cítrica y redonda",
    },
    {
      value: 4,
      label: "Fresa",
      icon: "https://cdn-icons-png.flaticon.com/128/7315/7315465.png",
      description: "Una fruta pequeña y roja",
    },
    {
      value: 5,
      label: "Uva",
      icon: "https://cdn-icons-png.flaticon.com/128/1514/1514922.png",
      description: "Una fruta pequeña y redonda que crece en racimos",
    },
  ];

  const defaultItems = [
    {
      value: 1,
      label: "Manzana",
      icon: "https://cdn-icons-png.flaticon.com/128/415/415733.png",
      description: "Una fruta roja y crujiente",
    },
    {
      value: 2,
      label: "Banana",
      icon: "https://cdn-icons-png.flaticon.com/128/10247/10247513.png",
      description: "Una fruta amarilla y alargada",
    },
  ];

  // const createSequentialAlerts = (alerts) => {
  //   alerts.forEach((alert, index) => {
  //     setTimeout(() => {
  //       CRAlert.alert(alert);
  //     }, index * 500);
  //   });
  // };

  useEffect(() => {
    if (isModalOpen) {
      CRAlert.alert({
        title: "Tzoc1",
        message: "Este es un mensaje de prueba",
        duration: 5000,
        position: "top-right",
      });
      // CRAlert.alert({
      //   title: "Tzoc2",
      //   message: "Este es un mensaje de prueba2",
      //   duration: 5000,
      //   position: "top-right",
      //   type: "error",
      // });
      // CRAlert.alert({
      //   title: "Tzoc3",
      //   message: "Este es un mensaje de prueba3",
      //   duration: 5000,
      //   position: "top-right",
      //   type: "warning",
      // });
      // CRAlert.alert({
      //   title: "Tzoc4",
      //   message: "Este es un mensaje de prueba4",
      //   duration: 5000,
      //   position: "top-right",
      //   type: "success",
      // });
    }
  }, [isModalOpen]);

  // ##### RENDER #####
  return (
    <div className="w-full h-screen bg-white dark:bg-neutral-800 flex justify-center items-center">
      <div className="w-11/12 justify-center m-auto p-5 sm:w-1/2">
        <button className="absolute right-0 top-0" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* /////////////////////////////////////// COMPONENTES /////////////////////////////////////// */}
        <CRInput title="Nombre" placeholder="Escriba su nombre" setValue={setPrueba} reset={resetear} />
        <CRDate title="Fecha" setValue={setPrueba} reset={resetear} />
        <CRSelect
          data={testData}
          multi={true}
          separator
          searchable={true}
          setValue={setSelectedItems}
          autoClose={true}
          title="Seleccione una fruta"
          searchField="label"
          reset={resetear}
          icon={"icon"}
          defaultValue={defaultItems}
        />
        <CRButton title="Resetear" icon="close" onClick={() => setResetear(!resetear)} />
        <CRButton title="Abrir Modal" className="bg-green-500 text-white" onClick={() => setIsModalOpen(true)} />
        <CRButton title="Activar Loader" className="bg-blue-500 text-white" onClick={() => setActivateLoader(!activateLoader)} />

        <CRModal setIsOpen={setIsModalOpen} isOpen={isModalOpen} title="Ejemplo de Modal">
          <div>
            <h1>Contenido del Modal</h1>
            <p>FIRST Este es un ejemplo de contenido dentro del modal.</p>
            <p>LAST Este es un ejemplo de contenido dentro del modal.</p>
            <button className="bg-green-500 rounded-sm py-1 px-2" onClick={() => setIsModalOpen(false)}>
              Cerrar Modal
            </button>
          </div>
        </CRModal>
        {/* ##### PARA LAS PRUEBAS ##### */}
        {prueba && (
          <p className="text-center text-xl mt-2">
            {prueba}, {resetear ? "true" : "false"}
          </p>
        )}
        {selectedItems && console.log(selectedItems)}
        {activateLoader && <CRLoader />}
      </div>
    </div>
  );
};

export default App;
