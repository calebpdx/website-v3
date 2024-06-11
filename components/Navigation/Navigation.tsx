import { client } from "@/sanity/lib/client";
import { NAVIGATION_QUERY } from "@/sanity/lib/queries";
import {
  Navigation as NavigationType,
  LinkType,
} from "@/sanity/types/navigation";
import { SanityDocument, SanityReference } from "next-sanity";
import NavigationHeader from "./NavigationHeader";

// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
// import { Navigation as NavigationType, LinkType } from "@/lib/types/navigation";
// import { usePathname } from "next/navigation";
// import React from "react";

// const NavigationLink = ({ navLink }: { navLink: LinkType }) => {
//   const linkHref = navLink.slug.current === "home" ? "/" : `/${navLink.slug.current}`;
//   const isActive = usePathname() === linkHref;

//     return (
//         <NavbarItem>
//           <Link color="foreground" href={linkHref} aria-current={isActive ? "page" : undefined}>
//             {navLink.title}
//           </Link>
//         </NavbarItem>
//     );
// };

// const NavigationMenuLink = ({ navLink, index, navLength }: { navLink: LinkType, index: number, navLength: number }) => {
//   return (
//     <NavbarMenuItem key={`${navLink.title}-${index}`}>
//             <Link
//               color={
//                 index === 2 ? "primary" : index === navLength - 1 ? "danger" : "foreground"
//               }
//               className="w-full"
//               href="#"
//               size="lg"
//             >
//               {navLink.title}
//             </Link>
//     </NavbarMenuItem>
//   )
// };

// const Navigation = ({ data }: { data: NavigationType }) => {
//  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   return (

//     <Navbar
//       isBordered
//       isMenuOpen={isMenuOpen}
//       onMenuOpenChange={setIsMenuOpen}
//     >
//       <NavbarContent className="sm:hidden" justify="start">
//         <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
//       </NavbarContent>

//       <NavbarContent className="sm:hidden pr-3" justify="center">
//         <NavbarBrand>
//           LOGO
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarBrand>
//           LOGO
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="warning" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarMenu className="bg-red-500">
//         {data.links.map((item, index) => (
//           <NavbarMenuItem key={`${item}-${index}`}>
//             <Link
//               className="w-full"
//               color={
//                 index === 2 ? "warning" : index === data.links.length - 1 ? "danger" : "foreground"
//               }
//               href="#"
//               size="lg"
//             >
//               {item.title}
//             </Link>
//           </NavbarMenuItem>
//         ))}
//       </NavbarMenu>
//     </Navbar>
//   );
// }

const Navigation = async ({
  data,
}: {
  data: {
    includeLogo: boolean;
    links: LinkType[];
  };
}) => {
  // const navigation = await client.fetch<NavigationType>(NAVIGATION_QUERY, {
  //   id: data._ref,
  // });

  // if (!navigation) {
  //   return null;
  // }

  return <NavigationHeader data={data} />;
};

export default Navigation;
