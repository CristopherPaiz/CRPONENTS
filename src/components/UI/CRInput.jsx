import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CRInput = ({ title, className, type, placeholder, maxLength, disabled, setValue, value, defaultValue, reset, autoComplete, error, ...props }) => {
  const [inputValue, setInputValue] = useState(defaultValue || value || "");
  const [charCount, setCharCount] = useState(0);
  const [counterClass, setCounterClass] = useState("");

  useEffect(() => {
    if (reset !== undefined) {
      setInputValue(defaultValue || "");
      setValue(defaultValue || "");
      setCharCount(0);
    }
  }, [reset, defaultValue, setValue]);

  useEffect(() => {
    if (charCount === maxLength) {
      setCounterClass("text-yellow-600 dark:text-yellow-500 scale-125");
      setTimeout(() => {
        setCounterClass("text-yellow-600 dark:text-yellow-500 scale-100");
      }, 200);
    } else {
      setCounterClass("");
    }
  }, [charCount, maxLength]);

  const handleChange = (e) => {
    let newValue = e.target.value;

    // Enforce maxLength manually for type number
    if (type === "number" && maxLength && newValue.length > maxLength) {
      newValue = newValue.slice(0, maxLength);
    }

    setInputValue(newValue);
    setValue(newValue);
    setCharCount(newValue.length);
  };

  const baseStyle =
    "bg-white dark:bg-slate-800/50 text-black dark:text-white block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";
  const errorStyle = "border-red-500 focus:ring-red-500 focus:border-red-500 text-red-500 dark:text-red-400";
  const disabledStyle = "opacity-50 dark:opacity-30 cursor-not-allowed";
  const inputPaddingRight = maxLength > 100 ? "pr-14" : "pr-11"; // Reserve space for the counter

  return (
    <div className={`py-2 ${error ? "text-red-500 dark:text-red-400" : ""}`}>
      {title && (
        <label
          htmlFor="CRInput"
          className={`text-black dark:text-white block text-sm font-medium mb-2 ${
            error ? "text-red-500 dark:text-red-400" : disabled ? "text-gray-400 dark:text-gray-500" : ""
          }`}
        >
          {title}
        </label>
      )}
      <div className="relative">
        <input
          id="CRInput"
          type={type === "number" || type === "numeric" ? "number" : type} // Override to "text" for numbers
          inputMode={type === "number" || type === "numeric" ? "number" : type}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          className={`${baseStyle} ${disabled ? disabledStyle : ""} ${error ? errorStyle : ""} ${className} ${inputPaddingRight}`}
          {...props}
          autoComplete={autoComplete ? "on" : "off"}
        />

        {maxLength && (
          <div
            className={`absolute right-2 bottom-[11px] text-xs transition-transform duration-200 text-black dark:text-white ${counterClass} ${
              disabled ? "text-gray-400 dark:text-gray-500" : ""
            }`}
          >
            {charCount}/{maxLength}
          </div>
        )}
      </div>
      {/* Show error message below the input */}
      {error && <p className="text-xs text-red-500 dark:text-red-400 mt-1">{error}</p>}
    </div>
  );
};

CRInput.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "email", "tel", "password"]),
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  disabled: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  reset: PropTypes.any,
  autoComplete: PropTypes.bool,
  error: PropTypes.string,
};

export default CRInput;
