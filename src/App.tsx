import { useState, useEffect } from 'react'
import './App.css'


type EstudanteType = {
  _id: string,
  nome: string,
  idade: number
}
function App() {
  useEffect(() => {
    fetch("/api/estudantes")
      .then((response) => response.json())
      .then((dados) => setEstudantes(dados))
  }, [])
  const [estudantes, setEstudantes] = useState<EstudanteType[]>([])
  const [nome, setNome] = useState("")
  const [idade, setidade] = useState(0)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const estudante = { nome, idade }
    fetch("/api/estudantes", {
      method: "POST",
      headers: {
        "content-type": "aplication/json"
      },
      body: JSON.stringify(estudante)
    })
      .then((response) => response.json())
      .then((dados) => {
        setEstudantes([...estudantes, dados])
        setNome("")
        setidade(0)
      })
  }



  return (
    <>
    <h1> Cadastro de Estudantes</h1>
    <form onSubmit={handleSubmit}>
  <input type = "text" placeholder = 'nome' value = {nome}
  onChange={(e) =>setNome( e.target.value)}/>

  <input type = "number" placeholder = 'idade' value = {idade}
  onChange={(e) =>setidade(Number( e.target.value))}/>

  <button type = 'submit'> cadastrar </button>

    </form>

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

