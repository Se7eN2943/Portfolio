import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import ToDoApp from '../pages/ToDoApp/ToDoApp'
import './App.scss'
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ToDoApp" element={<ToDoApp />} />
            {/* <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />  */}
        </Routes>
    )
}

