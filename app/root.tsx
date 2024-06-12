/* eslint-disable jsx-a11y/no-redundant-roles */
import groq from "groq";
import { loadQuery } from "~/sanity/loader.server";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import type { SanityDocument } from "@sanity/client";

import { Logo } from "~/svg/Logo";
import SearchIcon from "~/svg/MagnifyingGlass";
import Image from "~/components/image/Image";

import reset from "~/styles/reset.css?url";
import theme from "~/styles/theme.css?url";

export const loader = async () => {
	const { data } = await loadQuery<SanityDocument[]>(
		groq`*[_type == "global"]`
	);

	return { data };
};

export function Layout({ children }: { children: React.ReactNode }) {
	const { data } = useLoaderData<typeof loader>();
	const global = data[0];

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<header className="global-header">
					<Logo />
					<a href="/search" aria-label="Search">
						<SearchIcon />
					</a>
					<button id="globalMenuButton" type="button">
						Menu
					</button>

					<dialog id="globalMenuModal">
						<header>
							<Logo fill="var(--c-text-invert)" />
							<form method="dialog">
								<button type="submit">Close</button>
							</form>
						</header>
						<p>For testing purposes only.</p>
						<nav>
							<ul role="list">
								<li>Home</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</nav>
					</dialog>
				</header>
				{children}
				<footer className="global-footer">
					<section>
						<Logo />
						<p>{global.footer_description}</p>
						<ul role="list">
							{global.footer_socials?.map((social: any, index: number) => (
								<li key={`footer-link-${index}`}>
									<a href={social.url}>
										<Image image={social.logo?.[0]} />
									</a>
								</li>
							))}
						</ul>
					</section>
					<form method="POST">
						<label htmlFor="newsletter">{global.footer_newsletter}</label>
						<input
							id="newsletter"
							type="email"
							name="email"
							placeholder="Email address"
							required
						/>
						<button type="submit">Subscribe</button>
					</form>
					<nav aria-label="Footer menu.">
						{global.footer_menus?.map((menu: any, index: number) => {
							return (
								<div key={`footer-menu-${index}`}>
									<h2 className="u-eyebrow">{menu.title}</h2>
									<ul role="list">
										{menu.links.map((link: any, index: number) => (
											<li key={`footer-menu-link-${index}-${link.label}`}>
												<a href={link.url}>{link.label}</a>
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</nav>
					<section>
						<p>{global.footer_copyright}</p>
						<ul role="list">
							{global.footer_terms?.[0]?.links?.map(
								(link: any, index: number) => (
									<li key={`footer-menu-terms-${index}`}>
										<a href={link.url}>{link.label}</a>
									</li>
								)
							)}
						</ul>
					</section>
				</footer>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: reset },
	{ rel: "stylesheet", href: theme },
];
