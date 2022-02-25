import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledExperience = Styled.div`

padding: 48px 0;
background: var(--black);

`;

const Experience = () => {
  const { t } = useTranslation();

  return (
    <StyledExperience>
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <h2>{t("title-experience")}</h2>
          </div>
        </div>
      </div>
    </StyledExperience>
  );
};

export default Experience;
