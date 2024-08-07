"use client";

import { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../components/Button";

export default function Home() {
  const [emai, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            value={emai}
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
        <Button name="Sing in" onClick={console.log("Aqui")} />
      </Card>
    </div>
  );
}
