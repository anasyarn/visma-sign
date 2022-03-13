import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../../../utils/constants";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import "../../../../styles/commonStyles.css";
import "../styles/step2.css";
const PackageCard = ({ isActive, packageInfo, onClick }) => {
  return (
    <Button
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginBottom: 10,
        borderRadius: 5,
        border: `0.5px solid ${isActive ? colors.primary : colors.borderColor}`,
        backgroundColor: isActive ? colors.selectedItem : "transparent",
        padding:'2%'
      }}
      onClick={onClick}
    >
      <div
        className="package-content"
        style={{
          width: "15%",
        }}
      >
        {isActive ? (
          <FaRegDotCircle
            color={isActive ? colors.primary : colors.grey}
            size="1.5em"
          />
        ) : (
          <FaRegCircle
            color={isActive ? colors.primary : colors.grey}
            size="1.5em"
          />
        )}
      </div>
      <div
        style={{
          width: "85%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column"
        }}
      >
        <h2 className="light font-color-grey no-margin">{packageInfo.title}</h2>
        <h2 className="font-color-normal no-margin">
          {packageInfo.price + " € "}
          <span className="font-small">
            / {packageInfo.billingCycle + "  "}
          </span>
          <span
            className="font-small font-color-grey light"
            style={{ textDecoration: "line-through" }}
          >
            {packageInfo.oldPrice + " € "} / {packageInfo.billingCycle}
          </span>
        </h2>
        <p className="font-normal font-color-normal no-margin">
          {packageInfo.desc}
        </p>
        <p className="font-normal font-color-grey no-margin">
          {packageInfo.subDesc}
        </p>
      </div>
    </Button>
  );
};
PackageCard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  packageInfo: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default PackageCard;
