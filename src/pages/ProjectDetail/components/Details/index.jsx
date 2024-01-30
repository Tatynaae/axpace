import React from "react";
import { useThemeContext } from "../../../../context/ThemeContext";
import BorderedInput from "../../../../components/UI/BorderedInput";
import "./Details.scss";
import clsx from "clsx";

const Details = ({ project }) => {
  const { theme } = useThemeContext();
  return (
    <section className="details">
      <div
        className={clsx(
          "details_block",
          theme === "dark" ? "details_block-d" : "details_block-l"
        )}
      >
        <p className={theme === "dark" ? "page-title" : "page-title-l"}>
          Project details
        </p>
        <div className="details_block_fr">
          <div
            className={clsx(
              "fr-title",
              theme === "dark" ? "fr-title-d" : "fr-title-l"
            )}
          >
            Project name
          </div>
          <BorderedInput
            placeholder="Placeholder_input"
            defaultValue={project.title}
          />
        </div>
        <div className="details_block_fr">
          <div
            className={clsx(
              "fr-title",
              theme === "dark" ? "fr-title-d" : "fr-title-l"
            )}
          >
            Description
          </div>
          <textarea
            placeholder="Text"
            defaultValue={"Text"}
            className={clsx(theme === "dark" ? "desc-t-d" : "desc-t-l")}
          ></textarea>
        </div>
        <div className="details_block_fr">
          <div
            className={clsx(
              "fr-title",
              theme === "dark" ? "fr-title-d" : "fr-title-l"
            )}
          >
            Owner
          </div>
          <BorderedInput placeholder="Owner name" defaultValue={"Owner name"} />
        </div>
        <div className="details_block_fr">
          <div className="fr-deadline">
            <div
              className={clsx(
                "fr-title",
                theme === "dark" ? "fr-title-d" : "fr-title-l"
              )}
            >
              Start date
            </div>
            <div
              className={clsx(
                "fr-title",
                theme === "dark" ? "fr-title-d" : "fr-title-l"
              )}
            >
              Start date
            </div>
          </div>
          <div className="fr-deadline">
            <BorderedInput placeholder="date" defaultValue={"17.03.2023"} />
            <BorderedInput placeholder="date" defaultValue={"25.11.23"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
