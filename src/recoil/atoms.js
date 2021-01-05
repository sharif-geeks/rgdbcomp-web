import { atom } from "recoil";

export const idsAtom = atom({
  key: "ids", default: {}
})
export const dateRangeAtom = atom({
  key: "dateRange", default: { start: null, end: null }
})

export const rgdbAtom = atom({
  key: "rgdb", default: 0
})

export const detailsAtom = atom({
  key: "details", default: []
})

export const dataAtom = atom({
  key: "data", default: { graph: [], tables: [], info: [], time: null }
})

export const offsetAtom = atom({
  key: "offset", default: 0
})