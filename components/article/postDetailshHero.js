import styles from "./postDetailshero.module.scss";
const PostDetailsHero = () => {
	return (
		<section className={styles.main}>
			<h1>Where does it come from?</h1>
			<picture className={styles.heroCover}>
				<source media='(max-width:650px)' srcSet='/articalecoversmall.png' />
				<img src='/articaleCover.png' />
			</picture>
		</section>
	);
};

export default PostDetailsHero;
