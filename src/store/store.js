import axios from "axios";

const CREATE_NEW_RSVP = "CREATE_NEW_RSVP";

export const newRsvp = rsvp => {
	return {
		type: CREATE_NEW_RSVP,
		rsvp
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
	rsvps: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_NEW_RSVP:
			return {
				...state,
				rsvps: action.rsvp
			};
		default:
			return state;
	}
}