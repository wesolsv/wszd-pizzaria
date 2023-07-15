import { useContext, FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import logoImg from '../../public/logo.svg';
import styles from '../../styles/home.module.scss';
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from 'react-toastify';

export default function Home() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    if(email === '' || password === ''){
      toast.warning('Os campos de e-mail ou senha não podem ficar em branco')
      return;
    }
    setLoading(true);

    let data = {
      email, password
    }

    await signIn(data);

    setLoading(false);
  }
  return (
    <>
      <Head>
        <title>Pizzaria Wszd</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />
        <div className={styles.login}>
          <form onSubmit={handleLogin}>

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
              Acessar
            </Button>

          </form>
          <Link href={"/signup"} className={styles.text}>
            Não possui uma conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  )
}