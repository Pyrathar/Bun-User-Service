import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async (): Promise<User[]> => {
    return prisma.user.findMany();
};

const getUserById = async (id: number): Promise<User | null> => {
    return prisma.user.findUnique({ where: { id } });
};

const upsertUser = async (userData: Partial<User>): Promise<User> => {
    if (userData.id) {
        return prisma.user.update({
            where: { id: userData.id },
            data: userData
        });
    } else {
        return prisma.user.create({ data: userData });
    }
};

const deleteUser = async (id: number): Promise<void> => {
    await prisma.user.delete({ where: { id } });
};

const deleteAllUsers = async (): Promise<void> => {
    await prisma.user.deleteMany();
};


export {
    getAllUsers,
    getUserById,
    upsertUser,
    deleteUser,
    deleteAllUsers
};