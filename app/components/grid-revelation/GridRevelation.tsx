import styles from "./GridRevelation.module.css";

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
	//   <script>
	// 	// Function: Show and hide the description when the respective button is pressed
	// 	const grid = document.querySelector(".grid-revelation .card-grid");
	// 	const cards = grid?.querySelectorAll("button");

	// 	if (grid) {
	// 		cards?.forEach((card) => {
	// 			card.addEventListener("click", () => {
	// 				// Check current state
	// 				const isRevealed = card
	// 					.closest("section")
	// 					?.getAttribute("data-toggled");

	// 				// Toggle state
	// 				if (isRevealed !== null) {
	// 					card.setAttribute("aria-label", "Reveal description.");
	// 					card.setAttribute("aria-expanded", "false");
	// 				} else {
	// 					card.setAttribute("aria-label", "Close description.");
	// 					card.setAttribute("aria-expanded", "true");
	// 				}

	// 				card.closest("section")?.toggleAttribute("data-toggled"); // controls the styles
	// 			});
	// 		});
	// 	}
	// </script>

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
					<section key={`revelation-card-${index}`}>
						<>
							<h3>{card.title}</h3>
							<p id={`reveal-card-${card._key}`}>{card.description}</p>
							<footer>
								<button
									type="button"
									aria-label="Reveal description."
									aria-expanded="false"
									aria-controls={`reveal-card-${card._key}`}>
									<svg width="12" height="12" viewBox="0 0 12 12">
										<path d="M6 0V6V12" strokeWidth="1.52361" />
										<path d="M12 6L-5.96046e-07 6" strokeWidth="1.52361" />
									</svg>{" "}
								</button>
							</footer>
						</>
					</section>
				))}
			</div>
		</section>
	);
};

export default GridRevelation;
