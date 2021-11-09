import IDialogDetailsButton from './IDialogDetailsButton';

export default interface IDialogDetails {
  title: string;
  persistent?: boolean;
  maxWidth?: number;
  cancel: IDialogDetailsButton;
  save: IDialogDetailsButton;
}
