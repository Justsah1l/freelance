import styles from './Millionpage.module.css';
import { Button } from "@nextui-org/react";

export default function Millionpage() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 className={styles.millions}>
          What can Million Jugnus do for you?
        </h1>
        <p className={styles.other}>
          Million Jugnus is more than a programme. It is a movement devoted to uplifting young people and developing Bharat&apos;s future leaders. <br />
          Together, we hope to illuminate the darkness and ignite a million sparks of change, encouraging talents, leadership, and good effect across the country. Join us in creating a future full of hope, opportunity, and achievement.
        </p>
      </div>
      <Button className={styles.buttonstyle} variant="bordered">
        Read More
      </Button>
    </div>
  );
}
