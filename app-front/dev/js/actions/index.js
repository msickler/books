import {GET_TITLES} from './types'
import axios from 'axios'

const API_URL = "https://kitsu.io/api/edge/anime"

export function getTitles(){
  const request = axios.get(`${API_URL}`)
  return {
    type: GET_TITLES,
    payload: request
  }
}
