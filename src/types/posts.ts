export type Author = {
  ID: number
  login: string
  email: boolean
  name: string
  first_name: string
  last_name: string
  nice_name: string
  URL: string
  avatar_URL: string
  profile_URL: string
  site_ID: number
}

export type Discussion = {
  comments_open: boolean
  comment_status: string
  pings_open: boolean
  ping_status: string
  comment_count: number
}

export type CategoryMetaLinks = {
  self: string
  help: string
  site: string
}

export type CategoryMeta = {
  links: CategoryMetaLinks
}

export type Category = {
  ID: number
  name: string
  slug: string
  description: string
  post_count: number
  parent: number
  meta: CategoryMeta
}

export type Terms = {
  category: Record<string, Category>
  post_tag: Record<string, unknown>
  post_format: Record<string, unknown>
  mentions: Record<string, unknown>
}

export type Attachments = {
  ID: number
  URL: string
  guid: string
  date: string
  post_ID: number
  author_ID: number
  file: string
  mime_type: string
  extension: string
  title: string
  caption: string
  description: string
  alt: string
  thumbnails: Record<string, string>
}

export type Post = {
  ID: number
  site_ID: number
  author: Author
  date: string
  modified: string
  title: string
  URL: string
  short_URL: string
  content: string
  excerpt: string
  slug: string
  guid: string
  status: string
  sticky: boolean
  password: string
  parent: boolean
  type: string
  discussion: Discussion
  likes_enabled: boolean
  sharing_enabled: boolean
  like_count: number
  i_like: boolean
  is_reblogged: boolean
  is_following: boolean
  global_ID: string
  featured_image: string
  post_thumbnail: null
  format: string
  geo: boolean
  menu_order: number
  page_template: string
  publicize_URLs: string[]
  terms: Terms
  tags: Record<string, unknown>
  categories: Record<string, Category>
  attachments: Record<string, Attachments>
}

export type MetaRes = {
  links: {
    counts: string
  }
  wpcom: boolean
}

export type TPost = {
  found: number
  posts: Post[]
  meta: MetaRes
}
