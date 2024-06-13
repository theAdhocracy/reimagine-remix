import groq from "groq";
import { useLoaderData } from "@remix-run/react";
import { loadQuery } from "~/sanity/loader.server";

import type { MetaFunction } from "@remix-run/node";
import type { SanityDocument } from "@sanity/client";

import HeroArrow from "~/svg/RightDownArrow";
import CTA from "~/components/cta/CTA";
import PageCard from "~/components/card-page/CardPage";
import Banner from "~/components/banner/Banner";
import GridLogo from "~/components/grid-logo/GridLogo";
import GridRevelation from "~/components/grid-revelation/GridRevelation";

export const meta: MetaFunction = () => {
	return [
		{ title: "Appnovation" },
		{ name: "description", content: "Welcome to Appnovation!" },
	];
};

export const loader = async () => {
	const { data } = await loadQuery<SanityDocument[]>(
		groq`*[_type == "homepage"]`
	);

	return { data };
};

export default function Index() {
	const { data } = useLoaderData<typeof loader>();
	const homepage = data[0];

	return (
		<main>
			<section className="hero">
				<HeroArrow />
				<h1 className="u-eyebrow">
					{homepage.title}
					<br />
					{homepage.subtitle}
				</h1>
				<p>{homepage.copy}</p>
				<div>
					{homepage.links.map((link: any, index: number) => (
						<CTA
							key={link.label}
							url={link.url}
							label={link.label}
							type={index === 1 ? "highlight" : undefined}
						/>
					))}
				</div>
			</section>
			<section className="highlight-grid">
				{homepage.highlights.map((highlight: any) => (
					<PageCard
						{...highlight}
						desc={highlight.description}
						url={`/${highlight.slug.current}`}
						thumb={highlight.thumbnail?.[0]}
						key={highlight.description}
					/>
				))}
			</section>
			{homepage.content?.map((block: any, index: number) => {
				switch (block._type) {
					case "revelation_grid":
						return (
							<GridRevelation
								{...block}
								key={`block-grid-revelation-${index}`}
							/>
						);
					case "logo_grid":
						return <GridLogo {...block} key={`block-grid-logo-${index}`} />;
					case "banner":
						return <Banner {...block} key={`block-banner-${index}`} />;
					default:
						return <p>Unknown Component</p>;
				}
			})}
		</main>
	);
}
