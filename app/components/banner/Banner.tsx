import styles from "./Banner.module.css";
import CTA from "~/components/cta/CTA";

interface Props {
	title: string;
	copy: string;
	link: {
		url: string;
		label: string;
	}[];
}

export const Banner = ({ title, copy, link }: Props) => {
	return (
		<aside className={styles.banner}>
			<h2 className="u-eyebrow">{title}</h2>
			<p>{copy}</p>
			<CTA url={link[0]?.url} label={link[0]?.label} type="inverted" />
		</aside>
	);
};

export default Banner;
