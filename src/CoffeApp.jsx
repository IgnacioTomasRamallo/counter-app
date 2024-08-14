import React from 'react'


export const CoffeApp = () => {
const peticion = fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
  peticion
  .then(response => response.json())
  .then( (data) => {
    const coffes = data;
    console.log(coffes)
  })
  .catch(error => {
    console.log(error)
  })
  

  return (
    <div>
      <div>
        <div className='text-center w-2/5'>
          <h2 className='text-3xl font-bold underline'>Our colecction</h2>
          <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>
        <div>
          <button>All Products</button>
          <button>Avalible Now</button>
        </div>
        <p></p>
        //crear componente card mapearlo con una lista de objetos que incluya un archivo js con todos los cafes 
      coffes.map()
        <h3>Testeando...</h3>
      </div>

    </div>
  
  
  )
}
