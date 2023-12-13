import { FC } from "react";
interface IListItemProps {
  url: string,
  url_img: string,
  title: string,
  price: string
  currency_code: string,
  level_remainder: string
  quantity: number,
}
export const ListItem : FC <IListItemProps>= ({url, url_img, title, price, currency_code, level_remainder, quantity}) => {
  return (
    <div className="item-list">
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={url_img}alt="product photo" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{currency_code.length > 1 ? `${currency_code} ${price}` : currency_code + price}</p>
          <p className={level_remainder}>{quantity} left</p>
        </div>
      </div>
    </div>
  )
}