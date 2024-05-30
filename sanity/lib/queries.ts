import { groq } from "next-sanity";

export const PAGES_QUERY = groq`*[_type == "page" && defined(slug)]`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]`;
export const HOMEPAGE_QUERY = groq`*[_type == "page" && slug.current == "home"]{title, navigation, footer, slug, _updatedAt, content[]->}[0]`;
export const NAVIGATION_QUERY = groq`*[_type == "navigation" && _id == $id]{includeLogo, links[]-> }[0]`;
