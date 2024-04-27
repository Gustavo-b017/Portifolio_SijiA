import { Outlet } from 'react-router-dom' 
import Footer from './Componentes/Navlateral/Footer/Footer'
import Navlateral from './Componentes/Navlateral/Navlateral'

function App() {
  return (
    <>
    
    <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
      <Navlateral/>
      
      <Outlet/>

      <Footer/>
    </>
  )
}

export default App
