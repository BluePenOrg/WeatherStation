import axios from "axios";

export const thingSpeak = axios.create({
  baseURL: 'https://api.thingspeak.com/'
})