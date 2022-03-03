import styles from "../styles/Home.module.scss";
import Layout from "../components/layout/layout";
import Hero from "../components/home/hero/hero";
import Post from "../components/post/post";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<section className={styles.posts}>
				<Post />
				<Post />
			</section>
		</Layout>
	);
}
