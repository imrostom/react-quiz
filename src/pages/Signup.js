import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from '../styles/Signup.module.css';

function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />

                <Form className={`${classes.signup} form`} >

                    <TextInput type="text" placeholder="Enter name" icon="person"></TextInput>

                    <TextInput type="text" placeholder="Enter email" icon="alternate_email"></TextInput>

                    <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>

                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock"></TextInput>

                    <Checkbox text="I agree to the Terms &amp; Conditions" />

                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>

                </Form>
            </div>
        </>
    );
}

export default Signup;
