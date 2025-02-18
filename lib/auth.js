import { supabase } from "./supabase";

//const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:3000";

// Sign Up Function
export async function signUp({name, email, password}) {
  const { data, error } = await supabase.auth.signUp({ 
    email, 
    password,
    options: {
        data: { name },
        emailRedirectTo: `https://coolhands-investmentsite.onrender.com/signup`,
       // emailRedirectTo: `http://localhost:3000/signup`,
       // emailRedirectTo: `${window.location.origin}/signin`, // Redirects back to signin page
    },
  });
  if (error) throw error;

  // Step 2: If signup is successful, store user details in the "users" table
  if (data.user) {
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: data.user.id,
        name,
        email,
      },
    ]);

    if (insertError) throw new Error(insertError.message);
  }

  return data;
}

// Sign In Function
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

// getUser Function 
export const getUser = async () => {
   // const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
   // if (sessionError || !sessionData.session) {
   //     console.error("Session error:", sessionError);
  //      return null;
  //  }
  //  await supabase.auth.refreshSession(); // ✅ Force refresh session
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
}

// getUserProfile from supaBase database Function 
export const getUserProfile = async (userId) => {
    const { data, error } = await supabase
      .from("users") // ✅ Replace "users" with your actual table name
      .select("*") // Select all columns
      .eq("id", userId) // Filter by user ID
      .single(); // Return a single record
  
    if (error) throw error;
  
    return data;
  };

// Sign Out Function
export const signOut = async () => {
  await supabase.auth.signOut();
  localStorage.removeItem("supabase.auth.token"); // ✅ Clear cached session
}

// Session Function
export const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    return data.session; 
  };