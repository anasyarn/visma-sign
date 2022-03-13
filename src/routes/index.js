import React from 'react'
import { Redirect } from 'react-router-dom'
import { Switch, Route } from "react-router-dom"
import RegistrationStep1 from '../views/auth/registration/Step1'
import RegistrationStep2 from '../views/auth/registration/Step2'
import RegistrationStep3 from '../views/auth/registration/Step3'

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/registration/step-1" />
            <Route key="registration/step-1" exact path={"/registration/step-1"} component={RegistrationStep1} />
            <Route key="registration/step-2" exact path={"/registration/step-2"} component={RegistrationStep2} />
            <Route key="registration/step-3" exact path={"/registration/step-3"} component={RegistrationStep3} />
        </Switch>
    )
}
export default Routes