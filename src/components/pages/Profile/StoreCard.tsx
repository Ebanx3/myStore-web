import { Link } from "react-router-dom";

export const StoreCard = ({store}:{store:Store}) => {
  return (<Link to={`/${store.name}`}>{store.name}</Link>);
};