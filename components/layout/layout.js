import Nav from "../nav/nav";
import styles from "./layout.module.scss";
const Layout = ({ children }) => {
	return (
		<div className={styles.main}>
			<Nav />
			{children}
		</div>
	);
};

export default Layout;
