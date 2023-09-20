import { PrismaClient, Organization } from "@prisma/client";

const prisma = new PrismaClient();

const getAllOrgs = async (): Promise<Organization[]> => {
    return prisma.organization.findMany();
};

const getOrgById = async (id: number): Promise<Organization | null> => {
    return prisma.organization.findUnique({ where: { id } });
};

const upsertOrg = async (orgData: Partial<Organization>): Promise<Organization> => {
    if (orgData.id) {
        return prisma.organization.update({
            where: { id: orgData.id },
            data: orgData
        });
    } else {
        return prisma.organization.create({ data: orgData });
    }
};

const deleteOrg = async (id: number): Promise<void> => {
    await prisma.organization.delete({ where: { id } });
};

const deleteAllOrgs = async (): Promise<void> => {
    await prisma.organization.deleteMany();
};


export {
    getAllOrgs,
    getOrgById,
    upsertOrg,
    deleteOrg,
    deleteAllOrgs
};