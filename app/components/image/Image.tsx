import imageUrlBuilder from "@sanity/image-url";
import { client } from "~/sanity/client";
import type { SanityImageObjectStub } from "@sanity/asset-utils";

interface Props {
	image: {
		image: SanityImageObjectStub;
		alt: string;
	};
	width?: number;
}

export const Image = ({ image, width = 960 }: Props) => {
	const sanityUrl = imageUrlBuilder(client)
		.image(image.image)
		.width(width)
		.fit("max")
		.auto("format")
		.url();

	return <img src={sanityUrl || ""} alt={image.alt || ""} />;
};

export default Image;
