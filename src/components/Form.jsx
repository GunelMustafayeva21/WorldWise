// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import Button from "./Button";
import BackButton from "./BackButton";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={`${styles.form}`}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" />
        <span className={styles.flag}>emoji</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to city?</label>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to city</label>
        <textarea id="notes" />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
