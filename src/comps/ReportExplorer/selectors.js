const selectors = [
  {
    title: "League",
    slug: "league",
    requires: [],
    relational: () => `/relation/table/league`,
    displayKey: "Name",
    table: true
  },
  {
    title: "Match",
    slug: "match",
    requires: ["league"],
    relational: (leagueId) => `/relation/league/${leagueId}/matches`,
    displayKey: "stadium_name"
  },
  {
    title: "Team",
    slug: "team",
    requires: ["league"],
    relational: (leagueId) => `/relation/league/${leagueId}/teams`,
    displayKey: "full_name"
  },
  {
    title: "Player",
    slug: "player",
    requires: ["team"],
    relational: (teamId) => `/relation/team/${teamId}/players`,
    displayKey: "full_name"
  }
]

export default selectors