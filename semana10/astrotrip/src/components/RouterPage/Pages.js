import React from "react";



import {goToLoginPage ,goToCreatePage} from './goToPages',
import {useHistory} from "react-router-dom";

const Pages =() => {
    const history = useHistory()

    return(
        <Container>
            <button onClick ={() =>goToHomePage (history)}>
                HomePage
            </button>
        </Container>
    )
}