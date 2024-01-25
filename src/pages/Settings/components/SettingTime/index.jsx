import React, { useState } from "react";
import clsx from "clsx";
import ArrayDown from "../../../../assets/icons/ArrowDown.jsx";
import "./SettingTime.scss";

const SettingTime = ({ edit, toggleEdit }) => {
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
          <div className="s-t_content_left" key={idx}>
            {t.key}
          </div>
          <div className="s-t_content_right" key={idx}>
            {edit ? (
              <div
                className={clsx(
                  "s-t_content_select ",
                  selectClick === t.value && "selected"
                )}
                onClick={() => toggleSelectClick(t.value)}
              >
                <span>{t.value}</span>
                <span className="gray">
                  <ArrayDown />
                </span>
                {selectClick === t.value ? (
                  <div
                    className="s-t_content_select_options {

                  }"
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
          <button className="cencel-btn" onClick={toggleEdit}>
            Cancel
          </button>
          <button className="success-btn" onClick={toggleEdit}>
            Save
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SettingTime;
