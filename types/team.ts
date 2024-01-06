interface memberData {
	id: string;
	label: string;
	suffix: string;
}

type ITeamCaptain = {
	id: string;
	label: string;
	suffix: string;
};

export type ITeam = {
	id: string;
	teamName: string;
	teamCaptain: ITeamCaptain;
	members: memberData[];
	image: string;
	wins: number;
	losses: number;
};

export type ITeams = [ITeam];
