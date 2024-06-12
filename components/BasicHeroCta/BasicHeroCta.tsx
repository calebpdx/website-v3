const BasicHeroCta = ({ data }: { data: any }) => {
  return (
    <section className="container justify-center items-center flex py-40 flex-col">
      <div className="flex flex-col max-w-6xl w-full gap-4">
        {data.header && (
          <h1 className="text-white font-semibold text-3xl max-w-xl">
            {data.header}
          </h1>
        )}
        {data.subHeader && (
          <p className="text-teal-200 max-w-xl text-8xl font-semibold">
            {data.subHeader}
          </p>
        )}
        {data.callToAction && (
          <p className="font-bold mb-8 text-teal-900 bg-teal-300 flex w-fit px-2 py-1 rounded-lg">
            {data.callToAction}
          </p>
        )}
      </div>
    </section>
  );
};

export default BasicHeroCta;
