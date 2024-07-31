import axios from 'axios';
import { SignJWT } from 'jose';

const secret = new TextEncoder().encode(process.env.REACT_APP_API_KEY);

const jwt = await new SignJWT({})
  .setProtectedHeader({ alg: 'HS256' })
  .sign(secret);

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://chatbot-fastapi-gpt.onrender.com/'
    : 'http://localhost:8000/';

export const customFetch = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${jwt}`,
  },
});
