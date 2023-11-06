import { create } from 'zustand'
const useStore = create((set, get) => ({
  indexTab: 1,
  listImageSlide: [],
  setIndexTab: (data) => {
    set((state) => {
      return {
        ...state,
        indexTab: data,
      }
    })
  },
  setListImageSlide: (data) => {
    set((state) => {
      return {
        ...state,
        listImageSlide: data,
      }
    })
  },
}))
export default useStore
