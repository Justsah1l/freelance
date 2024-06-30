import styles from './Involve.module.css';
import { Button } from "@nextui-org/react";
import Image from 'next/image'; // Import the Image component from Next.js

export default function Involve() {
  return (
    <div className={styles.maincon}>
      <div className={styles.container}>
        <h1 className={styles.titletext}>Involve with us</h1>
        <div className={styles.row}>
          <div className={styles.column}>
            <Image 
              className={styles.image} 
              src="/images/partner.png" 
              alt="Become a Partner" 
              width={180} // Provide the width of the image
              height={200}// Provide the height of the image
            />
            <Button className={styles.buttonstyle} variant="bordered">
              Become a Partner
            </Button>
          </div>
          <div className={styles.column}>
            <Image 
              className={styles.image} 
              src="/images/marga.png" 
              alt="Become a Margadarshak" 
              width={180} // Provide the width of the image
              height={200} // Provide the height of the image
            />
            <Button className={styles.buttonstyle} variant="bordered">
              Become a Margadarshak
            </Button>
          </div>
          <div className={styles.column}>
            <Image 
              className={styles.image} 
              src="/images/Jugnu.png" 
              alt="Become a Jugnu" 
              width={180} // Provide the width of the image
              height={200} // Provide the height of the image
            />
            <Button className={styles.buttonstyle} variant="bordered">
              Become a Jugnu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
