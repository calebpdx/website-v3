import { SanityDocument } from "next-sanity";

const ChangeLog = async ({ data }: { data: SanityDocument }) => {
  const websiteRepo = await fetch(
    "https://api.github.com/repos/calebpdx/website-v3",
  );
  const ghRes = await websiteRepo.json();

  if (!ghRes) {
    return "Error fetching GitHub data";
  }

  const releases = await fetch(
    "https://api.github.com/repos/calebpdx/website-v3/releases",
  );
  const releasesRes = await releases.json();

  if (!data.includeComponent) {
    return null;
  }

  return (
    <div className="bg-primary-light dark:bg-primary-dark flex flex-col w-full h-full flex-1">
      <h1>Change Log</h1>
      <p>Change log goes here</p>
    </div>
  );
};
export default ChangeLog;
