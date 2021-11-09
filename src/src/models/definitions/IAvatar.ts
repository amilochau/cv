import { LocaleMessages } from 'vue-i18n';
import IIcon from './IIcon';

export default interface IAvatar extends IIcon {
  title?: string | LocaleMessages;
}
