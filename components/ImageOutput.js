import styles from "../styles/Home.module.css";

export default function ImageOutput(props) {
  return (
    <>
      <div className={styles["compressed-img"]}>
        {props.compressedFile ? <img src={props.compressedFile} /> : ""}
      </div>
    </>
  )
}
