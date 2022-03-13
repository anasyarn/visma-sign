import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import WelcomeText from '../../../components/WelcomeText'
import "../../../styles/commonStyles.css"
import { colors } from '../../../utils/constants'
const Step1 = () => {
  return (
    <Container fluid="true" className="root-container">
      <Grid container style={{ padding: '2vh' }}>
        <Grid xs={12} sm={6} item style={{ padding: '1vh', paddingTop: '3vh' }}>
          <WelcomeText />
        </Grid>
        <Grid xs={12} sm={6} item style={{ padding: '1vh', paddingTop: '5vh', }}>
          <h2>Visma Sign yritykselle</h2>
          <p className='bold'>Professional palvelupaketti</p>
          <p className='font-small bold'>Vuositilaus (300 €/vuosi+ALV)</p>
          <p className='font-small font-color-grey'>Sisaltaa 500 allekirjoitusta vuuodessa. Ylimenevat allekirjoitukset 1,50€ / kpl</p>
          <a href='/registration/step-2'>Muut vaihtoehdot</a>
          <Button variant="contained" disableElevation fullWidth style={{ marginTop: '3%', marginBottom: '1%', backgroundColor: colors.primary, fontSize: '0.7em' }}>JATKA YRITYKSEN TIETOIHIN</Button>
          <p className='font-normal bold' style={{ color: colors.primary }}>Visma Sign vain henkilokohtaiseen kayttoon?</p>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Step1