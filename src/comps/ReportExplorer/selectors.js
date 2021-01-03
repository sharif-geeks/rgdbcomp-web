const selectors = [
  {
    title: "League",
    slug: "league",
    requires: [],
    url: (r0g1) => `/${!r0g1 ? "relation" : "graph"}/table/league`,
    displayKey: "Name",
    table: true
  },
  {
    title: "Match",
    slug: "match",
    requires: ["league"],
    url: (r0g1, leagueId) => `/${!r0g1 ? "relation" : "graph"}/league/${leagueId}/matches`,
    displayKey: "stadium_name"
  },
  {
    title: "Team",
    slug: "team",
    requires: ["league"],
    url: (r0g1, leagueId) => `/${!r0g1 ? "relation" : "graph"}/league/${leagueId}/teams`,
    displayKey: "team_name"
  },
  {
    title: "Player",
    slug: "player",
    requires: ["team"],
    url: (r0g1, teamId) => `/${!r0g1 ? "relation" : "graph"}/team/${teamId}/players`,
    displayKey: "full_name"
  }
]

export default selectors