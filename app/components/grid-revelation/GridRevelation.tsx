import styles from "./GridRevelation.module.css";
import CardReveal from "~/components/card-reveal/CardReveal";

interface Props {
	title: string;
	subtitle: string;
	description?: string;
	header_link?: [
		{
			url: string;
			label: string;
		}
	];
	cards: [
		{
			_key: string;
			title: string;
			description: string;
		}
	];
}

export const GridRevelation = ({
	title,
	description,
	subtitle,
	header_link,
	cards,
}: Props) => {
	return (
		<section className={styles.gridRevelation}>
			<header>
				<h2 className="u-eyebrow">{title}</h2>
				<p className="u-title">{subtitle}</p>
				<div>
					{description && <p>{description}</p>}
					{header_link && (
						<a href={header_link?.[0].url}>{header_link?.[0].label}</a>
					)}
				</div>
			</header>
			<div className={styles.cardGrid}>
				{cards.map((card, index) => (
					<CardReveal
						key={`card-${index}`}
						title={card.title}
						desc={card.description}
						uid={card._key}
					/>
				))}
			</div>
		</section>
	);
};

export default GridRevelation;
