import { SanityDocument } from "next-sanity";
import Image from "next/image";

const DescriptiveCta = ({ data }: { data: SanityDocument }) => {
  return (
    <>
      <section className="relative w-full h-[1000px] text-white text-3xl flex flex-col items-center">
        <Image
          src="/caleb-beach.jpg"
          fill={true}
          objectFit="cover"
          quality={100}
          className="absolute -z-10 opacity-40"
          alt="Caleb in Kauai"
        />
        <div className="container flex flex-col gap-10 items-start justify-center h-full">
          <p className="max-w-2xl">
            lorem ipsum Commodo nisi consequat aute excepteur irure aute est
            anim sunt aliquip eiusmod consequat aliquip. Ad aute commodo dolor
            ad incididunt duis occaecat cillum irure. Id sint consequat
            exercitation duis et ut. Velit tempor eu duis nulla ut enim sit
            occaecat est. Lorem consectetur minim consectetur ut aute elit.
            Labore do eiusmod mollit ipsum commodo.
          </p>
          <p className="max-w-2xl">
            abore dolor dolor do sit. Ea amet cupidatat excepteur in. Amet
            exercitation occaecat laborum nulla mollit elit. Et esse velit
            aliqua sint laborum mollit cupidatat. Voluptate adipisicing magna
            excepteur voluptate esse nostrud irure est velit in non non. Sit
            sint officia anim irure ipsum ea incididunt nostrud laborum veniam
            elit excepteur. Aliquip tempor veniam ad cillum duis cillum ipsum
            est est est officia mollit.
          </p>
        </div>
      </section>
    </>
  );
};

export default DescriptiveCta;
