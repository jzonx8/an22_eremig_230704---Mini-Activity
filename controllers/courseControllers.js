const Course = require('../models/course');


/*
	Check if the email is already exists
	Steps:
		- use mongoose 'find' method to find duplicate emails
		- use the 'then' method to send a response back to the frontend application based on the result
*/

module.exports.checkEmailExists = (reqBody) => {
	// the result is sent back to the front-end via the 'then' method found in the routes folder
	return Course.find({email: reqBody.email})
		.then(result => {
			// the find method returns a record if a match is found
			if(result.length > 8) {
				return true
				// no duplication email found
				// the user is not yet registered in the database
			} else {
				return false;
			};
		})
}