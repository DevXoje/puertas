export type Link = {
  path: string;
  text: string;
  children?: Link[];
};
type LinkParent = Link & { children?: Link[] };
export type LinkList = {
  links: LinkParent[];
};
