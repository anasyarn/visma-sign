import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import "../../../../styles/commonStyles.css";
import "../styles/step3.css";
const OrganizationContactInformation = ({
  email,
  setEmail,
  phone,
  setPhone,
  errors,
  setErrors,
}) => {
  return (
    <div>
      <h4 className="bold">Yhteystiedot</h4>
      <div className="input-container">
        <TextField
          label="Sahkopostiosoite"
          type="email"
          error={errors.email}
          variant="outlined"
          onChange={(e) => {
            let error = errors;
            error.email = false;
            setErrors({ ...error });
            setEmail(e.target.value);
          }}
          value={email}
          fullWidth
        />
        <p className="font-small font-color-grey light">
          Rekisteroinnin vahvistus js allekirjoituspalveluun liittyvat asiat
          kuten ohjeet ja tiedottet lahetetaan tahan osoitteeseen.
        </p>
      </div>
      <div className="input-container">
        <TextField
          sx={{ width: "25ch" }}
          required
          label="Puhelin numero"
          type="number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+358</InputAdornment>
            ),
          }}
          style={{
            width: "100%",
          }}
        />
        <p className="font-small font-color-grey light">
          Puhelinnumero, josta tavoittaa yrityksen edustajan esimerkiksi
          allekirjoituspalveluun liitetyn jarjestelman tekniseen
          vikatilanteeseen tai selvittelyyn liittyen.
        </p>
      </div>
    </div>
  );
};
OrganizationContactInformation.propTypes = {
  email: PropTypes.any.isRequired,
  setEmail: PropTypes.func.isRequired,
  phone: PropTypes.any.isRequired,
  setPhone: PropTypes.func.isRequired,
  errors: PropTypes.any.isRequired,
  setErrors: PropTypes.func.isRequired,
};
export default OrganizationContactInformation;
