import { Location } from 'vue-router';

export default interface IListItem {
  items?: IListItem[];
  policies?: string[];
  icon?: string;
  title?: string;
  disableTranslation?: boolean;
  event?: string;
  eventArg?: string;
  href?: string;
  to?: string | Location;
  disabled?: boolean;
  inactive?: boolean;
  avatar?: string;
  header?: string;
  divider?: boolean;
  badge?: string;
}
