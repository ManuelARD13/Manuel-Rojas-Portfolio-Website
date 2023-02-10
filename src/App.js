import { useEffect, useMemo, useState } from 'react';
import './App.css';

import { Nav } from "./components/Nav"
import { Header } from "./components/Header"
import { PersonalInfo } from "./components/PersonalInfo"
import { Educationals } from "./components/Educationals"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { BackToTopButton } from "./components/BackToTopButton"


function App() {
  const [profileData, setProfileData] = useState({})
  const [academicsData, setAcademicsData] = useState([])

  useEffect(() => {
    fetch("/manuelRojasInfo.json")
      .then((res) => res.json())
      .then((data) => setProfileData(data))
  }, [])

  useEffect(() => {
    fetch("/academicsData.json")
      .then((res) => res.json())
      .then((data) => setAcademicsData(data))
  }, [])

  const personalData = useMemo(() => profileData, [profileData])
  const techsData = useMemo(() => academicsData, [academicsData])

  return (
    <>
      <Nav />
      <Header />
      <PersonalInfo profileData={{personalData}} />
      <Educationals techArray={techsData} />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
