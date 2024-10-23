"use client";

import React, { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      onClose();
    }
  }, [user, onClose]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  if (!isOpen) return null;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">
          Log in to Summarist
        </h2>
        {error && (
          <p className="text-red-500 text-center mb-4">{error.message}</p>
        )}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-md mb-4 font-semibold flex items-center justify-center"
        >
          <span className="mr-2">{/* Google SVG icon */}</span>
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500">or</div>
        <form onSubmit={handleEmailLogin}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-md mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-md mb-4 font-semibold"
          >
            Login
          </button>
        </form>
        <div className="text-center text-blue-600">
          <a href="#" className="block mb-2 hover:underline">
            Forgot your password?
          </a>
          <a href="#" className="block hover:underline">
            Dont have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
