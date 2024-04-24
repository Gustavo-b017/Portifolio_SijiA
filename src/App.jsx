import Contato from './Componentes/Navlateral/Contato/Contato'
import Footer from './Componentes/Navlateral/Footer/Footer'
import Navlateral from './Componentes/Navlateral/Navlateral'
import Principal from './Componentes/Navlateral/Principal/Principal'
import Projetos from './Componentes/Navlateral/Projetos/Projetos'
import Sobre from './Componentes/Navlateral/Sobre/Sobre'

function App() {
  return (
    <>
      <Navlateral/>
      <Principal/>
      <Sobre/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
