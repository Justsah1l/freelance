import styles from './Involve.module.css';
import {Button} from "@nextui-org/react";

export default function Involve() {
  return (
    <div className={styles.maincon}>
    <div className={styles.container}>
        <h1 className={styles.titletext} >Involve with us</h1>
        <div className={styles.row}>

        
          <div className={styles.column}>
          <img className={styles.image} src="/images/partner.png" alt="partner" />
          <Button  className={styles.buttonstyle}  variant="bordered">
          Become a Partner
        </Button> 
          </div>
          <div className={styles.column}>
          <img className={styles.image} src="/images/marga.png" alt="partner" />
          <Button  className={styles.buttonstyle}  variant="bordered">
          Become a margadarshak
        </Button> 
          </div>
          <div className={styles.column}>
          <img className={styles.image} src="/images/Jugnu.png" alt="partner" />
          <Button  className={styles.buttonstyle}  variant="bordered">
          Become a Jugnu        
          </Button> 
          </div>
       
        </div>

        
        
    </div>
    </div>
  )
}
