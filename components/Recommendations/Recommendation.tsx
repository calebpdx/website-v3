import { PortableText, PortableTextBlock } from "next-sanity";
import { CarouselItem } from "../ui/carousel";
import React from "react";
import { getImageUrl } from "@/lib/utils";
import Image from "next/image";

type RecommendationProps = {
  rec: {
    referrerName: string;
    referrerTitle: string;
    referrerImage: {
      _ref: string;
      _type: string;
    };
  };
  content: PortableTextBlock[];
};

const Recommendation = async ({ rec, content }: RecommendationProps) => {
  const imageUrl = rec.referrerImage
    ? await getImageUrl(rec.referrerImage)
    : null;

  return (
    <CarouselItem className="flex flex-col items-center justify-center group transition duration-500 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 20 16.58"
        className="absolute opacity-10 right-0 top-0 w-48 h-48 fill-primary-dark dark:fill-primary-light"
      >
        <path
          d="M3.749.035C2.551.171 1.461.803.795 1.746-.269 3.253-.254 5.619.83 7.057c.366.486.814.852 1.401 1.146.257.129.272.142.253.227-.011.049-.489 1.897-1.063 4.105L.377 16.55l2.15.009a82.66 82.66 0 0 0 2.166-.007c.008-.009.664-1.783 1.458-3.942.793-2.16 1.556-4.229 1.694-4.598.419-1.117.655-1.951.758-2.679.062-.437.054-1.389-.014-1.766-.171-.943-.553-1.699-1.172-2.321A4.177 4.177 0 0 0 5.198.084 6.469 6.469 0 0 0 3.749.035M14.95.053a4.277 4.277 0 0 0-1.757.665c-1.276.836-1.963 2.365-1.828 4.065.088 1.094.475 1.992 1.153 2.673.295.295.735.603 1.089.761.124.055.225.121.225.146.001.026-.471 1.864-1.049 4.086a472.353 472.353 0 0 0-1.05 4.078c0 .031.499.038 2.155.032l2.155-.009 1.406-3.833a706.2 706.2 0 0 1 1.625-4.4c.62-1.612.866-2.575.914-3.576.094-1.982-.779-3.56-2.394-4.323-.769-.364-1.764-.501-2.644-.365"
          fillRule="evenodd"
        />
      </svg>
      <div className="p-1 mx-10 text-primary-dark dark:text-primary-light text-4xl flex flex-col py-8">
        <PortableText value={content} />
        <div className="flex mt-8 gap-4 items-center">
          {imageUrl && imageUrl.url && (
            <Image
              src={imageUrl.url}
              alt={imageUrl.alt}
              width={75}
              height={75}
              className="rounded-full grayscale group-hover:grayscale-0"
            />
          )}
          <p className="flex flex-col">
            <span className="text-2xl font-bold">{rec.referrerName}</span>
            <span className="text-xl">{rec.referrerTitle}</span>
          </p>
        </div>
      </div>
    </CarouselItem>
  );
};

export default Recommendation;
