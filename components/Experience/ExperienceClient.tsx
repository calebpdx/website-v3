"use client";

import { useState } from "react";
import Job from "./Job";
import { tv } from "tailwind-variants";

const exp = tv({
  slots: {
    container:
      "w-full min-h-[600px] text-3xl flex flex-col items-center py-12 xl:px-0 px-8",
    title: "text-4xl w-full text-center font-montserrat font-semibold",
    description: "xl:px-0 px-8 max-w-4xl text-center text-2xl",
    expContainer: "container flex flex-col lg:flex-row max-w-5xl gap-20 mt-12",
    button:
      "inline-flex w-full text-[1rem] font-montserrat font-semibold py-2 px-4 rounded-md lg:rounded-r-none pr-8",
    aside: "lg:border-r min-w-[200px]",
  },
  variants: {
    color: {
      light: {
        container: "text-primary-dark dark:bg-primary-dark bg-primary-light",
        title: "text-primary-dark dark:text-white",
        description: "text-primary-dark/75 dark:text-primary-light/50",
        expContainer: "",
        button: "text-primary-dark dark:text-white",
        aside: "border-primary-dark",
      },
      dark: {
        container: "text-primary-light dark:bg-black bg-primary-dark",
        title: "text-primary-light dark:text-white",
        description: "text-primary-light/50 dark:text-primary-light/60",
        expContainer: "",
        button: "",
        aside: "border-primary-light",
      },
    },
    active: {
      true: "",
      false: "null",
    },
  },

  compoundVariants: [
    {
      color: "light",
      active: true,
      class: {
        button:
          "bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark",
      },
    },
    {
      color: "dark",
      active: true,
      class: {
        button:
          "bg-primary-light dark:bg-primary-dark text-primary-dark dark:text-primary-light",
      },
    },
  ],
});

const Experience = ({ data }: { data: any }) => {
  console.log("EXPERIENCE CLIENT DATA", data);

  const [selectedJob, setSelectedJob] = useState<number>(0);
  const { container, title, description, expContainer, button, aside } = exp({
    color: data.theme,
  });
  return (
    <section id={data.anchor} className={container()}>
      {data.title && <h2 className={title()}>{data.title}</h2>}
      {data.description && <p className={description()}>{data.description}</p>}
      <div className={expContainer()}>
        <aside className={aside()}>
          <ul className="flex flex-col gap-2">
            {data.jobs.map((item: any, index: number) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedJob(index)}
                  className={button({ active: selectedJob === index })}
                >
                  {item.company}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div>
          <Job data={data.jobs[selectedJob]} theme={data.theme} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
