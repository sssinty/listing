import { IData } from "../data/IData";
import { FC } from "react";
import { ListItem } from "./ListItem";

interface IListingProps {
  items: IData[]
}

const Listing: FC<IListingProps> = ({items}) => {

  function currencyСode(code: string) {
    if(code === "GBP") {
      return code
    }
    return code === "USD" ? "$" : "€"
  }

  function remainder(quantity : number) {
    if(quantity <= 10 ) {
      return 'item-quantity level-low'
    }
     return quantity > 20 ? "item-quantity level-high" : "item-quantity level-medium"
  }

  return (
   <>
   {items.map((list: IData, i : number) => (
      
      <ListItem key={i} title={list.title?.length > 50 ? `${list.title.slice(0, 50)}...` : list.title} url={list.url} url_img={list?.MainImage?.url_570xN} price={list.price} currency_code={currencyСode(list.currency_code)} level_remainder={remainder(list.quantity)} quantity={list.quantity}/>
   ))}
   </>
  )
}
export default Listing;