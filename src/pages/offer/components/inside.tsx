type InsideProps = {
  insides : string[];
}

const Inside = ({insides} :InsideProps) => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {insides.map((inside) => (
        <li className="offer__inside-item" key={inside}>
          {inside}
        </li>
      ))}
    </ul>
  </div>
);

export default Inside;
