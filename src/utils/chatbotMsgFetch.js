import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://quizgenpt-fastapi.onrender.com/api'
    : 'http://localhost:8000/';

export const customFetch = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
