"use client";

const Tag = ({
  data,
}: {
  data: {
    name: string;
    icon: string;
  };
}) => {
  return (
    <div className="flex gap-2">
      <span>{data.name}</span>
    </div>
  );
};

export default Tag;
