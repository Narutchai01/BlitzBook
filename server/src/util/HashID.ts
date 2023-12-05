import bcrypt from 'bcrypt';

export const hashId = async (id: string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(id, salt);
    return hash;
};