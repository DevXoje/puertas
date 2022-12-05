import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type Link = {
  path: string;
  text: string;
  children?: Link[];
};
export type Icon = {
  content: IconDefinition;
  path: string;
  color?: string;
};
type LinkParent = Link & { children?: Link[] };
export type LinkList = {
  links: LinkParent[];
};
