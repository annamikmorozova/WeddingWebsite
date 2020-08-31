import axios from "axios";

const CREATE_NEW_SONG = "CREATE_NEW_SONG";
const CREATE_NEW_RSVP = "CREATE_NEW_RSVP";

export const newSong = song => {
	return {
		type: CREATE_NEW_SONG,
		song
	};
};

export const newRsvp = rsvp => {
	return {
		type: CREATE_NEW_RSVP,
		rsvp
	};
};

export const newSongThunk = data => {
	return async dispatch => {
		try {
			const song = await axios.post("/api/songs");
			dispatch(newRsvp(song.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const newRsvpThunk = data => {
	return async dispatch => {
		try {
			const rsvp = await axios.post("/api/rsvps");
			dispatch(newRsvp(rsvp.data));
		} catch (error) {
			console.log(error);
		}
	};
};

const initialState = {
	songs: [],
	rsvps: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_NEW_SONG:
			return {
				...state,
				songs: action.song
			};
		case CREATE_NEW_RSVP:
			return {
				...state,
				rsvps: action.rsvp
			};
		default:
			return state;
	}
}