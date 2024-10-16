export type NewsFeed = {
  _id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  content: string;
  publishedAt: string;
};


export type UpdateNewsFeedBody = {
  title?: FormDataEntryValue | null,
  subtitle?: FormDataEntryValue | null,
  content?: FormDataEntryValue | null,
  publishedAt?: FormDataEntryValue | null,
  coverImage?: string | null
}
