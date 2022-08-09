import Button from '../components/Button';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from '../styles/Login.module.css';

function Signup() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />

                <Form className={`${classes.login}`} >

                    <TextInput type="text" placeholder="Enter email" icon="alternate_email"></TextInput>

                    <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>

                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>

                </Form>
            </div>
        </>
    );
}

export default Signup;
