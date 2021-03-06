import Image from "next/image";
import styles from "./articleBody.module.scss";

const ArticleBody = () => {
	return (
		<article className={styles.main}>
			<div className={styles.authorInfos}>
				<div className={styles.left}>
					<Image
						src='/profilePic.jpg'
						width='40px'
						height='40px'
						className={styles.profilePic}
					/>
					<div className={styles.nameAndDate}>
						By Loremp Loremio <br />
						July 19, 2021
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.socialsIcon}>
						<img src='/fb.svg' alt='social icon' />
					</div>
					<div className={styles.socialsIcon}>
						<img src='/twiiter.svg' alt='social icon' />
					</div>
					<div className={styles.socialsIcon}>
						<img src='/in.svg' alt='social icon' />
					</div>
				</div>
			</div>
			<p>
				Contrary to popular belief, Lorem Ipsum is not simply random text. It
				has roots in a piece of classical Latin literature from 45 BC, making it
				over 2000 years old. Richard McClintock, a Latin professor at
				Hampden-Sydney College in Virginia, looked up one of the more obscure
				Latin words, consectetur, from a Lorem Ipsum passage, and going through
				the cites of the word in classical literature, discovered the
				undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
				of &quot;de Finibus Bonorum et Malorum &quot; (The Extremes of Good and
				Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
				of ethics, very popular during the Renaissance. The first line of Lorem
				Ipsum, &quot;Lorem ipsum dolor sit amet.. &quot;, comes from a line in
				section 1.10.32.
			</p>
			<p>
				The standard chunk of Lorem Ipsum used since the 1500s is reproduced
				below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de
				Finibus Bonorum et Malorum &quot; by Cicero are also reproduced in their
				exact original form, accompanied by English versions from the 1914
				translation by H. Rackham.
			</p>
			<div className={styles.fotter}>
				<div className={styles.socialsIcon}>
					<img src='/fb.svg' alt='social icon' />
				</div>
				<div className={styles.socialsIcon}>
					<img src='/twiiter.svg' alt='social icon' />
				</div>
				<div className={styles.socialsIcon}>
					<img src='/in.svg' alt='social icon' />
				</div>
			</div>
		</article>
	);
};

export default ArticleBody;
