import IListItem from './IListItem';
import IPageMenuBack from './IPageMenuBack';

export default interface IPageMenu {
  back?: IPageMenuBack;
  pages: IListItem[];
  absolute?: boolean;
  title?: string;
}
