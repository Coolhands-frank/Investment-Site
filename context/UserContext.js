"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getUser, getUserProfile, getSession } from "../lib/auth"; // Import your Supabase auth functions
import { supabase } from "../lib/supabase";
// Create UserContext
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [error, setError] = useState("")
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)

            // ✅ First, check session
            const session = await getSession();
            if (!session) {
                setLoading(false);
                return;
            }

            try {
                const authUser = await getUser();

                if (authUser.id) {
                    const profile = await getUserProfile(authUser.id); // Fetch user profile
                    setUser(profile); 
                }

                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUser();

        // ✅ Listen for auth state changes
        const { data: authListener } = supabase.auth.onAuthStateChange(async(event, session) => {
            if (session?.user) {
                const profile = await getUserProfile(session.user.id);
                setUser(profile);
            }
        });

        return () => {
            authListener?.subscription?.unsubscribe();
        };

    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, error, loading }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);