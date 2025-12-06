import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './Home/home'
import Detalhes from './pages/Datalhes/detalhes'
import Favoritos from './pages/Favoritos/favoritos'
import Erro from './pages/Erro/Erro'
import Header from './header/header'

function Rotas(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detalhes/:id' element={<Detalhes/>}/>
            <Route path='/favoritos' element={<Favoritos/>}/>

            <Route path='*' element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;