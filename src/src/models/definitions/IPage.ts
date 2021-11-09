import IPageMenu from './IPageMenu';

export default interface IPage {
  menu: IPageMenu;
  fluid?: boolean;
  condensed?: boolean;
  fillHeight?: boolean;
  map?: boolean;
}
