import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../src/pages/login"
import Home from "../src/pages/home"
import ProdutoLista from "../src/pages/produtolista"
import TimeInformacao from "../src/pages/timeinformacao"
import ProdutoDetalhe from "../src/pages/produtodetalhe"


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtolista" element={<ProdutoLista />} />
        <Route path="/timeinformacao" element={<TimeInformacao />} />
        <Route path="/produtodetalhe" element={<ProdutoDetalhe />} />

      </Routes>      
    </BrowserRouter>
  )
}

export default App
