import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type tmappedData = {
	id: string;
	fullName: string;
	avatar: string;
};

export default defineEventHandler(async (event) => {
	const mappedData: tmappedData[] = [];
	try {
		const activeUser = await serverSupabaseUser(event);
		const data = await prisma.users.findMany({
			select: {
				id: true,
				raw_user_meta_data: true,
			},
			where: {
				id: activeUser?.id,
			},
		});

		data.forEach((element: any) => {
			mappedData.push({
				id: element.id,
				fullName: element.raw_user_meta_data?.full_name,
				avatar: element.raw_user_meta_data?.avatar_url,
			});
		});
		return mappedData;
	} catch (error) {
		return { status: 400, body: error };
	}
});
