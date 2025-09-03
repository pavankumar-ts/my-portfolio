// pages/sitemap.xml.js
import { projects } from '@/data/projects';
import { blogs } from '@/data/blog';

const BASE_URL = 'https://www.pavankumar.co';

function generateSiteMap() {
    const currentDate = new Date().toISOString();

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <!-- Static Pages -->
      <url>
        <loc>${BASE_URL}</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${BASE_URL}/projects</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${BASE_URL}/services</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${BASE_URL}/about</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${BASE_URL}/contact</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>${BASE_URL}/blog</loc>
        <lastmod>${currentDate}</lastmod>
        <priority>0.80</priority>
      </url>

      <!-- Projects -->
      ${projects
            .map((project) => {
                return `
        <url>
          <loc>${BASE_URL}/projects/${project.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <priority>${project.home ? '0.80' : '0.64'}</priority>
        </url>`;
            })
            .join('')}

      <!-- Blog Posts -->
      ${blogs
            .map((blog) => {
                return `
        <url>
          <loc>${BASE_URL}/blog/${blog.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <priority>0.70</priority>
        </url>`;
            })
            .join('')}
    </urlset>`;
}

export default function SiteMap() {
    return null;
}

export async function getStaticProps() {
    const sitemap = generateSiteMap();
    
    // For static export, we'll write the sitemap to public directory
    const fs = require('fs');
    const path = require('path');
    
    fs.writeFileSync(
        path.join(process.cwd(), 'public', 'sitemap.xml'),
        sitemap
    );

    return {
        props: {},
    };
}