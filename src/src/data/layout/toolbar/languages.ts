import { IListItem } from '@/models/definitions';

const languages: IListItem[] = [
  { header: 'app.header.settings.languages.title' },
  { event: 'to', eventArg: 'en', title: 'app.header.settings.languages.english', avatar: 'img/us/24.png' },
  { event: 'to', eventArg: 'fr', title: 'app.header.settings.languages.french', avatar: 'img/fr/24.png' },
];

export default languages;
