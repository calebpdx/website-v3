"use client";

const Tag = ({ data }: { data: any }) => {
  return (
    <div className="flex gap-x-2 items-center bg-primary-light/20 px-3 py-2 rounded-md">
      <span className="dark:text-primary-light w-6 h-6 text-white">
        {data.icon}
      </span>
      <span className="text-sm dark:text-primary-light text-primary-light">
        {data.name}
      </span>
    </div>
  );
};

export default Tag;
