import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.scss";
const Nav = () => {
	return (
		<nav className={styles.main}>
			<div className={styles.mobileMenu}>
				<Image src='/hamburgerIcon.svg' width='24px' height='24px' alt='logo' />
				<Link href='/'>
					<a>
						<div className={styles.logo}>Cover Clap</div>
					</a>
				</Link>
				<div className={styles.signin}>SIGN IN</div>
			</div>
			<div className={styles.menu}>
				<div className={styles.leftSection}>
					<Link href='/'>
						<a>
							<div className={styles.logo}>Cover Clap</div>
						</a>
					</Link>
					<div className={styles.link}>BLOG</div>
				</div>
				<div className={styles.signin}>SIGN IN</div>
			</div>
		</nav>
	);
};

export default Nav;
