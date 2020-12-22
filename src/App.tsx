import React from 'react'
import logo from './logo.svg'
import './App.css'
import {useTranslation} from 'react-i18next'

function App() {

    const {t, i18n} = useTranslation()

    function handleClick(lan: string) {
        i18n.changeLanguage(lan)
    }

    return (
        <div className="App">
            <header className="App-header">
                <nav style={{width: '100%', padding: '1rem 0'}}>
                    {LANGUAGES.map((lan: {label: string, val: string})=>
                        <button className="t-button" key={lan.val} onClick={() => handleClick(lan.val)}>{lan.label}</button>)}
                </nav>
                <h4>{t('welcome')}</h4>
                <p>{t('description.part1')}</p>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
        </div>
    )
}

export default App

const LANGUAGES = [
    {label: 'Italiano', val: 'it'},
    {label: 'English', val: 'en'},
    {label: 'Français', val: 'fr'},
    {label: 'Deutsche', val: 'de'},
    {label: 'Español', val: 'es'},
    {label: '中文', val: 'chi'},
]
