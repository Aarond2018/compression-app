// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import Crypto from 'crypto';
// import queryString from 'querystring';
// import axios from 'axios';

// const config = {
// 	cloud_name: 'dqydioa16',
// 	api_key: 421711163816247,
// };
// const generateSignature = (objectToSign) => {
// 	let stringifiedObject = queryString.stringify(objectToSign);
// 	const signature = Crypto.createHash('sha1').update(stringifiedObject, 'utf-8').digest('hex');
// 	return signature;
// };

// const upload = async (file) => {
// 	const options = {
// 		public_id: 'sample_image',
// 		timestamp: new Date().getTime(),
// 	};
// 	let signature = generateSignature({
// 		public_id: options.public_id,
// 		timestamp: options.timestamp + process.env.CLOUDINARY_API_SECRET,
// 	});

// 	return axios.post(`https://api.cloudinary.com/v1_1/${config.cloud_name}/image/upload`, {
// 		api_secret: process.env.CLOUDINARY_API_SECRET,
// 		...options,
// 		file,
// 		api_key: config.api_key,
// 		cloud_name: config.cloud_name,
// 		signature,
// 	});
// };
import cloudinary from 'cloudinary';
const config = {
	cloud_name: 'dqydioa16',
	api_key: 421711163816247,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
};

cloudinary.v2.config(config);

export default async function handler(req, res) {
	try {
		let { file } = req.body;
		const re = await cloudinary.v2.uploader.upload(file);
		return res.json({ message: 'upload successful' });
	} catch (error) {
		console.log({ err: error.message });
		res.json({ message: 'oopsie an error occured' });
	}
}
