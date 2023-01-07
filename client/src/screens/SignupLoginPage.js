import {useState} from 'react';
import { useSignup } from '../hooks/useSignup';
import { useLogin } from '../hooks/useLogin';

function SignupLoginPage() {
    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const {signup, error, isLoading} = useSignup();
    const {login, error1, isLoading1} = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(signupUsername, signupEmail, signupPassword)
    }

    const handleSubmit2 = async(e) => {
        e.preventDefault();
        await login(loginEmail, loginPassword)
    }

    return (
        <div className='signuplogin-background'>
            <h1>Signup</h1>
            <div className='signup-container'>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="username"
                        placeholder='Username'
                        value={signupUsername}
                        required={true}
                        onChange={(e) => setSignupUsername(e.target.value)}
                    />
                    <label htmlFor='username'>Email</label>
                    <input
                        type="email"
                        placeholder='Email'
                        value={signupEmail}
                        required={true}
                        onChange={(e) => setSignupEmail(e.target.value)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        value={signupPassword}
                        required={true}
                        onChange={(e) => setSignupPassword(e.target.value)}
                    />
                    <br/>
                    {error && <div>{error}</div>}
                    <input className='submit-button' type='submit' disabled={isLoading}/>
                </form>
            </div>

            <h1>Login</h1>
            <div className='login-container'>
                <hr/>
                <form onSubmit={handleSubmit2}>
                <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        placeholder='Email'
                        value={loginEmail}
                        required={true}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        value={loginPassword}
                        required={true}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <br/>
                    {error1 && <div>{error1}</div>}
                    <input className='submit-button' type='submit' disabled={isLoading1}/>
                </form>
            </div>
        </div>
    )
}
export default SignupLoginPage;