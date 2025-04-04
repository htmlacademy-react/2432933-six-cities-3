import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';

const Inside = () => {
  const goods = useAppSelector((state) => state.offer.offer?.goods) || [];

  return(
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((benefit) => (
          <li className="offer__inside-item" key={benefit}>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inside;
