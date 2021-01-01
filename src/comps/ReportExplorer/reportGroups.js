const reportGroups = [
  {
    title: "Match Report",
    requires: ["match"],
    items: [
      {
        title: "Initial hometeam players",
        displayKeys: ["full_name"],
        relational: (matchId) => `/relation/match/${matchId}/hometeam/players`
      },
      {
        title: "Initial awayteam player",
        displayKeys: ["full_name"],
        relational: (matchId) => `/relation/match/${matchId}/awayteam/players`
      },
      {
        title: "Technical statistics",
        displayKeys: ["date_gmt", "stadium_name"],
        relational: (matchId) => `/relation/match/${matchId}`
      },
      {
        title: "Strikers",
        displayKeys: ["full_name"],
        relational: (matchId) => `/relation/match/${matchId}/goals`
      },
      {
        title: "Warned players",
        displayKeys: ["full_name"],
        relational: (matchId) => `/relation/match/${matchId}/foals`
      },
      {
        title: "Substitutions",
        displayKeys: ["playerin", "playerout"],
        relational: (matchId) => `/relation/match/${matchId}/ex`
      }
    ]
  },
  {
    title: "Player Activity",
    requires: ["player"],
    items: [
      {
        title: "Teams membership history",
      },
      {
        title: "Leagues playing records"
      }
    ]
  },
  {
    title: "Team Report",
    requires: ["team", "league"],
    items: [
      {
        title: "Matches played by league",

      },
      {
        title: "Coaches records"
      },
      {
        title: "Present players technical stats",
        displayKeys: ["full_name"],
        relational: (teamId) => `/relation/team/${teamId}/players`
      },
      {
        title: "Current coach info"
      }
    ]
  },
  {
    title: "Contract Report",
    requires: ["team"],
    items: [
      {
        title: "Purchased players stats",
        displayKeys: ["full_name"],
        relational: (teamId) => `/relation/team/${teamId}/players`
      },
      {
        title: "Team players contracts",
        displayKeys: ["full_name"],
        relational: (teamId) => `/relation/team/${teamId}/contract`
      },
      {
        title: "Team tech staff contracts",
        displayKeys: ["full_name"],
        relational: (teamId) => `/relation/team/${teamId}/noneplayer`
      },
      {
        title: "Team total spent on players"
      },
      {
        title: "Team total spent on staff"
      }
    ]
  },
  {
    title: "League Report",
    requires: ["league"],
    items: [
      {
        title: "Teams statistics",
        displayKeys: ["full_name"],
        relational: (leagueId) => `/relation/league/${leagueId}/teams`
      },
      {
        title: "Matches statistics",
        displayKeys: ["date_gmt", "stadium_name"],
        relational: (leagueId) => `/relation/league/${leagueId}/matches`
      },
      {
        title: "Players technical stats",
        displayKeys: ["full_name"],
        relational: (leagueId) => `/relation/league/${leagueId}/players`
      },
      {
        title: "Excluded players"
      }
    ]
  }
]

export default reportGroups