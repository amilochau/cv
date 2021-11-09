import { Location } from 'vue-router';

export default interface IPartItem {
  text: string;
  icon: string;
  to: string | Location;
}
