import { useState } from "react";
import FileInput from "../components/FileInput";
import ImageOutput from "../components/ImageOutput";
import ImagePreviewer from "../components/imagePreviewer";
import { compressFile, download } from '../helpers/helpers'
import styles from "../styles/Home.module.css";

export default function Home() {
	const [selectedImage, setSelectedImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState()

	const handleOnChange = event => {
		setSelectedImage(event.target.files[0]);
	};

  const handleCompressFile = async () => {
    if (selectedImage) {
      try {
        const compressedImageFile = await compressFile(selectedImage)
         
        setCompressedImage(compressedImageFile)
      } catch (error) {
        console.log({error})
      }   
    } 
  }

  const handleDownload = () => {
    download(compressedImage)
  }

	return (
		<div className={styles.container}>
			<FileInput handleOnChange={handleOnChange} />

      <div className={styles.previewer}>
        <ImagePreviewer imageFile={selectedImage}>
          {selectedImage ? <button onClick={handleCompressFile} className={styles.button}>Compress Image</button> : ""}
        </ImagePreviewer>
        <ImagePreviewer imageFile={compressedImage}>
        {compressedImage ? (
          <>
            <button onClick={handleDownload} className={styles.downloadBtn}>Download</button>
            <button className={styles.uploadBtn}>Cloudinary</button>
          </>
        ) : ""}
        </ImagePreviewer>
      </div>
      
		</div>
	);
}
