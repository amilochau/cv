import { LocaleMessages } from 'vue-i18n';
import IDetailItem from './IDetailItem';
import IDetailMessage from './IDetailMessage';

export default interface IDetails {
  title?: string | LocaleMessages;
  items: IDetailItem[];
  messages: IDetailMessage[];
}
