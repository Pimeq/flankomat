import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		const activeUser = await serverSupabaseUser(event);
		return await prisma.teams.findMany({
			where: {
				teamCaptain: activeUser?.id,
			},
		});
	} catch (error) {
		return { status: 400, body: "unathenticated" };
	}
});
