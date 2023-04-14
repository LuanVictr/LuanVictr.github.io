import React, { useEffect } from "react";
import Header from "../Components/Header";
import HomeBody from "../Components/Home.body";
import HomeProjects from "../Components/Home.projects";
import Footer from "../Components/Footer";

function Home () {
  useEffect(() => {
    document.title = 'Portifólio Luan Victor'
  })

  return (
    <div>
      <Header />
      <HomeBody />
      <HomeProjects />
      <Footer />
    </div>
  )
}

export default Home;