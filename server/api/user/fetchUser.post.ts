import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
import type { Iuser } from "@/types/user";
const prisma = new PrismaClient();
type IQuery = {
	id: string;
};

export default defineEventHandler(async (event) => {
	const body = await readBody<IQuery>(event);
	const activeUser = await serverSupabaseUser(event);
	const mappedData: Iuser[] = [];

	if (!body.id) {
		return { status: 400, body: "no id provided" };
	}
	try {
		const data = await prisma.users.findUnique({
			where: {
				id: body.id,
			},
		});

		if (data) {
			mappedData.push({
				id: data.id,
				fullName: (data.raw_user_meta_data as any)?.full_name,
				avatar: (data.raw_user_meta_data as any)?.avatar_url,
			});
		}
		return mappedData;
	} catch (error) {
		return { status: 400, body: error };
	}
});
