// app/sitemap.js
export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://www.smilepicphotography.online/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.smilepicphotography.online/gallery",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.smilepicphotography.online/contact",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
