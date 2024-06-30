import Link from 'next/link'; // Use the correct import for Link
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {



  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" passHref>
          <img className={styles.logo} src="/images/logo-mj.png" alt="Logo" />
        </Link>
        <div className={styles.navLinks}>
          <Link href="#homepage">Home</Link>
          <Link href="#subpage">About Us</Link>
          <Link href="#peoplepage">Services</Link>
          <Link href="#millionpage">Our Programs</Link>
          <Link style={{marginRight:40}}  href="/#footer">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
