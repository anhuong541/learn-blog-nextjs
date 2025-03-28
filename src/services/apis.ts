import { wordpressClient } from '@/libs/network'

export const getPosts = async () => {
  return await wordpressClient.get('/posts')
}
