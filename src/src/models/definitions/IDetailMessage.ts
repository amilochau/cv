import IDetailMessageItem from './IDetailMessageItem';

export default interface IDetailMessage {
  icon?: string;
  title: string;
  items: IDetailMessageItem[];
  hidden?: boolean;
}
