import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CRSelect = ({
  title,
  disable = false,
  chevron = true,
  loading = false,
  loadingText = "Cargando...",
  disableText,
  multi = false,
  clearable = true,
  separator = false,
  color = "#3b82f6",
  height = 200,
  placeholder = "Seleccione...",
  labelField = "label",
  valueField = "value",
  icon,
  data = [],
  searchable = false,
  setValue,
  reset,
  defaultValue,
  direction = "auto",
  searchField,
  autoClose = true,
  error = "",
  onlySelectValues = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef(null);

  const [defaultApplied, setDefaultApplied] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [timeoutExpired, setTimeoutExpired] = useState(false);

  useEffect(() => {
    if (dataLoaded && defaultValue && !timeoutExpired && !defaultApplied) {
      const defaultItems = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      const matchedItems = defaultItems.map((item) => data.find((dataItem) => dataItem[valueField] === item[valueField])).filter(Boolean);

      if (matchedItems.length > 0) {
        setSelectedItems(matchedItems);
        setValue && setValue(onlySelectValues ? matchedItems.map((item) => item[valueField]) : matchedItems);
      }
      setDefaultApplied(true);
    }
  }, [dataLoaded, defaultValue, timeoutExpired, defaultApplied, data, valueField, setValue, onlySelectValues]);

  useEffect(() => {
    if (data.length > 0) {
      setFilteredData(data);
      setDataLoaded(true);
    }
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeoutExpired(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setSelectedItems([]);
    setSearchTerm("");
    setValue && setValue(multi ? [] : null);
  }, [reset, setValue, multi]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSelect = () => {
    if (!disable && !loading && (dataLoaded || timeoutExpired)) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item) => {
    let updatedItems;
    if (multi) {
      updatedItems = selectedItems.some((selectedItem) => selectedItem[valueField] === item[valueField])
        ? selectedItems.filter((selectedItem) => selectedItem[valueField] !== item[valueField])
        : [...selectedItems, item];
    } else {
      updatedItems = [item];
      autoClose && setIsOpen(false);
    }
    setSelectedItems(updatedItems);
    setValue && setValue(onlySelectValues ? updatedItems.map((item) => item[valueField]) : updatedItems);
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = data.filter((item) => item[searchField || labelField].toLowerCase().includes(term.toLowerCase()));
    setFilteredData(filtered);
  };

  const removeItem = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem[valueField] !== item[valueField]);
    setSelectedItems(updatedItems);
    setValue && setValue(onlySelectValues ? updatedItems.map((item) => item[valueField]) : updatedItems);
  };

  const clearSelection = () => {
    setSelectedItems([]);
    setValue && setValue(multi ? [] : null);
    setDefaultApplied(false);
  };

  const renderValue = () => {
    if (loading || (!dataLoaded && !timeoutExpired)) return loadingText;
    if (disable && disableText) return disableText;
    if (selectedItems.length === 0) return <span className={`${error ? "text-red-500" : "text-gray-700"}`}>{placeholder}</span>;
    if (multi) {
      return selectedItems.map((item) => (
        <div
          key={item[valueField]}
          className="inline-flex items-center rounded-full px-2 py-1 text-sm mr-1 mb-1"
          style={{ backgroundColor: color, color: "white" }}
        >
          {item[icon] && <img src={item[icon]} alt="" className="w-4 h-4 mr-1 rounded-full" />}
          {item[labelField]}
          <svg
            onClick={(e) => {
              e.stopPropagation();
              removeItem(item);
            }}
            className="ml-1 h-4 w-4 cursor-pointer hover:text-red-500 transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      ));
    }
    return selectedItems[0][labelField];
  };

  return (
    <div className="relative w-full" ref={selectRef}>
      {title && <label className={`block mb-1 font-medium ${error ? "text-red-500" : "text-gray-700"}`}>{title}</label>}
      <div
        className={`relative w-full border rounded-md ${error ? "border-red-500" : "border-gray-300"} ${
          disable || loading ? "bg-gray-100 cursor-not-allowed opacity-70 saturate-50" : "cursor-pointer"
        }`}
        onClick={toggleSelect}
      >
        <div className="flex items-center p-2 min-h-[38px]">
          <div className="flex-grow overflow-hidden">{renderValue()}</div>
          <div className="flex-shrink-0 ml-2 flex items-center">
            {clearable && selectedItems.length > 0 && (
              <svg
                onClick={(e) => {
                  e.stopPropagation();
                  clearSelection();
                }}
                className="h-5 w-5 text-gray-400 cursor-pointer mr-2 hover:text-red-500 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {chevron && !loading && (
              <svg
                className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
            {loading && (
              <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
          </div>
        </div>
        {isOpen && (
          <div
            className={`absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg ${
              direction === "top" ? "bottom-full mb-1" : "top-full"
            }`}
            style={{ maxHeight: `${height}px`, overflowY: "auto" }}
          >
            {searchable && (
              <div className="p-2">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={handleSearch}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
            {filteredData.length === 0 ? (
              <div className="py-2 text-center text-gray-500">No hay datos</div>
            ) : (
              filteredData.map((item, index) => (
                <React.Fragment key={item[valueField]}>
                  <div
                    className={`py-2 pl-4 pr-2 hover:bg-opacity-10`}
                    style={{
                      backgroundColor: selectedItems.some((selectedItem) => selectedItem[valueField] === item[valueField]) ? color : "transparent",
                      color: selectedItems.some((selectedItem) => selectedItem[valueField] === item[valueField]) ? "white" : "inherit",
                    }}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="flex items-center">
                      {item[icon] && <img src={item[icon]} alt="" className="w-6 h-6 mr-2 -ml-1 rounded-full" />}
                      {item[labelField]}
                    </div>
                  </div>
                  {separator && index < filteredData.length - 1 && <hr className="border-gray-300" />}
                </React.Fragment>
              ))
            )}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

CRSelect.propTypes = {
  title: PropTypes.string,
  disable: PropTypes.bool,
  chevron: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  disableText: PropTypes.string,
  multi: PropTypes.bool,
  clearable: PropTypes.bool,
  separator: PropTypes.bool,
  color: PropTypes.string,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  labelField: PropTypes.string,
  valueField: PropTypes.string,
  icon: PropTypes.string,
  data: PropTypes.array,
  searchable: PropTypes.bool,
  setValue: PropTypes.func,
  reset: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  direction: PropTypes.oneOf(["auto", "top", "bottom", "right", "left"]),
  searchField: PropTypes.string,
  autoClose: PropTypes.bool,
  error: PropTypes.string,
  onlySelectValues: PropTypes.bool,
};

export default CRSelect;
