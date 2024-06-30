import styles from './People.module.css';
import {Button} from "@nextui-org/react";

export default function Peoplepage() {
  return (
    <div className={styles.container}>
        <div className={styles.row}>
        
        <Button  className={styles.upbuttonstyle}  variant="bordered">
        Targeted Commitments
        </Button>
        <Button  className={styles.upbuttonstyle}  variant="bordered">
        Creating New Initiatives
        </Button>
        <Button  className={styles.upbuttonstyle}  variant="bordered">
        Thematic Area
        </Button>
        </div>
        
        <Button  className={styles.buttonstyle}  variant="bordered">
        Read More
        </Button>  
    </div>
  )
}
