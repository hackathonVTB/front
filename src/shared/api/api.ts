import axios from 'axios';

export const $api = axios.create({
  baseURL: 'https://hackatonbackend.ladyk3000.repl.co',
});
