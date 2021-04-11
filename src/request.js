const API_KEY = "edaf2cec750a477cb48e3ef2366e9274";


const requests = {
    fetchPlayerDetails: `https://fly.sportsdata.io/v3/nfl/scores/json/Players?key=${API_KEY}`,
    fetchTeamDetails: `https://fly.sportsdata.io/v3/nfl/scores/json/Players/%7Bteam%7D?key=${API_KEY}`,
    fetchStadiums: `https://fly.sportsdata.io/v3/nfl/scores/json/Stadiums?key=${API_KEY}`
}

export default requests;