// import './styles/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import AddAcount from "./pages/AddAcount"
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/password/:id' element={<Detail />} />
        <Route path='/addForm' element={<AddAcount />} />
        <Route path="/work" element={<Category category="work" />} />
        <Route path="/family" element={<Category category="family" />} />
        <Route path="/personal" element={<Category category="personal" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App