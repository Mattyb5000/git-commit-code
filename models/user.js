const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		required: "First Name is Required",
	},

	lastName: {
		type: String,
		trim: true,
		required: "Last Name is Required",
	},

	password: {
		type: String,
		trim: true,
		required: "Password is Required",
		validate: [({ length }) => length >= 6, "Password should be longer."],
	},

	email: {
		type: String,
		unique: true,
		match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
	},

	userCreated: {
		type: Date,
		default: Date.now,
	},

	projectsInProgress: [
		{
			type: Schema.Types.ObjectId,
			ref: "Project",
		},
	],

	projectsComplete: [
		{
			type: Schema.Types.ObjectId,
			ref: "Project",
			// deployed_url: String
		},
	],

	lastUpdated: Date,

	fullName: String,
});

UserSchema.methods.setFullName = function () {
	this.fullName = `${this.firstName} ${this.lastName}`;
	return this.fullName;
};

UserSchema.methods.lastUpdatedDate = function () {
	this.lastUpdated = Date.now();
	return this.lastUpdated;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;

// projectsComplete: [
// 	{
// 		project_id: Number,
// 		deployed_url: String,
// 		required: false,
// 	},
// ],

//or should we do this?
// projectsInProgress: [{
//   type: Schema.Types.ObjectId,
//   ref: "Project"
// }],

// projectsComplete: [{
//   type: Schema.Types.ObjectId,
//   ref: "Project"
// }],

// projectsInProgress: [{
//   project_id: Number,
//   required: false
// }],
