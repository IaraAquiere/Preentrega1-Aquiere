import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"


const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"hola"} />
    </>
  )
}

export default App