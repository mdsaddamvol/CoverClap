import Image from "next/image";
import Link from "next/link";
import styles from "./post.module.scss";
const Post = () => {
	return (
		<div className={styles.main}>
			<h1>Where does it come from?</h1>
			<div className={styles.authorInfos}>
				<Image
					src='/profilePic.jpg'
					width='40px'
					height='40px'
					className={styles.profilePic}
				/>
				<div className={styles.authorAndDate}>
					By Loremp Loremio - July 19, 2021{" "}
				</div>
			</div>
			<img
				src='/postCover.png'
				width='auto'
				height='220px'
				className={styles.postCover}
			/>
			<p className={styles.description}>
				et Malorum &quot; (The Extremes of Good and Evil) by Cicero, written in
				45 BC. This book is a treatise on the theory of ethics, very popular
				during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
				dolor sit amet.. &quot;, comes from a line in section 1.10.32.
			</p>
			<Link href='/article'>
				<a>
					<button className={styles.button}>Continue Reading</button>
				</a>
			</Link>
		</div>
	);
};

export default Post;
