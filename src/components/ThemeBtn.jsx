import React from "react";
import useTheme from "../context/theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onchangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onchangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gradient-to-r from-gray-400 to-gray-600 peer-focus:outline-none dark:peer-focus:ring-indigo-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}