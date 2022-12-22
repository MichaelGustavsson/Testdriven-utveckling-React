import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>Westcoast Cars</h1>
      <ul>
        <li>
          <Link to='/'>Vehicles</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
