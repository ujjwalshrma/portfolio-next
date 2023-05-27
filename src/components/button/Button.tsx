import styles from "./Button.module.css";
import Link from "next/link";

function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.button}>
      <Link href={href}>
        <div className={styles.inner__button}>
          <p className={styles.button__text}>{children}</p>
        </div>
      </Link>
    </div>
  );
}

export default Button;
