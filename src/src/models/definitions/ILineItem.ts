import ILineItemRow from './ILineItemRow';

export default interface ILineItem {
  to?: {}; // TODO Add proper type here
  class?: {};
  rows: ILineItemRow[];
}
