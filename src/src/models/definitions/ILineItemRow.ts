import { LocaleMessages } from 'vue-i18n';
import IAvatar from './IAvatar';
import ILineItemRowChip from './ILineItemRowChip';

export default interface ILineItemRow {
  avatars: IAvatar[];
  t1?: string | LocaleMessages;
  t2?: string | LocaleMessages;
  t9?: string | LocaleMessages;
  list?: IAvatar[];
  chip?: ILineItemRowChip;
  listRight?: IAvatar[];
  avatarsRight?: IAvatar[];
  grey?: boolean;
}
