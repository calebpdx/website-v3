import {
  Navigation as NavigationType,
  LinkType,
} from "@/sanity/types/navigation";

const MainNavigation = ({ data }: { data: NavigationType }) => {
  console.log("Navigation data", data);
  return (
    <header className="container mx-auto py-4 flex justify-between dark:text-neutral-200">
      <h2 className="text-4xl font-bold uppercase">Caleb.</h2>
      {<nav>links</nav>}
    </header>
  );
};

export default MainNavigation;
