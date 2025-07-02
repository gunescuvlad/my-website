/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // URL-ul principal al site-ului
  siteUrl: 'https://izopresto.ro',
  // Generează și un fișier robots.txt
  generateRobotsTxt: true,
  // Recomandări de crawling
  changefreq: 'weekly',
  priority: 0.7,
  // Exclude rute pe care nu vrei indexare
  exclude: ['/admin/**', '/secret'],
};
