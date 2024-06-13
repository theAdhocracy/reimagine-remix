import React from "react";
import styles from "./CardReveal.module.css";

interface Props {
	title: string;
	uid: string;
	desc: string;
}

export const CardReveal = ({ title, uid, desc }: Props) => {
	const [toggled, setToggled] = React.useState(false);

	return (
		<section className={styles.cardReveal} data-toggled={toggled}>
			<h3>{title}</h3>
			<p id={`reveal-card-${uid}`}>{desc}</p>
			<footer>
				<button
					type="button"
					aria-label={toggled ? "Hide description." : "Reveal description."}
					aria-expanded={toggled ? "true" : "false"}
					aria-controls={`reveal-card-${uid}`}
					onClick={() => {
						setToggled(!toggled);
					}}>
					<svg width="12" height="12" viewBox="0 0 12 12">
						<path d="M6 0V6V12" strokeWidth="1.52361" />
						<path d="M12 6L-5.96046e-07 6" strokeWidth="1.52361" />
					</svg>{" "}
				</button>
			</footer>
		</section>
	);
};

export default CardReveal;
