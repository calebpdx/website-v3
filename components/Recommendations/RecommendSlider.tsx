"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Recommendation from "./Recommendation";

const RecommendationCarousel = ({
  recommendations,
}: {
  recommendations: any;
}) => {
  return (
    <>
      <Carousel className="w-full max-w-6xl relative">
        <CarouselContent>
          {recommendations.map((_: any, index: number) => (
            <Recommendation
              key={index}
              rec={{
                referrerName: _.referrerName,
                referrerTitle: _.referrerTitle,
                referrerImage: _.referrerImage,
              }}
              content={_.content}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default RecommendationCarousel;
