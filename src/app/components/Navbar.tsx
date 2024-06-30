import Link from 'next/link'; // Use the correct import for Link
import styles from './Navbar.module.css';
import Image from 'next/image';
const Navbar: React.FC = () => {



  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" passHref>
        <Image
            className={styles.logo}
            src="/images/logo-mj.png"
            alt="Logo"
            width={250}
            height={101}
          />
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
