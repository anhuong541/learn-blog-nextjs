import PostUI from '@/components/pages-depen/Home'
import { getPosts } from '@/services/apis'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div>
      <PostUI posts={posts.data} />
    </div>
  )
}
