const cloudinary = require('cloudinary').v2;

export default cloudinary.config({
	cloud_name: 'dqydioa16',
	api_key: 421711163816247,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});
