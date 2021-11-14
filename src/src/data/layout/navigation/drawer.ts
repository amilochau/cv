import { IListItem } from '@/models/definitions';

const drawer: IListItem[] = [
  { to: { name: 'Home' }, title: 'app.navigation.home', icon: 'mdi-home' },
  { divider: true },
  { to: { name: 'Privacy' }, title: 'app.navigation.privacy', icon: 'mdi-gavel' },
];

export default drawer;
