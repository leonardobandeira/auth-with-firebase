"use client";

import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../libs/firebase/config.js";
import { useRouter } from "next/navigation";

import Input from "../../components/Input";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Button from "../../components/Button";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});

        sessionStorage.setItem('user', true)
        setEmail('');
        setPassword('');
        router.push('/')
    }catch(e){
        console.error(e)
    }
  };

  return (
    <div
      className="min-h-screen 
    flex flex-col items-center justify-center
    bg-gradient-to-r from-[#5d648f] via-[#9075c2] to-[#c46ad4]"
    >
      <Card>
        <Title title="Sing in" />
        <div className="flex flex-col gap-2">
          <Input
            name="E-mail"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={"exemple@email.com"}
          />
          <Input
            name="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button name="Sing in" onClick={handleSignIn} />
      </Card>
    </div>
  );
}
