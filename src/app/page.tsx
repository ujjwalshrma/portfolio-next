import styles from "./page.module.css";

import Image from "next/image";

// images
import heroLeftImage from "../../assets/hero-left.png";
import heroRightImage from "../../assets/hero-right.png";
import githubIcon from "../../assets/mdi_github.svg";
import linkedinIcon from "../../assets/mdi_linkedin.svg";
import upworkIcon from "../../assets/bxl_upwork.svg";

import Button from "@/components/button/Button";
import Link from "next/link";

const icons = [
  {
    href: "",
    src: githubIcon,
    alt: "github",
  },
  {
    href: "",
    src: linkedinIcon,
    alt: "linkedin",
  },
  {
    href: "",
    src: upworkIcon,
    alt: "upwork",
  },
];

export default function Home() {
  return (
    <section id={styles.hero}>
      <Image
        src={heroLeftImage}
        className={styles.hero__left__img}
        alt="blurry lines image"
      />
      <Image
        src={heroRightImage}
        className={styles.hero__right__img}
        alt="blurry lines image"
      />
      <div className="container">
        <div className={styles.hero__text}>
          <h1 className={styles.heading}>
            Hi, my name is Ujjwal, and I develop creative web experiences for
            brands and businesses across the globe.
          </h1>
          <p className={styles.hero__para}>
            I started my computer science journey back in 2020 and since then I
            am tinkering with web and always learning new technologies that I’ve
            stumbled upon. I currently work as a lead developer at Pallavi
            Nopany Design Studio based in Banglore, India. I’ve worked in a Web3
            Defi company as well which was based in California, USA. And have
            been freelancing since 2020 on Upwork.
          </p>
          <div className={styles.hero__cta}>
            <Button href="mailto:contact@ujjwalsharma.dev">
              contact@ujjwalsharma.dev
            </Button>
            <div className={styles.socials__div}>
              {icons.map((icon) => (
                <Link href={icon.href} target="_blank">
                  <Image className={styles.socials__icon} src={icon.src} alt={icon.alt} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
