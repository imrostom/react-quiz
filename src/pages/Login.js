import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import { useAuth } from '../contexts/AuthContext';
import classes from '../styles/Login.module.css';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    let navigate = useNavigate();

    const { login } = useAuth();

    async function handleSubmit(e) {

        try {
            setError("");
            setLoading(true);

            await login(email, password)

            navigate('/')

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("somenthin wrong");
        }

    }

    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />

                <Form className={`${classes.login}`} onSubmit={handleSubmit}>

                    <TextInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" icon="alternate_email"></TextInput>

                    <TextInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" icon="lock"></TextInput>

                    <Button disabled={loading} type="submit">
                        <span>Submit now</span>
                    </Button>

                    {error && <p className="error">{error}</p>}

                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>

                </Form>
            </div>
        </>
    );
}

export default Signup;
