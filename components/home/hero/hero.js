import styles from "./hero.module.scss";
const Hero = () => {
	return (
		<section className={styles.main}>
			<h1>Contrary to popular belief, Lorem </h1>
			<div className={styles.picAndmeta}>
				<img className={styles.profilePic} src='/profilePic.jpg' />
				<div className={styles.meta}>
					Typesetting, remaining essentially unchanged. It was popularised in
					the 1960s with the release of Letraset sheets
				</div>
			</div>
			<form className={styles.newsleterBox}>
				<input type='email' placeholder='Email Address' />
				<button type='submit'>Try it</button>
			</form>
		</section>
	);
};

export default Hero;
