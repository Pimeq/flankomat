import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export interface memberData {
	id: string;
	label: string;
	suffix: string;
}

type IBody = {
	teamName: string;
	teamCaptain: memberData[];
	teamMembers: memberData[];
	image: string;
};

export default defineEventHandler(async (event) => {
	try {
		const user = serverSupabaseUser(event);
		const body = await readBody(event);
		if (!body) {
			return { status: 500, body: "no body provided" };
		}

		const res = await prisma.teams.delete({
			where: {
				id: body.id,
			},
		});
		return { status: 200, body: res };
	} catch (error) {
		console.log(error);
		return { status: 400, body: error };
	}
});
