import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  log: ['error'],
});

type tmappedData = {
	id: string;
	fullName: string;
	avatar: string;
};

export default defineEventHandler(async (event) => {
	const mappedData: tmappedData[] = [];
	const query = getQuery(event);
	try {
		const activeUser = await serverSupabaseUser(event);
		const data = await prisma.users.findMany({
			select: {
				id: true,
				raw_user_meta_data: true,
			},
			where: {
				id: {
					not: activeUser?.id,
				},
			},
		});

		data.forEach((element: any) => {
			mappedData.push({
				id: element.id,
				fullName: element.raw_user_meta_data?.full_name,
				avatar: element.raw_user_meta_data?.avatar_url,
			});
		});
		if (!query?.q) {
			return mappedData;
		} else {
			const filteredData = mappedData.filter((element) => {
				return element.fullName
					?.toLowerCase()
					.includes((query.q as string).toLowerCase());
			});

			return filteredData;
		}
	} catch (error) {
		console.log(error)
		return { status: 400, body: error };
	}
});
