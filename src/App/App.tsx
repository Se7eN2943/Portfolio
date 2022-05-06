import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import ToDoApp from '../pages/ToDoApp/ToDoApp'
import MovieApp from '../pages/Cinema/MovieApp'
import AviaSalesApp from '../pages/Avia/AviaSales'
import BlogApp from '../pages/Blog/BlogApp'
import './App.scss'
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ToDoApp" element={<ToDoApp />} />
            <Route path="/MovieApp" element={<MovieApp />} />
            <Route path="/AviaSales" element={<AviaSalesApp />} />
            <Route path="/BlogApp/*" element={<BlogApp />} />
        </Routes>
    )
}

