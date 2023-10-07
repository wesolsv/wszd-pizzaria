import { FormEvent, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import logoImg from '../../../public/logo.png';
import styles from '../../../styles/home.module.scss';

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from 'react-toastify';
import Link from "next/link";

export default function SignUp() {

  const{signUp} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if(name === '' || email === '' || password === ''){
      toast.error("PREENCHA TODOS OS CAMPOS")
      return;
    }

    setLoading(true);

    let data = {
      name, email, password
    }
    await signUp(data)

    setLoading(false);
  }
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />
        <div className={styles.login}>
            <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>

            <Input 
              placeholder="Digite seu nome" 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            /> 

            <Input 
              placeholder="Digite seu email" 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              placeholder="Sua senha" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>

          </form>
          <Link href={"/"} className={styles.text}>
            Já possui uma conta? Faça Login
          </Link>
        </div>
      </div>
    </>
  )
}
