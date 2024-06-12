
export const changeInfo = async (req) => {
    try {
        const { id, password, username, zalo, phone } = req.body;
        const avatar = req.file;

        const user = await db.User.findOne({
            where: { id },
            raw: true
        });

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        let newAvatar = '';
        if (avatar) {
            const result = await uploadToCloudinary(avatar);
            newAvatar = result.url;
        }

        await db.User.update(
            {
                id: id || user.id,
                name: username || user.name,
                password: password || user.password,
                phone: phone || user.phone,
                zalo: zalo || user.zalo,
                avatar: newAvatar || user.avatar,
            },
            { where: { id } }
        );

        const updatedUser = await db.User.findOne({
            where: { id },
            raw: true
        });

        return updatedUser;
    } catch (error) {
        throw error;
    }
};