import httpClient from "./httpclient";
import axios from "axios";

const EVENT_DETAILS = "/api/events-details";

const EVENT_TYPES = "/api/lookups/event-types"
const SHOT_TYPE = "/api/lookups/shot-types"
const MATCH_PLAYERS = "/api/lookups/match-players"

const getEventTypes = (matchId) => {
	return httpClient.get(EVENT_TYPES, {
		params: {
			matchIds: matchId,
		}
	});
};

const getMatchPlayer = (matchId) => {
	return httpClient.get(MATCH_PLAYERS, {
		params: {
			matchIds: matchId,
		}
	});
};
const getShotType = (matchId) => {
	return httpClient.get(SHOT_TYPE, {
		params: {
			matchIds: matchId,
		}
	});
};


const getVideoEvents = (matchId, eventTypeId, shotTypeId, nonStrikerId, strikerId, dismissedId, inning, over, ball, bowlerId, page, perPage) => {
	return httpClient.get(EVENT_DETAILS, {
		params: {
			matchIds: matchId,
			eventTypeId: eventTypeId,
			shotTypeId: shotTypeId,
			nonStrikerId: nonStrikerId,
			strikerId: strikerId,
			playerDismissedId: dismissedId,
			inning: inning,
			over: over,
			ball: ball,
			bowlerId: bowlerId,
			offset: page,
			limit: perPage
		},
	});
};


export {getVideoEvents, getEventTypes, getShotType, getMatchPlayer}