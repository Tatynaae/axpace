import React, { useState } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import Tabs from "../../components/UI/Tabs";
import EditIcon from "../../assets/icons/EditIcon";
import SettingProfile from "./components/SettingProfile";
import SettingNotification from "./components/SettingNotification";
import SettingTime from "./components/SettingTime";
import "./Settings.scss";
import clsx from "clsx";

const Settings = () => {
  const { theme } = useThemeContext();
  const tabs = [
    { id: 1, title: "Profile", value: "Profile" },
    { id: 2, title: "Time", value: "Time" },
    { id: 3, title: "Notification", value: "Notification" },
  ];
  const [active, setActive] = useState("Profile");
  const [edit, setEdit] = useState(false);

  const selectTab = (value) => {
    setActive(value);
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="settings">
      <div
        className={theme === "dark" ? "settings_content" : "settings_content-l"}
      >
        <div
          className={clsx(
            "settings_content_title",
            theme === "dark" ? "page-title" : "page-title-l"
          )}
        >
          Setting
        </div>
        <div className="settings_content_top">
          <Tabs
            list={tabs}
            isActive={active}
            onSelect={selectTab}
            variant={"underline"}
          />
          <div
            className={theme === "dark" ? "gray" : "gray-l"}
            onClick={toggleEdit}
          >
            <EditIcon />
          </div>
        </div>
        <div className="settings_content_bloks">
          {active === tabs[0].value ? (
            <SettingProfile edit={edit} toggleEdit={toggleEdit} />
          ) : null}
          {active === tabs[1].value ? (
            <SettingTime edit={edit} toggleEdit={toggleEdit} />
          ) : null}
          {active === tabs[2].value ? <SettingNotification /> : null}
        </div>
      </div>
    </div>
  );
};

export default Settings;
