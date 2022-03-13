import { Button, Container, Grid, TextField, InputLabel, FormControl, FormLabel, Radio, Select, MenuItem, RadioGroup, FormControlLabel, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { colors } from '../../../utils/constants'
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
  const [viewableData, setViewableData] = useState("")
  const handleSubmit = async () => {
    // let billingCycle = await localStorage.getItem("billingCycle");
    let selectedPackage = JSON.parse(await localStorage.getItem("selectedPackage"));
    let organisationalInfo = { companyName, businessId, country, postAddress, postCode, postalDistrict, organizationType, email, phone };
    let allData = { selectedPackage, organisationalInfo }
    console.log(allData);
    setViewableData(allData)
  }
  return (
    <Container fluid="true" className="root-container">
      <Grid container style={{ padding: '2vh', justifyContent: 'center' }}>
        <Grid xs={12} sm={5} item>
          <h2>Rekisteroitava yritys</h2>
          <div>
            {/* <h4 className='bold'>Laskutusvali</h4> */}
            <div className='input-container'>
              <TextField label="Yrityksen nimi" required variant="outlined" onChange={(e) => { setCompanyName(e.target.value) }} value={companyName} fullWidth />
            </div>
            <div className='input-container'>
              <TextField label="Y-tunnus" required variant="outlined" onChange={(e) => { setBusinessId(e.target.value) }} value={businessId} fullWidth />
            </div>
            <div className='input-container'>
              <FormControl fullWidth >
                <InputLabel >Maa jossa yritystoimiige</InputLabel>
                <Select
                  value={country}
                  label="Maa jossa yritystoimiige"
                  onChange={(e) => {
                    setCountry(e.target.value)
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
            <TextField label="Postiosoite" required variant="outlined" onChange={(e) => { setPostAddress(e.target.value) }} value={postAddress} fullWidth />
            <div>
              <Grid container>
                <Grid xs={12} sm={4} item >
                  <div className='input-container post-code' style={{ marginBottom: '-.2em' }}>
                    <TextField label="Postinumero" type="number" required variant="outlined" onChange={(e) => { setPostCode(e.target.value) }} value={postCode} fullWidth />
                  </div>
                </Grid>
                <Grid xs={12} sm={8} item >
                  <div className='input-container'>
                    <TextField label="Postitoimipaikka" required variant="outlined" onChange={(e) => { setPostalDistrict(e.target.value) }} value={postalDistrict} fullWidth />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className='input-container'>
              <FormControl fullWidth >
                <FormLabel required>Organisaatiomuoto</FormLabel>
                <RadioGroup
                  value={organizationType}
                  onChange={(e) => {
                    setOrganizationType(e.target.value)
                  }}
                >
                  <FormControlLabel value="yritys" control={<Radio />} label="Yritys" />
                  <FormControlLabel value="yhdistys" control={<Radio />} label="Yhdistys" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div>
            <h4 className='bold'>Yhteystiedot</h4>
            <div className='input-container'>
              <TextField label="Sahkopostiosoite" type="email" required variant="outlined" onChange={(e) => { setEmail(e.target.value) }} value={email} fullWidth />
              <p className='font-small font-color-grey light'>Rekisteroinnin vahvistus js allekirjoituspalveluun liittyvat asiat kuten ohjeet ja tiedottet lahetetaan tahan osoitteeseen.</p>
            </div>
            <div className='input-container'>
              <TextField
                sx={{ width: '25ch' }}
                required
                label="Puhelin numero"
                type="number"
                onChange={(e) => { setPhone(e.target.value) }} value={phone}
                InputProps={{
                  startAdornment: <InputAdornment position="start">+358</InputAdornment>,
                }}
                style={{ width: '100%' }}
              />
              <p className='font-small font-color-grey light'>Puhelinnumero, josta tavoittaa yrityksen edustajan esimerkiksi allekirjoituspalveluun liitetyn jarjestelman tekniseen vikatilanteeseen tai selvittelyyn liittyen.</p>
            </div>
          </div>
          {/* ////showing data */}
          {viewableData && <div className='input-container' style={{ backgroundColor: 'lightcyan', wordWrap: "break-word", padding: '1em', borderRadius: 5 }}>
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