import { client } from "@/sanity/lib/client";
import { RECOMMENDATIONS_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import RecommendationCarousel from "./RecommendSlider";

const Recommendations = async ({ data }: { data: SanityDocument }) => {
  const recommendations = data.content.length
    ? await client.fetch(RECOMMENDATIONS_QUERY, { id: data._id })
    : [];

  return (
    <section className="w-full flex flex-col items-center py-20 bg-primary-light dark:bg-primary-dark">
      <div className="container flex flex-col items-center">
        <RecommendationCarousel recommendations={recommendations.content} />
      </div>
    </section>
  );
};

export default Recommendations;
