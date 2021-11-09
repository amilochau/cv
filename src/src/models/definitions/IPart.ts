import IPartItem from './IPartItem';

export default interface IPart {
  title: string;
  desc: string;
  color: string;
  icon: string;
  items: IPartItem[];
}
