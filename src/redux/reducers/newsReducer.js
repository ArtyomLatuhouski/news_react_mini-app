import {initialState} from "../initialState";
import {NEW_NEWS_CREAT} from "../actionCreators/actionNames";

const initState=initialState.news

export const newsReducer=(state=initState,action)=>{
  switch (action.type) {
    case NEW_NEWS_CREAT:
      return [...state,action.news]
    default:
      return state
  }
}