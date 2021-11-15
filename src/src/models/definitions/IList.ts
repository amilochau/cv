import { Location } from 'vue-router';

export interface IText {
  text: string;
}

export interface IAction {
  to?: string | Location;
  href?: string;
  event?: string;
  eventArg?: string;
}

export interface IBadge {
  title: IText;
  label?: boolean;
  outlined?: boolean;
  color?: string;
  icon?: string;
  small?: boolean;
}

export interface IListItem {
  items?: IListItem[];

  header?: IText;
  divider?: boolean;
  title?: IText;
  subtitle?: IText;
  action?: IAction;

  disabled?: boolean;
  inactive?: boolean;

  icon?: string;
  avatar?: string;
  badge?: IBadge;
}

export interface IList {
  items: IListItem[];
  disableTranslation?: boolean;
  expandGroups?: boolean;
}
