import {  useState , useEffect } from 'react'
import './App.css'


  type EstudanteType = {
    _id: string,
    nome:string,
    idade:number
  }
function App( ){
 useEffect(() => {
  fetch("/api/estudantes")
  .then((response) => response.json())
  .then((dados) => setEstudantes(dados))

 }, [])

  const [estudantes, setEstudantes] = useState<EstudanteType[]>([])
  return (
    <>
      <h1>lista de estudantes</h1>
      <div className="container-estudantes">
        {
         estudantes.map((estudantes) => { 
        return (
          <div key={estudantes._id}>
            <h2>{estudantes.nome}</h2>
            <p>idade: {estudantes.idade}</p>
            </div>
          )
       })
      }
     </div>
    </>
  )
}
export default App

