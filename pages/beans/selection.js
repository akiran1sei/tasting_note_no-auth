import Head from "next/head";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";
// import useAuth from "@/utils/useAuth";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

const SelectionTop = (props) => {
  console.log(props);
  const ReadAll = props.allItems.map((beans) => (
    <div className={styles.select_list} key={beans._id}>
      <div className={styles.select_btn_box}>
        <button className={styles.delete_btn}>
          <Link href={`delete/${beans._id}`} passHref>
            <Image
              src="../images/delete_FILL0_wght400_GRAD0_opsz48.svg"
              alt="削除ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
        <button className={styles.select_btn}>
          <Link href={`update/${beans._id}`} passHref>
            <Image
              src="../images/edit_FILL0_wght400_GRAD0_opsz48.svg"
              alt="編集ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
        <button className={styles.select_btn}>
          <Link href={`${beans._id}`} passHref>
            <Image
              src="../images/visibility_FILL0_wght400_GRAD0_opsz48.svg"
              alt="閲覧ボタン"
              width={48}
              height={48}
              priority
            />
          </Link>
        </button>
      </div>
      <div className={`${styles.select_item} ${styles.select_date}`}>
        <h3 className={styles.select_item_title}>
          作成日
          {/* DATE */}
        </h3>
        <div className={styles.select_item_value}>
          {/* {beans.date} */}
          {beans.date}
        </div>
      </div>
      <div className={`${styles.select_item} ${styles.select_username}`}>
        <h3 className={styles.select_item_title}>
          作成者
          {/* USERNAME */}
        </h3>
        <div className={styles.select_item_value}>{beans.username}</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_coffee}`}>
        <h3 className={styles.select_item_title}>
          珈琲豆の名 or 番号
          {/* NAME or NUMBER */}
        </h3>
        <div className={styles.select_item_value}>{beans.coffee}</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_roast}`}>
        <h3 className={styles.select_item_title}>
          ロースト
          {/* ROAST */}
        </h3>
        <div className={styles.select_item_value}>{beans.roast}％</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_aroma}`}>
        <h3 className={styles.select_item_title}>
          アロマ
          {/* AROMA */}
        </h3>
        <div className={styles.select_item_value}>
          <p className={styles.select_item_text}>単位(点)</p>
          <table className={styles.select_item_aroma_table}>
            <thead>
              <tr>
                <th></th>
                <th className={styles.select_item_aroma_header}>強さ</th>
                <th className={styles.select_item_aroma_header}>／質</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.select_item_aroma_table_row}>
                <th className={styles.select_item_aroma_header}>D</th>
                <td>{beans.aromaDryStrength}</td>
                <td>{beans.aromaDryQuality}</td>
              </tr>
              <tr className={styles.select_item_aroma_table_row}>
                <th className={styles.select_item_aroma_header}>C</th>
                <td>{beans.aromaCrustStrength}</td>
                <td>{beans.aromaCrustQuality}</td>
              </tr>
              <tr className={styles.select_item_aroma_table_row}>
                <th className={styles.select_item_aroma_header}>B</th>
                <td>{beans.aromaBreakStrength}</td>
                <td>{beans.aromaBreakQuality}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={`${styles.select_item} ${styles.select_defects}`}>
        <h3 className={styles.select_item_title}>
          欠点・瑕疵
          {/* DEFECTS */}
        </h3>
        <div className={styles.select_item_value}>{beans.defects}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_cleancap}`}>
        <h3 className={styles.select_item_title}>
          カップの綺麗さ
          {/* CLEAN CAP */}
        </h3>
        <div className={styles.select_item_value}>{beans.cleancap}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_sweet}`}>
        <h3 className={styles.select_item_title}>
          甘さ
          {/* SWEET */}
        </h3>
        <div className={styles.select_item_value}>{beans.sweet}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_acidity}`}>
        <h3 className={styles.select_item_title}>
          酸の質
          {/* ACIDITY */}
        </h3>
        <div className={styles.select_item_value}>{beans.acidity}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_mouthfeel}`}>
        <h3 className={styles.select_item_title}>
          口に含んだ質感
          {/* MOUTHFEEL */}
        </h3>
        <div className={styles.select_item_value}>{beans.mouthfeel}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_flavor}`}>
        <h3 className={styles.select_item_title}>
          フレーバー
          {/* FLAVOR */}
        </h3>
        <div className={styles.select_item_value}>{beans.flavor}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_after}`}>
        <h3 className={styles.select_item_title}>
          後味の印象度
          {/* AFTER */}
        </h3>
        <div className={styles.select_item_value}>{beans.after}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_balance}`}>
        <h3 className={styles.select_item_title}>
          バランス
          {/* BALANCE */}
        </h3>
        <div className={styles.select_item_value}>{beans.balance}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_overall}`}>
        <h3 className={styles.select_item_title}>
          総合評価
          {/* OVER ALL */}
        </h3>
        <div className={styles.select_item_value}>{beans.overall}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_result}`}>
        <h3 className={styles.select_item_title}>RESULT</h3>
        <div className={styles.select_item_value}>{beans.result}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_total}`}>
        <h3 className={styles.select_item_title}>
          TOTAL
          <br />
          （＋３６）
        </h3>
        <div className={styles.select_item_value}>{beans.total}点</div>
      </div>
      <div className={`${styles.select_item} ${styles.select_impression}`}>
        <h3 className={styles.select_item_title}>
          味の印象
          {/* IMPRESSION */}
        </h3>
        <div className={styles.select_item_value}>{beans.impression}</div>
      </div>
    </div>
  ));

  // const loginUser = useAuth();
  // console.log(loginUser);
  // if (loginUser) {
  return (
    <>
      <Head>
        <title>Tasting Note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />

        <main className={styles.main}>
          <div className={styles.main_contents}>
            <div className={styles.select}>
              <h1 className={styles.heading_title}>SELECT</h1>

              {ReadAll}
            </div>
          </div>
        </main>
      </div>
    </>
  );
  // }
  // return (
  //   <>
  //     <Head>
  //       <title>Tasting Note</title>
  //       <meta name="description" content="Generated by create next app" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

  //     <div className={styles.container}>
  //       <Header />

  //       <main className={styles.main}>
  //         <div className={styles.main_contents}>
  //           <div className={styles.select}>
  //             <h1 className={styles.heading_title}>SELECT</h1>
  //             {}
  //           </div>
  //         </div>
  //       </main>
  //     </div>
  //   </>
  // );
};
export default SelectionTop;
export const getServerSideProps = async () => {
  const response = await fetch(
    "https://tasting-note-no-auth.vercel.app/api/beans/readall"
  );
  const allItems = await response.json();

  return {
    props: allItems,
  };
};
