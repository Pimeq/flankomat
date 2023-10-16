import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const activeUser = await serverSupabaseUser(event);
	return await prisma.teams.findMany({
		where: {
			teamCaptain: activeUser?.id,
		},
	});
});
