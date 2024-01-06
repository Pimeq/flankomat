import { serverSupabaseUser } from "#supabase/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type IBody = {
	redSide: string;
	blueSide: string;
	redPoints: number;
	bluePoints: number;
	date: string;
};

export default defineEventHandler(async (event) => {
	try {
		const user = serverSupabaseUser(event);
		const body = await readBody(event);
		if (!body) {
			return { status: 500, body: "" };
		}

		const team = await prisma.matches.create({
			data: {
				redSide: body.redSide,
				blueSide: body.blueSide,
				redPoints: body.redPoints,
				bluePoints: body.bluePoints,
				date: body.date,
			},
		});
		return { status: 200, body: team };
	} catch (error) {
		console.log(error);
		return { status: 400, body: error };
	}
});
