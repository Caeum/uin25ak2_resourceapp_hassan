import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import "./styles/Layout.scss";

//Den setter opp routing for de ulike sidene ved hjelp av React Router.
const App = () => {
  return (
     //Router-komponenten gjør det mulig å navigere mellom forskjellige sider uten å laste inn siden på nytt.
    <Router>
        {/*Layout-komponenten brukes for å gi en felles struktur.*/}
      {/*Alle sidene vil bli rendret innenfor Layout, slik at navigasjonen alltid er synlig.*/}
      <Layout>
        <Routes>
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/headless-cms" element={<Resources category="headless-cms" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


