import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

//https://api.github.com/users/Felipepirova/repos

const repository = {
  name:'unform',
  description:'Forms in React',
  link:'https://github.com/Felipepirova/fundamentosignite/commits/main'
}

export function RepositoryList(){

  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    fetch('https://api.github.com/users/Felipepirova/repos')
    .then(response => response.json()
    .then(data => console.log(data)))
  },[])

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}