const reportGroups = [
  {
    title: "Match Report",
    requires: ["match"],
    items: [
      {
        title: "Initial hometeam players",
        url: ({ matchId }) => `/relation/match/${matchId}/hometeam/players`
      },
      {
        title: "Initial awayteam player",
        url: ({ matchId }) => `/relation/match/${matchId}/awayteam/players`
      },
      {
        title: "Technical statistics",
        url: ({ matchId }) => `/relation/match/${matchId}`
      },
      {
        title: "Strikers",
        url: ({ matchId }) => `/relation/match/${matchId}/goals`
      },
      {
        title: "Warned players",
        url: ({ matchId }) => `/relation/match/${matchId}/foals`
      },
      {
        title: "Substitutions"
      }
    ]
  },
  {
    title: "Player Activity",
    requires: ["player"],
    items: [
      {
        title: "Teams membership history"
      },
      {
        title: "Leagues playing records"
      }
    ]
  },
  {
    title: "Team Report",
    requires: ["team"],
    items: [
      {
        title: "Matches played by league"
      },
      {
        title: "Coaches records"
      },
      {
        title: "Present players technical stats"
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
        title: "Purchased players stats"
      },
      { title: "Team players contracts" },
      { title: "Team tech staff contracts" },
      { title: "Team total spent on players" },
      { title: "Team total spent on staff" }
    ]
  },
  {
    title: "League Report",
    requires: ["league"],
    items: [
      {
        title: "Teams statistics"
      },
      {
        title: "Matches statistics"
      },
      {
        title: "Players technical stats"
      },
      {
        title: "Excluded players"
      }
    ]
  }
]

export default reportGroups