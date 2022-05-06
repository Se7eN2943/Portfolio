import { createSlice } from '@reduxjs/toolkit'

import { AviaSalesState } from '../../types'

const initialState: AviaSalesState = {
  searchId: '',
  tickets: [],
  ticketsFlag: false,
  filterList: ['Без пересадок'],
  sortFlag: 'discount',
  sliced: 5
}

export const aviaSalesSlice = createSlice({
  name: 'Aviasales',
  initialState,
  reducers: {
    SEARCH_ID(state, { payload }) {
      state.searchId = payload.searchId
    },
    TICKETS(state, { payload }) {
      (state.tickets = state.tickets.concat(payload.tickets)),
        (state.ticketsFlag = payload.stop)
    },
    SORT(state, { payload }) {
      state.sortFlag = payload
    },
    FILTER(state, { payload }) {
      state.filterList = payload
    },
    SLICED(state, { payload }) {
      state.sliced = payload
    },
    TICKETS_FLAG(state, { payload }) {
      state.ticketsFlag = payload
    }
  }
})

export default aviaSalesSlice.reducer
export const { SEARCH_ID, TICKETS, SORT, FILTER, SLICED, TICKETS_FLAG } =
  aviaSalesSlice.actions
