import { Routes, Route, Navigate } from 'react-router-dom';

import { SignIn } from '../pages/Signin';
import { SignUp } from '../pages/Signup';

//Rotas acessíveis antes de fazer o login
export function AuthRoutes(){
    const user = localStorage.getItem("@rocketnotes:user")
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />

            { !user&& <Route path='*' element={<Navigate to="/" />} />}
        </Routes>
    )
}