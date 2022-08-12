import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateOutlet from './components/PrivateOutlet';
import PublicOutlet from './components/PublicOutlet';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Signup from './pages/Signup';
import './styles/App.css';



function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />

                        <Route path="/*" element={<PublicOutlet />}>
                            <Route path='signup' element={<Signup />} />
                            <Route path='login' element={<Login />} />
                        </Route>

                        {/* <Route path='/signup' element={<Signup />} /> */}
                        {/* <Route path='/login' element={<Login />} /> */}

                        <Route path="/*" element={<PrivateOutlet />}>
                            <Route path='quiz' element={<Quiz />} />
                            <Route path='result' element={<Result />} />
                        </Route>
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
