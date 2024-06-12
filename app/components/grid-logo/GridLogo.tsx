/* eslint-disable jsx-a11y/no-redundant-roles */
import styles from "./GridLogo.module.css";
import Image from "~/components/image/Image";
import CTA from "~/components/cta/CTA";

interface Props {
	title: string;
	subtitle: string;
	link: {
		label: string;
		url: string;
	}[];
	logos: any[];
}

export const GridLogo = ({ title, subtitle, link, logos }: Props) => {
	return (
		<section className={styles.gridLogo}>
			<h2 className="u-eyebrow">{title}</h2>
			<p className="u-title">{subtitle}</p>
			<ul role="list">
				{logos.map((logo, index) => {
					return (
						<li key={index}>
							<Image image={logo} />
						</li>
					);
				})}
			</ul>
			<footer>
				<CTA label={link[0]?.label} url={link[0]?.url} type="highlight" />
			</footer>
		</section>
	);
};

export default GridLogo;
