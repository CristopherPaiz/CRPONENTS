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
import CRNavbar from "../UI/CRNavbar";
import { CRTabPanel, CRTabs, CRTabSelector } from "../UI/CRTabs";
import Tab1 from "./Extras/Tab1";
import Tab2 from "./Extras/Tab2";

const App = () => {
  const { theme, setTheme } = useTheme();

  // ##################################################################
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };

  const handleLogIn = () => {
    console.log("Log In clicked");
    setIsAuthenticated(true);
  };

  const handleLogOut = () => {
    console.log("Log Out clicked");
    setIsAuthenticated(false);
  };

  const handleProfile = () => {
    console.log("Profile clicked");
  };

  const logoConfig = {
    label: "MyApp",
    size: "h-8 w-auto",
    path: "/",
  };

  const ctaButtons = [
    {
      label: "Sign Up",
      onClick: handleSignUp,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      label: "Log In",
      onClick: handleLogIn,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" y1="12" x2="3" y2="12"></line>
        </svg>
      ),
    },
  ];

  const links = [
    {
      label: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      path: "/",
      needAuthenticate: false,
    },
    {
      label: "Products",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
      needAuthenticate: false,
      dropdown: [
        {
          label: "Electronics",
          path: "/products/electronics",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
              <rect x="9" y="9" width="6" height="6"></rect>
              <line x1="9" y1="1" x2="9" y2="4"></line>
              <line x1="15" y1="1" x2="15" y2="4"></line>
              <line x1="9" y1="20" x2="9" y2="23"></line>
              <line x1="15" y1="20" x2="15" y2="23"></line>
              <line x1="20" y1="9" x2="23" y2="9"></line>
              <line x1="20" y1="14" x2="23" y2="14"></line>
              <line x1="1" y1="9" x2="4" y2="9"></line>
              <line x1="1" y1="14" x2="4" y2="14"></line>
            </svg>
          ),
        },
        {
          label: "Clothing",
          path: "/products/clothing",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"></path>
            </svg>
          ),
        },
      ],
    },
    {
      label: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      path: "/dashboard",
      needAuthenticate: true,
    },
  ];

  const profileConfig = {
    label: "John Doe",
    onClick: handleProfile,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  };
  // ##################################################################

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
    <div className="w-full h-screen overflow-auto bg-white dark:bg-neutral-800 text-black dark:text-white">
      <CRNavbar
        orientation="top"
        logo={logoConfig}
        useRouter={false}
        isSticky={true}
        useMenu={true}
        ctaButtons={
          isAuthenticated
            ? [
                {
                  label: "Log Out",
                  onClick: handleLogOut,
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  ),
                },
              ]
            : ctaButtons
        }
        links={links}
        auth={isAuthenticated}
        onlyIcons={true}
        useProfile={isAuthenticated ? profileConfig : null}
      />
      <div className="flex flex-col justify-center items-center flex-1 flex-grow p-5 mb-96">
        <div className="w-full flex justify-end">
          <button className="right-0" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <div className="w-full justify-center m-auto sm:w-1/2">
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
            color="teal"
          />
          <CRButton title="Resetear" className="bg-red-500 text-white" icon="close" onClick={() => setResetear(!resetear)} />
          <CRButton title="Abrir Modal" className="bg-green-500 text-white" onClick={() => setIsModalOpen(true)} />
          <CRButton
            title={`${activateLoader ? "Desactivar" : "Activar"} Loader`}
            className="bg-blue-500 text-white"
            onClick={() => setActivateLoader(!activateLoader)}
          />

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
          <CRTabs initialTab={1}>
            <CRTabSelector>Inicio</CRTabSelector>
            <CRTabSelector>Alumnos</CRTabSelector>
            <CRTabSelector>Profesores</CRTabSelector>

            <CRTabPanel>
              <h1>INICIO</h1>
            </CRTabPanel>
            <CRTabPanel forceUnmount>
              <Tab1 />
            </CRTabPanel>
            <CRTabPanel>
              <Tab2 />
            </CRTabPanel>
          </CRTabs>
        </div>
      </div>
    </div>
  );
};

export default App;
