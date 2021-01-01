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

export const tablesAtom = atom({
  key: "tables", default: []
})