import React from "react";
import "./Details.scss";
import BorderedInput from "../../../../components/UI/BorderedInput";

const Details = ({project}) => {
  return (
    <section className="details">
      <div className="details_block">
        <p className="page-title">Project details</p>
        <div className="details_block_fr">
          <div className="fr-title">Project name</div>
          <BorderedInput
            placeholder="Placeholder_input"
            defaultValue={project.title}
          />
        </div>
        <div className="details_block_fr">
          <div className="fr-title">Description</div>
          <textarea placeholder="Text" defaultValue={"Text"}></textarea>
        </div>
        <div className="details_block_fr">
          <div className="fr-title">Owner</div>
          <BorderedInput placeholder="Owner name" defaultValue={"Owner name"} />
        </div>
        <div className="details_block_fr">
          <div className="fr-deadline">
            <div className="fr-title">Start date</div>
            <div className="fr-title">Start date</div>
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
