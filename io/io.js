module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        // To be implemented!

        module.exports.decodeHexFileContent = (filePath) => {

			return new Promise((resolve, reject) => {
				if (reject) { console.log(reject); }

				var content = fs.readFileSync(filePath, 'utf8');
				content = Buffer.from(content, 'hex').toString('utf8');

				if (content)
				resolve(content)
			});
		}

    });
}
