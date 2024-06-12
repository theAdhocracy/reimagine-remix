import Image from "~/components/image/Image";
import styles from "./CardPage.module.css";

interface Props {
	title: string;
	desc: string;
	category: string;
	url: string;
	thumb?: any;
}

export const CardPage = ({ title, desc, category, url, thumb }: Props) => {
	return (
		<article className={styles.cardPage}>
			{thumb && <Image image={thumb} />}
			<p className="u-eyebrow">{category}</p>
			<h2>{title}</h2>
			<p>{desc}</p>
			<a href={url}>View case study</a>
		</article>
	);
};

export default CardPage;
