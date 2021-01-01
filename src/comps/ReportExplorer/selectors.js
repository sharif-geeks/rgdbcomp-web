const selectors = [
  {
    title: "League",
    slug: "league",
    requires: [],
    relational: () => `/relational/table/league`
  },
  {
    title: "Match",
    slug: "match",
    requires: ["league"],
    relational: (leagueId) => `/relation/league/${leagueId}/matches`
  },
  {
    title: "Team",
    slug: "team",
    requires: ["league"],
    relational: (leagueId) => `/relation/league/${leagueId}/teams`
  },
  {
    title: "Player",
    slug: "player",
    requires: ["team"],
    relational: (teamId) => `/relation/team/${teamId}/players`
  }
]

export default selectors