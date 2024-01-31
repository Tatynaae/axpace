import React from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import SlideMonthArrowIcon from "../../../assets/icons/SlideMonthArrowIcon";
import "./Months.scss";

const Months = () => {
  const { theme } = useThemeContext();
  return (
    <div className="month">
      <span className="left-a">
        <SlideMonthArrowIcon />
      </span>
      <span className={theme === "dark" ? "month-t" : "month-t-l"}>
        October
      </span>
      <span className="right-a">
        <SlideMonthArrowIcon />
      </span>
    </div>
  );
};

export default Months;
