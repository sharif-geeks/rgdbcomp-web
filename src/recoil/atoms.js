import { atom } from "recoil";

export const idsAtom = atom({
  key: "ids", default: {}
})

export const rgdbAtom = atom({
  key: "rgdb", default: 0
})

export const detailsAtom = atom({
  key: "details",
  default: []
})


export const speedAtom = atom({
  key: "speed", default: null
})

export const relAtom = atom({
  key: "rel", default: { tables: [], relations: [] }
})

export const graphAtom = atom({
  key: "graph", default: []
})

export const offsetAtom = atom({
  key: "offset", default: 0
})