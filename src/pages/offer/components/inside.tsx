type InsideProps = {
  benefits : string[];
}

const Inside = ({benefits} :InsideProps) => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {benefits.map((benefit) => (
        <li className="offer__inside-item" key={benefit}>
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

export default Inside;
