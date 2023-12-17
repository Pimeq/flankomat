import { serverSupabaseUser } from "#supabase/server";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		const query = getQuery(event);
		const activeUser = await serverSupabaseUser(event);
		console.log(activeUser?.id);
		return await prisma.teams.findMany({
			where: {
				teamCaptain: {
					path: ["id"],
					equals: activeUser?.id,
				},
			},
		});
	} catch (error) {
		return { status: 400, body: error };
	}
});
