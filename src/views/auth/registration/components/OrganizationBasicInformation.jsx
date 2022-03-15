import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import "../../../../styles/commonStyles.css";
import "../styles/step3.css";
const OrganizationBasicInformation = ({
  companyName,
  setCompanyName,
  businessId,
  setBusinessId,
  country,
  setCountry,
  postAddress,
  setPostAddress,
  postCode,
  setPostCode,
  postalDistrict,
  setPostalDistrict,
}) => {
  return (
    <div>
      <div className="input-container">
        <TextField
          label="Yrityksen nimi"
          required
          variant="outlined"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          value={companyName}
          fullWidth
        />
      </div>
      <div className="input-container">
        <TextField
          label="Y-tunnus"
          required
          variant="outlined"
          onChange={(e) => {
            setBusinessId(e.target.value);
          }}
          value={businessId}
          fullWidth
        />
      </div>
      <div className="input-container">
        <FormControl fullWidth>
          <InputLabel>Maa jossa yritystoimiige</InputLabel>
          <Select
            value={country}
            label="Maa jossa yritystoimiige"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <MenuItem value="suomi">Suomi</MenuItem>
            <MenuItem value="denmark">Denmark</MenuItem>
            <MenuItem value="sweden">Sweden</MenuItem>
            <MenuItem value="norway">Norway</MenuItem>
            <MenuItem value="iceland">Iceland</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextField
        label="Postiosoite"
        required
        variant="outlined"
        onChange={(e) => {
          setPostAddress(e.target.value);
        }}
        value={postAddress}
        fullWidth
      />
      <div>
        <Grid container>
          <Grid xs={12} sm={4} item>
            <div
              className="input-container post-code"
              style={{ marginBottom: "-.2em" }}
            >
              <TextField
                label="Postinumero"
                type="number"
                required
                variant="outlined"
                onChange={(e) => {
                  setPostCode(e.target.value);
                }}
                value={postCode}
                fullWidth
              />
            </div>
          </Grid>
          <Grid xs={12} sm={8} item>
            <div className="input-container">
              <TextField
                label="Postitoimipaikka"
                required
                variant="outlined"
                onChange={(e) => {
                  setPostalDistrict(e.target.value);
                }}
                value={postalDistrict}
                fullWidth
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

OrganizationBasicInformation.propTypes = {
  companyName: PropTypes.any.isRequired,
  setCompanyName: PropTypes.func.isRequired,
  businessId: PropTypes.any.isRequired,
  setBusinessId: PropTypes.func.isRequired,
  country: PropTypes.any.isRequired,
  setCountry: PropTypes.func.isRequired,
  postAddress: PropTypes.any.isRequired,
  setPostAddress: PropTypes.func.isRequired,
  postCode: PropTypes.any.isRequired,
  setPostCode: PropTypes.func.isRequired,
  postalDistrict: PropTypes.any.isRequired,
  setPostalDistrict: PropTypes.func.isRequired,
};
export default OrganizationBasicInformation;
