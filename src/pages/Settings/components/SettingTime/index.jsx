import React, { useState } from "react";
import { useThemeContext } from "../../../../context/ThemeContext.jsx";
import clsx from "clsx";
import ArrayDown from "../../../../assets/icons/ArrowDown.jsx";
import "./SettingTime.scss";

const SettingTime = ({ edit, toggleEdit }) => {
  const { theme } = useThemeContext();
  const [selectClick, setSelectClick] = useState("");
  const time = [
    {
      key: "Duration format",
      value: "XXh YYm (2h 3m)",
      options: ["hh : mm (12:30)", "XXh YYm (2h 3m)"],
    },
    {
      key: "Time format",
      value: "12-hour clock (am/pm) (09:30 pm)",
      options: ["24-hour clock ", "12-hour clock (am/pm) (09:30 pm) "],
    },
  ];

  const toggleSelectClick = (value) => {
    if (selectClick !== value) {
      setSelectClick(value);
    } else {
      setSelectClick("");
    }
  };
  return (
    <div className="s-t">
      {time.map((t, idx) => (
        <div className="s-t_content">
          <div
            className={
              theme === "dark" ? "s-t_content_left" : "s-t_content_left-l"
            }
            key={idx}
          >
            {t.key}
          </div>
          <div
            className={
              theme === "dark" ? "s-t_content_right" : "s-t_content_right-l"
            }
            key={idx}
          >
            {edit ? (
              <div
                className={clsx(
                  "s-t_content_select",
                  selectClick === t.value && (theme === 'dark' ? "selected" : "selected-l")
                )}
                onClick={() => toggleSelectClick(t.value)}
              >
                <span>{t.value}</span>
                <span className={theme === "dark" ? "gray" : "gray-l"}>
                  <ArrayDown />
                </span>
                {selectClick === t.value ? (
                  <div
                    className={ theme === 'dark' ? "s-t_content_select_options" : 's-t_content_select_options-l'}
                  >
                    {t.options.map((opt, idx) => (
                      <span key={idx}>{opt}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              t.value
            )}
          </div>
        </div>
      ))}
      {edit ? (
        <div className="s-t_btns">
          <button className={theme === 'dark' ?  "cencel-btn" : "cencel-btn-l" }onClick={toggleEdit}>
            Cancel
          </button>
          <button className={theme === 'dark' ?  "success-btn" : "success-btn-l"} onClick={toggleEdit}>
            Save
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SettingTime;
