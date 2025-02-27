import { Link } from 'react-router-dom';
import './no-main-page.css';

const NoMainPage = () :JSX.Element => (
  <main className="page  no-page">
    <h1 className="visually-hidden"> No Cities</h1>
    <div className="section">
      <h1 className="error">404</h1>
      <div className="text">Ooops!!! The page you are looking for is not found</div>
      <Link className="back-home" to ='/'>Back to home</Link>
    </div>
  </main>
); /* Добавить стили  */

export default NoMainPage;
