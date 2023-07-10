import Head from "next/head";
import Image from "next/image";
import logoImg from '../../public/logo.svg';
import styles from '../../styles/home.module.scss';
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria Wszd</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />
        <div className={styles.login}>
          <form>

            <Input placeholder="Digite seu email" type="text" />

            <Input placeholder="Sua senha" type="password" />

            <Button type="submit" loading={false}>
              Acessar
            </Button>

          </form>

          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
        </div>
      </div>
    </>
  )
}
