import React from "react";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const LogoutButton: React.FC = () => {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  if (!user) return null;

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
