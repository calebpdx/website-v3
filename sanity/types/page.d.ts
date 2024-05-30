type Slug = {
  _type: "slug";
  current: string;
};
interface Page {
  _id: string;
  _type: "page";
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  internalName: string;
  title: string;
  slug: Slug;
  navigation: Navigation;
  content: Content[];
  footer: Footer;
}
