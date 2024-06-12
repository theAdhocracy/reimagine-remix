import styles from "./CTA.module.css";

interface Props {
	url: string;
	label: string;
	type?: "highlight" | "inverted";
}

export const CTA = ({ url, label, type }: Props) => {
	return (
		<a href={url || "/"} className={styles.cta} data-cta-type={type}>
			{label}
		</a>
	);
};

export default CTA;
