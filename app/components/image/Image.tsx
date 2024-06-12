import imageUrlBuilder from "@sanity/image-url";
import { client } from "~/sanity/client";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

interface Props {
	image: any;
	width?: number;
}

export const Image = ({ image, width = 960 }: Props) => {
	let sanityImage: ImageUrlBuilder | undefined;
	const builder = imageUrlBuilder(client);

	try {
		sanityImage = builder
			.image(image.image)
			.width(width)
			.fit("max")
			.auto("format");
	} catch (error) {
		console.error(error);
	}

	if (!sanityImage) return;

	return <img src={sanityImage.url()} alt={image.alt || ""} />;
};

export default Image;
