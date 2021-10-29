import imageCompression from 'browser-image-compression';

const defaultOptions = {
  maxSizeMB: 1,
  useWebWorker: true,
  // maxWidthOrHeight:190
}

export function compressFile (imageFile,options=defaultOptions) {
 return  imageCompression(imageFile, options);
} 

export function download(file){
  const url = window.URL.createObjectURL(file);
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', "dummy image"); //or any other extension
			// no need to apppend link to body unless you need it there
			//document.body.appendChild(link);

			// wait for some time then change ...downloading to download
			link.click();
			window.URL.revokeObjectURL(url);
}

export const cloudinaryConfig = {

}
