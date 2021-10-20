
import httpClient from "./httpclient";

const GET_MATCHES = "/api/matches";

const getMatches = (page, page_size = 10, team1Id = null, team2Id = null,venue =null, startDate =null) => {
  return httpClient.get(GET_MATCHES, {
    params: {
      offset: page,
      limit: page_size,
      orderAsc:false,
      team1Id: team1Id,
      team2Id: team2Id,
      venueId: venue,
      startDate: startDate
    },
  });
};

const getTeams = () => {
  return httpClient.get("/api/lookups/teams");
};

const getVenues = () => {
  return httpClient.get("/api/lookups/venues");
};


export { getMatches, getTeams, getVenues};
