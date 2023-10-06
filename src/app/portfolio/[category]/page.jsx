import Button from "@/components/UI/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) return data;
  
  return notFound();
};

const PortfolioCategory = ({ params }) => {
  const data = getData(params.category);

  let catTitle =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <main className={styles.container}>
      <h1 className={styles.catTitle}>{catTitle}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              className={styles.img}
              fill={true}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default PortfolioCategory;
