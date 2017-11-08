import {GET_TITLES} from './types'
import axios from 'axios'

const API_URL = ""

export function getTitles(){
  const request = axios.get(`${API_URL}/titles`)
  return {
    type: GET_TITLES,
    payload: request
  }
}
