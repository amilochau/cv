import CultureType from './CultureType';
import SiteType from './SiteType';

export default class HomeMessage {
  public site?: SiteType;
  public culture?: CultureType;

  public title?: string;
  public message?: string;
  public icon?: string;
  public color?: string;
  public border?: string;
  public text: boolean = false;
  public dense: boolean = false;
  public prominent: boolean = false;
  public outlined: boolean = false;
}
