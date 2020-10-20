import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import HERO from '../../static/hero.png'
import * as ROUTES from '../../constants/routes'

export default () => {
    return (
        <div className="Home">
            <div className="container">
                <h1 className="app-title">Harmonize</h1>
                <p className="hero-text">Find times to meet with the people you care about.</p>
                <img className="hero-img" src={HERO} alt="Find times to meet with people."/>
                <Link to={ROUTES.CREATE_POLL} className="create-btn">Create Poll</Link>

                {/* <footer>
                    <Link href="" className="link">About</Link>
                </footer> */}
            </div>
        </div>
    )
}