import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="moderator" element={<ModeratorPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} /> */}
        </Routes>
    )
}

