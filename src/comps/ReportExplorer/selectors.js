const selectors = [
  {
    title: "League",
    slug: "league",
    requires: [],
  },
  {
    title: "Match",
    slug: "match",
    requires: ["league"]
  },
  {
    title: "Team",
    slug: "team",
    requires: ["league"]
  },
  {
    title: "Player",
    slug: "player",
    requires: ["team"]
  }
]

export default selectors