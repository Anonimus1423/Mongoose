//
// Importing mongoose
//
const mongoose = require("mongoose");

//
// Connection to server
//
mongoose.connect("mongodb://localhost/users")
.then(async () => 
{
	//
	// Creating Schema
	//
	var userSchema = mongoose.Schema
	({
    	name: String,
    	lastName: String,
    	password: String,
    	username: String,
    	date: Date
	});

	//
	// Creating Collection
	//
	var user = mongoose.model('User', userSchema);

	//
	// Creating document
	//
	let createUser = new user({name: "tamara", lastName: "papoyan", username: "tamara", password: "QwertyasdzcreateUserc2004", date: Date.now()})

	//
	// Find Element
	//
	let errElement = await user.find(
	{
		username: createUser.username
	})

	if (errElement.length == 0) //
		createUser.save(); 		// Save document 
	else 				   		//
		console.log("This username is already exist");
})
.catch((e) => 
{
	console.log(e)
})