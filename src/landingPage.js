// src/components/AuthForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Helmet } from 'react-helmet';

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/about');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (message && !loading) {
      const timer = setTimeout(() => setMessage(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [message, loading]);

  const handleAuth = async () => {
    setMessage('');
    // Basic validation
    if (!email.trim() || !password.trim()) {
      setMessage('Please fill in both email and password fields.');
      return;
    }
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address (e.g., user@example.com).');
      return;
    }
    if (!agreed) {
      setMessage('Please agree to the Terms and Conditions to continue.');
      return;
    }
    setLoading(true);
    try {
      if (isSignUp) {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        setMessage('Sign up successful!');
        dispatch(setUser({
          uid: userCred.user.uid,
          email: userCred.user.email
        }));
        setEmail('');
        setPassword('');
        console.log('Signed up user:', userCred.user);
      } else {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        setMessage('Sign in successful!');
        dispatch(setUser({
          uid: userCred.user.uid,
          email: userCred.user.email
        }));
        setEmail('');
        setPassword('');
        console.log('Signed in user:', userCred.user);
      }
    } catch (error) {
      if (!isSignUp && error.code === 'auth/user-not-found') {
        setMessage('Sign-in error: No user found with this email.');
      } else if (!isSignUp && error.code === 'auth/wrong-password') {
        setMessage('Sign-in error: Incorrect password.');
      } else if (!isSignUp && error.code === 'auth/invalid-email') {
        setMessage('Sign-in error: Invalid email format.');
      } else {
        setMessage(`Auth error: ${error.message}`);
      }
      console.log('Auth error:', error.message);
    }
    setLoading(false);
  };

  return (
    <div className="bg-[url('/images/green.jpg')] bg-no-repeat bg-cover flex px-2 flex-col items-center justify-center min-h-screen text-center font-sans">


<Helmet>
  <title>Microcode | Home</title>
  <meta name="description" content="Welcome to Microcode, a software company specializing in custom solutions." />
</Helmet>

      <h1 className='md:text-6xl text-4xl mb-4 font-extrabold tracking-wide font-sans flex items-center justify-center'>
        <span className='text-gray-700 mr-1'>Micro</span>
        <span className='text-green-500'>_code</span>
        <span className='text-gray-400 text-xs align-top ml-2'>&copy;</span>
      </h1>
      <p className='md:text-base font-medium text-sm mb-2 bg-gradient-to-r from-green-400 via-green-600 to-green-800 bg-clip-text text-transparent font-sans'>
        Microcode Software is a technology company specializing in custom software development, web and mobile applications, and enterprise solutions. Known for its innovative approach and client-focused services, Microcode delivers high-quality digital products tailored to meet the unique needs of businesses across various industries. With a team of skilled developers and designers, the company aims to empower organizations through scalable, secure, and efficient software solutions.
      </p>
      <p className='mb-2 font-normal font-sans'>
        {isSignUp ? (
          <span className='text-green-500 text-xl font-semibold tracking-wide'>
            <span className='text-gray-400'>Register with Micro</span>_code <span className='text-gray-400 text-xs align-top'>&copy;</span>
          </span>
        ) : (
          <span className='text-green-500 text-xl font-semibold tracking-wide'>
            <span className='text-gray-400'>Log In to Micro</span>_code <span className='text-gray-400 text-xs align-top'>&copy;</span>
          </span>
        )}
      </p>
      <input className='border mb-1 rounded text-center placeholder:text-center' placeholder=" enter your email" value={email} onChange={e => setEmail(e.target.value)} disabled={loading} />
      <input className='border mb-2 rounded text-center placeholder:text-center' placeholder="enter your password" type="password" value={password} onChange={e => setPassword(e.target.value)} disabled={loading} />
      <button className='hover:bg-gray-200 mb-2 text-sm border py-0 px-2 rounded' onClick={handleAuth} disabled={loading}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      <div className='flex items-center mb-2'>
        <input id='terms' type='checkbox' className='form-checkbox h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-0' checked={agreed} onChange={e => setAgreed(e.target.checked)} />
        <label htmlFor='terms' className='ml-2 text-sm text-gray-600'>I agree with <span className='underline text-green-500 cursor-pointer'>Terms and Conditions</span></label>
      </div>
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{" "}
        <span className='cursor-pointer hover:underline text-green-500' onClick={() => setIsSignUp(!isSignUp)} >
          Click here
        </span>
      </p>
      <div  style={{ minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1em' }}>
        {loading ? (
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="#44cb38" strokeWidth="0.5" stroke="#44cb38"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="#44cb38" strokeWidth="0.5" stroke="#44cb38"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="#44cb38" strokeWidth="0.5" stroke="#44cb38"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>
          </span>
        ) : (
          message && (
            <div className={`text-sm mb-2 ${message.includes('error') || message.includes('Please') ? 'text-red-500' : 'text-green-500'}`}>{message}</div>
          )
        )}
      </div>
    </div>
  );
}

export default LandingPage;
