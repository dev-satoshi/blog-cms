export function prevNextPost(allSlugs, currentSlug) {
  const numberOfPosts = allSlugs.length

  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug)
  const prevPost = index + 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1]
  const nextPost = index - 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1]

  return [prevPost, nextPost]
}
