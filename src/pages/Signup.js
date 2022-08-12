import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import { useAuth } from "../contexts/AuthContext";
import classes from '../styles/Signup.module.css';


function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    let navigate = useNavigate();

    const { signup } = useAuth();

    async function handleSubmit(e) {


        if (password !== confirmPassword) {
            return setError("The confirm password doesn't match with password.");
        }

        try {
            setError("");
            setLoading(true);

            console.log(email, password, name);

            await signup(email, password, name);

            alert('ddddddddddd');

            await navigate('/')

        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Somenthin wrong.");
        }

    }


    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />

                <Form className={`${classes.signup} form`} onSubmit={handleSubmit}>

                    <TextInput required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" icon="person"></TextInput>

                    <TextInput required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" icon="alternate_email"></TextInput>

                    <TextInput required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" icon="lock"></TextInput>

                    <TextInput required type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" icon="lock_clock"></TextInput>

                    <Checkbox required text="I agree to the Terms &amp; Conditions" value={agree} onChange={(e) => setAgree(e.target.value)} />

                    <Button disabled={loading} type="submit">
                        <span>Submit now</span>
                    </Button>

                    {error && <p className="error">{error}</p>}

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>

                </Form>
            </div>
        </>
    );
}

export default Signup;
