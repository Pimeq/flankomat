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
			return { status: 200, body: "" };
		}

		const team = await prisma.teams.create({
			data: {
				teamName: body.teamName,
				teamCaptain: body.teamCaptain,
				members: body.teamMembers,
				image: body.image,
				wins: 0,
				losses: 0,
			},
		});
		console.log(team);
		return { status: 200, body: team };
	} catch (error) {
		console.log(error);
		return { status: 400, body: error };
	}
});
