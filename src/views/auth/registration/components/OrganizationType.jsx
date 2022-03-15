import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import "../../../../styles/commonStyles.css";
import "../styles/step3.css";
const OrganizationType = ({ organizationType, setOrganizationType }) => {
  return (
    <div className="input-container">
      <FormControl fullWidth>
        <FormLabel required>Organisaatiomuoto</FormLabel>
        <RadioGroup
          value={organizationType}
          onChange={(e) => {
            setOrganizationType(e.target.value);
          }}
        >
          <FormControlLabel value="yritys" control={<Radio />} label="Yritys" />
          <FormControlLabel
            value="yhdistys"
            control={<Radio />}
            label="Yhdistys"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
OrganizationType.propTypes = {
  organizationType: PropTypes.string.isRequired,
  setOrganizationType: PropTypes.func.isRequired,
};
export default OrganizationType;
