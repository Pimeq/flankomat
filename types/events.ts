export type IEvents = {
	id: number;
	created_at: string;
	redSide: string;
	blueSide: string;
	redPoints: number;
	bluePoints: number;
	date: dateObj;
};

type dateObj = [
	{
		date: Date;
	}
];
