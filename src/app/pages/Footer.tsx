import styles from './Footer.module.css';
import '../Fontawsseteup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.column}>
            <div className={styles.makecen}><h1 className={styles.titletext}>when the world is dark, look for light</h1></div>
            <div className={styles.spacer}></div>
            
            <div className={styles.row}>
                
                <div className={styles.column}>
                <Image 
              className={styles.logo} 
              src="/images/logo-mj.png" 
              alt="Logo" 
              width={290} // Specify the width
              height={100} // Specify the height
            />
                    <div className={styles.cusrow}>
                    <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                    <h1>millionjugnus</h1>
                    </div>
                    <div className={styles.cusrow}>
                    <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                    <h1>millionjugnus</h1>
                    </div>
                    <div className={styles.cusrow}>
                    <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                    <h1>millionjugnus</h1>
                    </div>
                    <div className={styles.cusrow}>
                    <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                    <h1>millionjugnus</h1>
                    </div>
                </div>
                <div className={styles.column}>
                <div className={styles.spacer}></div>
                <h1 className={styles.title}>Know Us</h1>
                <h1 className={styles.option}>About Us</h1>
                <h1 className={styles.option}>What We do</h1>
                <h1 className={styles.option}>Our Services</h1>
                </div>
                <div className={styles.column}>
                <div className={styles.spacer}></div>
                <h1 className={styles.title}>Connect with us</h1>
                <h1 className={styles.option}>Partner with us</h1>
                <h1 className={styles.option}>Mentor for us</h1>
                <h1 className={styles.option}>Become a Jugnu</h1>
                </div>
                <div className={styles.column}>
                <div className={styles.spacer}></div>
                <h1 className={styles.title}>Contact Us</h1>
                <div className={styles.cuscol}>
                <h1 className={styles.title}>Phone</h1>
                <h1 className={styles.option}>+91 9876543201</h1>
                </div>
                <div className={styles.cuscol}>
                <h1 className={styles.title}>Email</h1>
                <h1 className={styles.option}>info@millionjugnus.in</h1>
                </div>
                <div className={styles.cuscol}>
                <h1 className={styles.title}>Address</h1>
                <h1 className={styles.option}>Office No. - 101, ABC Hub, <br />
Sector 10, Pune - 411028</h1>
                </div>
                </div>
            </div>
            <div className={styles.spacer}></div>
            <hr className={styles.line} />
            <div className={styles.makecen}>
            
            <h1 className={styles.footertext}>©️ 2024 | millionJugnu.com  All rights reserved.</h1>
            </div>
            
        </div>

    </div>
  )
}
