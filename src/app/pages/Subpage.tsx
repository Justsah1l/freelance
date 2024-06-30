import styles from './Subpage.module.css';
import {Button} from "@nextui-org/react";


export default function Subpage() {
  return (
    <div className={styles.container}>
    <div className={styles.subcon}>
    <h1 className={styles.maintext}>Our proven strategy enables you to design effective programs that guide and assist young minds to make a good influence on the world.</h1>
    <Button  className={styles.buttonstyle}  variant="bordered">
        Read More
    </Button>  
      
    </div>
</div>
  )
}
