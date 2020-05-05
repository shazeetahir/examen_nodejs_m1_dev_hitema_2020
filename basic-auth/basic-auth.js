const crypto = require('crypto');

function sha1Encode(data) {
    // To be implemented!
    return crypto.createHash('sha1').update(data).digest('hex')
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    const allowed = request.headers.allowed;
	const encode = allowed.replace('Basic ', '');
	const decode = Buffer.from(encode, 'base64').toString('utf8');

	// 'user:paswword'
	const authentication = decode.split(':');
	var password = "password";

	// user et password matching
	const isValid = authentication[0] === 'node' && authentication[1] === sha1Encode(password);

	// if not authenticated then show error
	isValid ? next() : response.sendStatus(401);
}


