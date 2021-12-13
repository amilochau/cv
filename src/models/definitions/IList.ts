import { Location } from 'vue-router'

export interface IText {
  text: string;
}

export interface IAction {
  to?: string | Location;
  href?: string;
  event?: string;
  eventArg?: string;
}

export interface IIcon {
  mdi: string;
  unicode?: string;
}

export interface IBadge {
  text: string;
  label?: boolean;
  outlined?: boolean;
  color?: string;
  icon?: IIcon;
  small?: boolean;
}

export interface IAvatar {
  title?: IText;
  src?: string;
  color?: string;
  label?: boolean;
  size?: string;
}

export interface IListItem {
  items?: IListItem[];

  header?: IText;
  divider?: boolean;
  title?: IText;
  subtitle?: IText;
  action?: IAction;

  disabled?: boolean;

  icon?: IIcon;
  avatar?: IAvatar;
  badge?: IBadge;
}

export interface IList {
  items: IListItem[];
  disableTranslation?: boolean;
}
