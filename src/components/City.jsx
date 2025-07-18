import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import styles from "./City.module.css";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {

    const {id}=useParams()
  

//   if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
      </div>

      
      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          Check out  on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;