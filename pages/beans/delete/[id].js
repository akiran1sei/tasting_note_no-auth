import Head from "next/head";
import { Header } from "@/components/Header";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
// import useAuth from "@/utils/useAuth";
const DeleteItem = (props) => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://tasting-note.vercel.app/api/beans/delete/${props.singleItem._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const jsonData = await response.json();
      alert(jsonData.message);
      router.push("/beans/selection");
    } catch (err) {
      alert("アイテム削除失敗");
    }
  };

  // const loginUser = useAuth();

  // if (loginUser === props.singleItem.email) {
  return (
    <>
      <Head>
        <title>個別ページ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <p>{props.singleItem._id}</p> */}
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.delete_page}>
            <h1 className={styles.heading_title}>DELETE</h1>
            <div className={styles.browse}>
              <div className={styles.delete_data}>
                <div className={styles.delete_main}>
                  <div className={styles.delete_list}>
                    <p className={styles.delete_date}>
                      {props.singleItem.date}
                    </p>
                    <div
                      className={`${styles.delete_item} ${styles.delete_username}`}
                    >
                      <h3 className={styles.delete_item_title}>作成者</h3>
                      <p>{props.singleItem.username}</p>
                    </div>
                    <div
                      className={`${styles.delete_item} ${styles.delete_coffee}`}
                    >
                      <h3 className={styles.delete_item_title}>
                        1：珈琲豆 or 番号
                      </h3>
                      <p>{props.singleItem.coffee}</p>
                    </div>
                    <div
                      className={`${styles.delete_item} ${styles.delete_roast}`}
                    >
                      <h3 className={styles.delete_item_title}>2：ロースト</h3>
                      <p>{props.singleItem.roast}%</p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.roastMessage}</p>
                    </div>

                    <div
                      className={`${styles.delete_item} ${styles.delete_aroma}`}
                    >
                      <h3 className={styles.delete_item_title}>3：アロマ </h3>
                      <div className={styles.delete_item_value}>
                        <p className={styles.delete_item_text}>単位(点)</p>
                        <table className={styles.delete_item_aroma_table}>
                          <thead>
                            <tr>
                              <th></th>
                              <th className={styles.delete_item_aroma_header}>
                                強さ
                              </th>
                              <th className={styles.delete_item_aroma_header}>
                                ／質
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className={styles.delete_item_aroma_table_row}>
                              <th className={styles.delete_item_aroma_header}>
                                D
                              </th>
                              <td>{props.singleItem.aromaDryStrength}</td>
                              <td>{props.singleItem.aromaDryQuality}</td>
                            </tr>
                            <tr className={styles.delete_item_aroma_table_row}>
                              <th className={styles.delete_item_aroma_header}>
                                C
                              </th>
                              <td>{props.singleItem.aromaCrustStrength}</td>
                              <td>{props.singleItem.aromaCrustQuality}</td>
                            </tr>
                            <tr className={styles.delete_item_aroma_table_row}>
                              <th className={styles.delete_item_aroma_header}>
                                B
                              </th>
                              <td>{props.singleItem.aromaBreakStrength}</td>
                              <td>{props.singleItem.aromaBreakQuality}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className={styles.delete_item_message_box}>
                        <h4 className={styles.delete_item_memo}>
                          <span className={styles.delete_yellow_color}>
                            memo
                          </span>
                        </h4>
                        <br />
                        <p>{props.singleItem.aromaMessage}</p>
                      </div>
                    </div>
                    <div
                      className={`${styles.delete_item} ${styles.delete_defects}`}
                    >
                      <h3 className={styles.delete_item_title}>
                        4：欠点・瑕疵
                      </h3>
                      <p>
                        {props.singleItem.defects}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.defectsMessage}</p>
                    </div>
                    <div
                      className={`${styles.delete_item} ${styles.delete_cleancap}`}
                    >
                      <h3 className={styles.delete_item_title}>
                        5：カップの綺麗さ
                      </h3>
                      <p>
                        {props.singleItem.cleancap}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.cleancapMessage}</p>
                    </div>

                    <div
                      className={`${styles.delete_item} ${styles.delete_sweet}`}
                    >
                      <h3 className={styles.delete_item_title}>6：甘さ</h3>
                      <p>
                        {props.singleItem.sweet}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.sweetMessage}</p>
                    </div>

                    <div
                      className={`${styles.delete_item} ${styles.delete_acidity}`}
                    >
                      <h3 className={styles.delete_item_title}>7：酸の質</h3>
                      <p>
                        {props.singleItem.acidity}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.acidityMessage}</p>
                      <p>{props.singleItem.acidityStrength}</p>
                    </div>

                    <div
                      className={`${styles.delete_item} ${styles.delete_mouthfeel}`}
                    >
                      <h3 className={styles.delete_item_title}>
                        8：口に含んだ質感
                      </h3>
                      <p>
                        {props.singleItem.mouthfeel}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.mouthfeelMessage}</p>
                      <p>{props.singleItem.bodyStrength}</p>
                    </div>
                    <div
                      className={`${styles.delete_item} ${styles.delete_flavor}`}
                    >
                      <h3 className={styles.delete_item_title}>
                        9：フレーバー
                      </h3>
                      <p>
                        {props.singleItem.flavor}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.flavorMessage}</p>
                    </div>

                    <div
                      className={`${styles.delete_item} ${styles.delete_after}`}
                    >
                      <h3 className={styles.delete_item_title}>
                        10：後味の印象度
                      </h3>
                      <p>
                        {props.singleItem.after}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.afterMessage}</p>
                    </div>
                    <div
                      className={`${styles.delete_item} ${styles.delete_balance}`}
                    >
                      <h3 className={styles.delete_item_title}>11：バランス</h3>
                      <p>
                        {props.singleItem.balance}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                      <h4 className={styles.delete_item_memo}>
                        <span className={styles.delete_yellow_color}>memo</span>
                      </h4>
                      <p>{props.singleItem.balanceMessage}</p>
                    </div>

                    <div
                      className={`${styles.delete_item} ${styles.delete_overall}`}
                    >
                      <h3 className={styles.delete_item_title}>12：総合評価</h3>
                      <p>
                        {props.singleItem.overall}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                    </div>
                    <div
                      className={`${styles.delete_item} ${styles.delete_total}`}
                    >
                      <h3 className={styles.delete_item_title}>
                        13：TOTAL（+36）
                      </h3>
                      <p>
                        {props.singleItem.result}
                        <span className={styles.delete_yellow_color}>点</span>
                        <span>（＋３６）</span>
                      </p>
                      <p>
                        {props.singleItem.total}
                        <span className={styles.delete_yellow_color}>点</span>
                      </p>
                    </div>

                    <div
                      className={`${styles.delete_item} ${styles.delete_impression}`}
                    >
                      <h3 className={styles.delete_item_title}>14：味の印象</h3>
                      <p>{props.singleItem.impression}</p>
                    </div>
                  </div>
                  <div className={styles.delete_popup}>
                    <div className={styles.delete_box}>
                      <p className={styles.page_title}>削除しますか？</p>
                      <form onSubmit={handleSubmit}>
                        <button>削除する</button>
                      </form>
                      <button>
                        <Link href={"/beans/selection"} passHref>
                          キャンセル
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
  // } else {
  //   return <h1>権限がありません</h1>;
  // }
};

export default DeleteItem;

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://tasting-note.vercel.app/api/beans/${context.query.id}`
  );
  const singleItem = await response.json();

  return {
    props: singleItem,
  };
};