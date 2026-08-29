import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function LoginHandler() {
  const { user } = useUser();

  const saveUserToDB = async () => {
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        resume: "", // optional
        image: user.imageUrl
      })
    });
  };

  useEffect(() => {
    if (user) {
      saveUserToDB();
    }
  }, [user]);

  return null; // no UI, just runs in background
}

export default LoginHandler;
