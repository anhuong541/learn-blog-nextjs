import axios from 'axios'

export const wordpressClient = axios.create({
  baseURL: process.env.WORDPRESS_PUBLIC_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})
