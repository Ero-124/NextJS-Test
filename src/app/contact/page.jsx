import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description: "This is description for contact",
};

const Contacts = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contacts"
            fill={true}
            className={styles.image}
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textArea}
            cols="30"
            rows="10"
          />
          <Button url="#" text="Send"/>
        </form>
      </div>
    </main>
  );
};

export default Contacts;
