import React from "react";
import dyroImage from '../Images/projetos/dyro/dyro-tela-pesquisa.png'
import tfcImage from '../Images/projetos/tfc/tfc-tabela-visitantes.png'
import tryfoodImage from '../Images/projetos/tryfood/tryfood-filter-page.png'
import '../css/home-project.css'

function HomeProjects () {
  return (
    <div className="home-projects">
      <div className="projects">
        <h2>Aqui estão alguns dos meus projetos</h2>
        <div className="projects-carts">
        <a href="https://github.com/LuanVictr/Trybe_Recipes_App"><div className="project-container">
          <img className="image-project-mobile" src={tryfoodImage} alt="tryfood images" />
          <h4>Tryfood</h4>
        </div></a>
        <a href="https://github.com/LuanVictr/Projeto_Trybetunes"><div className="project-container">
          <img className="image-project" src={dyroImage} alt="projeto 2"/>
          <h4>Dyro</h4>
        </div></a>
        <a href=""><div className="project-container">
          <img className="image-project" src={tfcImage} alt="projeto 3" />
          <h4>Trybe Futebol Clube</h4>
        </div></a>
        </div>
      </div>
    </div>
  )
}

export default HomeProjects;