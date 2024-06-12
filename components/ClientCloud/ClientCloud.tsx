const ClientCloud = ({ data }: { data: any }) => {
  return (
    <section className="container justify-center flex">
      <h2 className="text-teal-400 text-xl text-center max-w-xl">
        {data.header}
      </h2>
    </section>
  );
};

export default ClientCloud;
