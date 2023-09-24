import Link from 'next/link';
import { usePathname } from 'next/navigation';

import navStyle from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const currentPathname = usePathname();

  return (
    <div>
      <header className={navStyle.nav}>
        <Link 
        className={`${currentPathname === '/' ? `${navStyle.active}` : ''}`} 
        href="/">
          <FontAwesomeIcon icon={faMagnifyingGlass}/> Search
          </Link>
        <Link 
        className={`${currentPathname === '/browse' ? `${navStyle.active}` : ''}`} 
        href="/browse">
          <FontAwesomeIcon icon={faGlobe}/> Gallery
        </Link>
      </header>
    </div>
  );
}

export default Navbar;