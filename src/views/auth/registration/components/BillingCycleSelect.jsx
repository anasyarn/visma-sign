import React from "react";
import { Button } from "@mui/material";
import { colors } from "../../../../utils/constants";
import PropTypes from "prop-types";
import "../../../../styles/commonStyles.css";
const BillingCycleSelect = ({
  selectedBillingCycle,
  setSelectedBillingCycle,
}) => {
  return (
    <div>
      <h4 className="bold">Laskutusvali</h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          borderRadius: 5,
          border: `0.5px solid ${colors.primary}`,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          disableElevation
          style={{
            width: "50%",
            backgroundColor:
              selectedBillingCycle === "kuukausi"
                ? colors.selectedItem
                : "transparent",
            fontSize: "0.7em",
            color: colors.primary,
            borderRight: `0.5px solid ${colors.primary}`,
            borderRadius: 0,
          }}
          onClick={() => {
            setSelectedBillingCycle("kuukausi");
          }}
        >
          KUUKAUSI
        </Button>
        <Button
          disableElevation
          style={{
            width: "50%",
            backgroundColor:
              selectedBillingCycle === "vuosi"
                ? colors.selectedItem
                : "transparent",
            fontSize: "0.7em",
            color: colors.primary,
          }}
          onClick={() => {
            setSelectedBillingCycle("vuosi");
          }}
        >
          VUOSI
        </Button>
      </div>
    </div>
  );
};
BillingCycleSelect.propTypes = {
  selectedBillingCycle: PropTypes.any.isRequired,
  setSelectedBillingCycle: PropTypes.func.isRequired,
};
export default BillingCycleSelect;
