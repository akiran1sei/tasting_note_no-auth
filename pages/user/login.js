// pages/user/login.js（ログインページ）
import { Header } from "@/components/Header";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tasting-note-no-auth-iyhc.vercel.app/api/user/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const jsonData = await response.json();
      localStorage.setItem("token", jsonData.token);
      alert(jsonData.message);
      router.push("/beans/selection");
    } catch (error) {
      alert("ログイン失敗");
    }
  };
  return (
    <>
      <Head>
        <title>Tasting Note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* <Login /> */}
        <Header />
        <main className={styles.main}>
          <div className={styles.main_contents}>
            <h1 className={styles.heading_title}>LOGIN</h1>{" "}
            <div className={styles.login_input_box}>
              <form>
                <p className={styles.login_paragraph}>
                  メールアドレス
                  <br />
                  <input
                    className={styles.login_input}
                    value={email}
                    width={300}
                    height={50}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="email"
                    placeholder="メールアドレス"
                    required
                  />
                </p>
                <p className={styles.login_paragraph}>
                  パスワード
                  <br />
                  <input
                    className={styles.login_input}
                    width={300}
                    height={50}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    name="password"
                    placeholder="パスワード"
                    required
                  />
                </p>
                <div className={styles.login_btn_box}>
                  <button className={styles.login_btn} onClick={handleSubmit}>
                    ログイン
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Login;
