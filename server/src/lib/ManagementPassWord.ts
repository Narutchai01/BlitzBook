import bcrypt from 'bcrypt';

const saltRounds = 10;
// Check if the given password matches the given hash.
export const matchPassword = async (password: string, hash: string) => {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
};

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(saltRounds); // Generate a random string, which we will add to the password before hashing
    const hash = await bcrypt.hash(password, salt); // Hash the password, using the random string as "salt"
    return hash;
};