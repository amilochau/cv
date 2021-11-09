import { LocaleMessages } from 'vue-i18n';

export default interface IErrorMessages {
  message: string | LocaleMessages;
  details?: string;
  color?: string;
  icon?: string;
  timeout?: number;
}
