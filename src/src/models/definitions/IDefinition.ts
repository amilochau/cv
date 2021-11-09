import IDetails from './IDetails';
import ILineItem from './ILineItem';

export default interface IDefinition<L, P = L> {
  details: (item: P) => IDetails;
  lineItem: (item: L) => ILineItem;
}
