import { Button, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import WelcomeText from '../../../components/WelcomeText'
import "../../../styles/commonStyles.css"
import { colors } from '../../../utils/constants'
import PackageCard from './components/PackageCard'
const packageData = [{
  id: "001",
  title: "Basic",
  billingCycle: "kuukausi",
  price: "8",
  oldPrice: "9",
  desc: "Sisaltaa 60 allekirjoitusta per vuosi",
  subDesc: "Yimenevat allekirjoutukset 1,50 € / kpl",
}, {
  id: "002",
  title: "Professional",
  billingCycle: "kuukausi",
  price: "30",
  oldPrice: "9",
  desc: "Sisaltaa 500 allekirjoitusta per vuosi",
  subDesc: "Yimenevat allekirjoutukset 1,50 € / kpl",
}, {
  id: "003",
  title: "Business",
  billingCycle: "kuukausi",
  price: "55",
  oldPrice: "65",
  desc: "Sisaltaa 600 allekirjoitusta per vuosi",
  subDesc: "Yimenevat allekirjoutukset 1,50 € / kpl",
}]
const Step2 = () => {
  const history = useHistory();
  const [selectedBillingCycle, setSelectedBillingCycle] = useState("vuosi");
  const [selectedPackage, setSelectedtPackage] = useState({
    id: "002",
    title: "Professional",
    billingCycle: "kuukausi",
    price: "30",
    oldPrice: "9",
    desc: "Sisaltaa 500 allekirjoitusta per vuosi",
    subDesc: "Yimenevat allekirjoutukset 1,50 € / kpl",
  });
  const handlePackageClick = (data) => {
    setSelectedtPackage(data);
  }
  const handleSubmit = async () => {
    await localStorage.setItem("billingCycle", selectedBillingCycle);
    await localStorage.setItem("selectedPackage", JSON.stringify(selectedPackage));
    history.push("/registration/step-3");
  }
  return (
    <Container fluid="true" className="root-container">
      <Grid container style={{ padding: '1vh' }}>
        <Grid xs={12} sm={6} item style={{ padding: '1vh', paddingTop: '5vh' }}>
          <WelcomeText />
        </Grid>
        <Grid xs={12} sm={6} item style={{ padding: '1vh', paddingTop: '1vh', }}>
          <h2>Palvelu paketit</h2>
          <div>
            <h4 className='bold'>Laskutusvali</h4>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', borderRadius: 5, border: `0.5px solid ${colors.primary}`, justifyContent: 'space-between', alignItems: 'center' }}>
              <Button disableElevation style={{ width: '50%', backgroundColor: selectedBillingCycle === "kuukausi" ? colors.selectedItem : "transparent", fontSize: '0.7em', color: colors.primary, borderRight: `0.5px solid ${colors.primary}`, borderRadius: 0 }} onClick={() => { setSelectedBillingCycle("kuukausi") }}>KUUKAUSI</Button>
              <Button disableElevation style={{ width: '50%', backgroundColor: selectedBillingCycle === "vuosi" ? colors.selectedItem : "transparent", fontSize: '0.7em', color: colors.primary }} onClick={() => { setSelectedBillingCycle("vuosi") }}>VUOSI</Button>
            </div>
          </div>
          <div>
            <h4 className='bold'>Valitse paketti</h4>
            {packageData.map(data => <PackageCard key={data.id} isActive={selectedPackage.id === data.id} packageInfo={data} onClick={() => { handlePackageClick(data) }} />)}
          </div>
          <p className='font-normal font-color-normal bold'>Hintoihin lisataan ALV</p>
          <p className='font-normal font-color-normal bold'><sup>*</sup>Vuositilaukseen perustuvat paketit veloitetaan kerran vuodessa etukateen kayttooikeusjakson alkaessa. Ennakkoon syntyneita maksuja ei palauteta.</p>
          <p className='font-normal font-color-normal bold'>Ylimenevat tapahtumat laskutetaan kuukausittain ( minimilaskutus 10 € )</p>
          <Button variant="contained" disableElevation fullWidth style={{ marginTop: '3%', marginBottom: '1%', backgroundColor: colors.primary, fontSize: '0.7em' }} onClick={handleSubmit}>VALITSE</Button>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Step2