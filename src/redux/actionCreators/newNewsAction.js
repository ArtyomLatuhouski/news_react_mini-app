import {NEW_NEWS_CREAT} from "./actionNames";


export function newsCreat(item) {
  return{
    type:NEW_NEWS_CREAT,
    news:item
  }
}