import mongoose from 'mongoose'

const hashPassword = (password, salt) =>
	crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter a full name'],
			index: true,
		},
		email: {
			type: String,
			lowercase: true,
			unique: true,
			index: true,
		},
		password: String,
		salt: String,
	},
	{ timestamps: true }
)

UserSchema.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(16).toString('hex')
	this.password = hashPassword(password, this.salt)
}

UserSchema.methods.matchPassword = function (password) {
	return this.password === hashPassword(password, this.salt)
}

export default mongoose.model('User', UserSchema)
