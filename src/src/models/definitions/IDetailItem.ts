import { LocaleMessages } from 'vue-i18n';
import IAvatar from './IAvatar';
import IIcon from './IIcon';

export default interface IDetailItem {
  header?: string;
  icon?: string;
  title?: string | LocaleMessages;
  text?: string;
  args?: {};
  subtitle?: string | LocaleMessages;
  stateIcon?: IIcon;
  hidden?: boolean;
  rating?: number;
  list?: IAvatar[];
  class?: string | LocaleMessages;
  subtitleclass?: string | LocaleMessages;
  to?: {}; // TODO Add proper type here
  href?: string;
}
