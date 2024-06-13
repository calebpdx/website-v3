import { groq } from "next-sanity";

export const PAGES_QUERY = groq`*[_type == "page" && defined(slug)]`;

export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug]{title, "navigation": navigation->{includeLogo, links[]-> }, footer, slug, _updatedAt, content[]->}[0]`;

export const HOMEPAGE_QUERY = groq`*[_type == "page" && slug.current == "home"]{title, "navigation": navigation->{includeLogo, links[]-> }, footer, slug, _updatedAt, content[]->}[0]`;

export const CHANGELOGPAGE_QUERY = groq`*[_type == "page" && slug.current == "changes"]{title, "navigation": navigation->{includeLogo, links[]-> }, footer, slug, _updatedAt, content[]->}[0]`;

export const NAVIGATION_QUERY = groq`*[_type == "navigation" && _id == $id]{includeLogo, links[]-> }[0]`;
export const FOOTER_QUERY = groq`*[_type == "footer" && _id == $id]{links[]->{..., links[]->}}[0]`;
export const TAGS_QUERY = groq`*[_type == "tagCta" && _id == $id]{tags[]->{name, icon->}}`;
export const RECOMMENDATIONS_QUERY = groq`*[_type == "recommendations" && _id == $id]{anchor, content[]->{...,referrerImage->{"url": image.asset->url, alt}}}[0]`;
export const EXPERIENCE_QUERY = groq`*[_type == "experience" && _id == $id]{anchor, title, description, theme, jobs[]->{...,logo->{"url": image.asset->url, alt}}}[0]`;
