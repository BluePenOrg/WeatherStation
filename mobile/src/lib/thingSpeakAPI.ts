import axios from "axios";

const API_KEY = "9BGI4MYLN058ZI7I"

export const thingSpeak = axios.create({
  baseURL: 'https://api.thingspeak.com/'
})

