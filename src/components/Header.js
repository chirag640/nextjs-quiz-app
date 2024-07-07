import React from 'react'
import Link from "next/link";
import UserProfile from "../components/UserProfile";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
    
    const { user } = useUser();
  return (
    <header className="w-full h-32 px-20 py-3 flex justify-between items-center bg-white shadow-md">
    <div className="text-3xl font-bold text-yellow-400">Quiz App</div>
    {user ? (
      <div className="flex items-center">
        <UserProfile/>
        <Link href="/api/auth/logout" className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 ml-4">
          Logout
        </Link>
      </div>
    ) : (
      <Link
        href="/api/auth/login"
        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400"
      >
        Login
      </Link>
    )}
  </header>
  )
}

export default Header