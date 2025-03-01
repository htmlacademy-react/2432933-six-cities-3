type PriceCardProps = {
  price : number;
}

const PriceCard = ({price}: PriceCardProps) => (
  <div className="place-card__price">
    <b className="place-card__price-value">&euro;{ price }</b>
    <span className="place-card__price-text">&#47;&nbsp;night</span>
  </div>
);

export default PriceCard;
