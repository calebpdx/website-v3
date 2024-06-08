import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getImageUrl(image: { _ref: string }) {
  const imageContent =
    image && image._ref
      ? await client.fetch(
          `*[_type == "imageWrapper" && _id == "${image._ref}"]{image, alt}[0]`,
        )
      : null;

  const imageUrl =
    imageContent && imageContent.image
      ? urlForImage(imageContent.image.asset._ref)
      : null;

  return { url: imageUrl ? imageUrl : null, alt: imageContent.alt };
}
