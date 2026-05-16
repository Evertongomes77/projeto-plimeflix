import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home/home'
import Detalhes from './pages/detalhes-filme'
import Erro from './pages/Erro/Erro'
import Header from './components/header'
import Favoritossalvos from './pages/favoritos-salvos'

function Rotas(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detalhes/:type/:id' element={<Detalhes/>}/>
            <Route path='/meusfilmes' element={<Favoritossalvos/>}/>

            <Route path='*' element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;