import styles from '../styles/Home.module.css'

export default function FileInput(props) {
  return (
    <div className={styles["input-group"]}>
        <label htmlFor="input-file">Select Image</label>
        <input
					type="file"
					id="input-file"
          onChange={props.handleOnChange}
          style={{display: "none"}}
				/>
      </div>
  )
}