import Head from "next/head";
import Image from "next/image";
import logoImg from '../../../public/logo.svg';
import styles from '../../../styles/home.module.scss';

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro agora</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />
        <div className={styles.login}>
            <h1>Criando sua conta</h1>
          <form>

            <Input placeholder="Digite seu nome" type="text" /> 

            <Input placeholder="Digite seu email" type="text" />

            <Input placeholder="Sua senha" type="password" />

            <Button type="submit" loading={false}>
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
