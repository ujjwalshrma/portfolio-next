import styles from "./Button.module.css";
import Link from "next/link";

function Button({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={styles.button}>
      <Link className={className} href={href}>
        <div className={styles.inner__button}>
          <p className={styles.button__text}>{children}</p>
        </div>
      </Link>
    </div>
  );
}

export default Button;
