import { Button, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import { colors } from '../../../utils/constants'
import OrganizationBasicInformation from './components/OrganizationBasicInformation'
import OrganizationType from './components/OrganizationType'
import OrganizationContactInformation from './components/OrganizationContactInformation'
import "../../../styles/commonStyles.css"
import "./styles/step3.css"

const Step3 = () => {
  const [companyName, setCompanyName] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [country, setCountry] = useState("suomi");
  const [postAddress, setPostAddress] = useState("")
  const [postCode, setPostCode] = useState("");
  const [postalDistrict, setPostalDistrict] = useState("");
  const [organizationType, setOrganizationType] = useState("yritys");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")
  const [viewableData, setViewableData] = useState("");
  const [errors, setErrors] = useState({
    email: false
  })
  const validateEmail = (email) => {
    /////validating email with regular-expression
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };
  const handleSubmit = async () => {
    // let billingCycle = await localStorage.getItem("billingCycle");
    // console.log(billingCycle)
    if (validateEmail(email)) {
      let selectedPackage = JSON.parse(await localStorage.getItem("selectedPackage"));
      let organisationalInfo = { companyName, businessId, country, postAddress, postCode, postalDistrict, organizationType, email, phone };
      let allData = { selectedPackage, organisationalInfo }
      console.log(allData);
      setViewableData(allData)
    }
    else {
      let error = errors;
      error.email = true;
      setErrors({ ...error });
    }
    return;
  };
  return (
    <Container fluid="true" className="root-container">
      <Grid container style={{ padding: '1vh', justifyContent: 'center' }}>
        <Grid xs={12} sm={5} item>
          <h2>Rekisteroitava yritys</h2>
          <OrganizationBasicInformation
            companyName={companyName}
            setCompanyName={setCompanyName}
            businessId={businessId}
            setBusinessId={setBusinessId}
            country={country}
            setCountry={setCountry}
            postAddress={postAddress}
            setPostAddress={setPostAddress}
            postCode={postCode}
            setPostCode={setPostCode}
            postalDistrict={postalDistrict}
            setPostalDistrict={setPostalDistrict} />
          <OrganizationType organizationType={organizationType} setOrganizationType={setOrganizationType} />
          <OrganizationContactInformation
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            errors={errors}
            setErrors={setErrors} />
          {/* ////showing data */}
          {viewableData && <div className='input-container' style={{ backgroundColor: colors.selectedItem, wordWrap: "break-word", padding: '1em', borderRadius: 5 }}>
            <p className='font-small light'>selectedPackage: {JSON.stringify(viewableData.selectedPackage)}<br /><br />organisationalInfo: {JSON.stringify(viewableData.organisationalInfo)}</p>
          </div>}
          {/* /////end of showing data */}
          <Button variant="contained" disableElevation fullWidth style={{ marginTop: '3%', marginBottom: '1%', backgroundColor: colors.primary, fontSize: '0.7em' }} onClick={handleSubmit}>JATKA LASKUTUSTIETOIHIN</Button>
        </Grid>
      </Grid>
    </Container >
  )
}
export default Step3
