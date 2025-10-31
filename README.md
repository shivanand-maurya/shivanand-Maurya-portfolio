# Shivanand Maurya - Portfolio Website

This is the source code for my personal portfolio website, built with React, Vite, Tailwind CSS, and TypeScript.

## Features

- **Responsive Design**: Fully responsive and mobile-friendly.
- **Blog**: Markdown-based blog with support for tags and excerpts.
- **Notion Integration**: Optional integration to fetch blog posts from a Notion database.
- **Contact Form**: Integrated with Formspree.
- **SEO Friendly**: Includes meta tags and a sitemap.

## Tech Stack

- **Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Blog**: Markdown (parsed with `gray-matter` and `react-markdown`)
- **Deployment**: Vercel, Netlify, or GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shivanand-Maurya/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:5173`.

### Building for Production

To create a production build, run:

```bash
npm run build
```

The production files will be in the `dist` directory.

## Content Management

### Adding a Blog Post

To add a new blog post, create a new markdown file in the `src/content/posts` directory. The file name will be used as the URL slug.

Each post must have frontmatter at the top:

```markdown
---
title: 'Your Blog Post Title'
date: 'YYYY-MM-DD'
tags: ['tag1', 'tag2']
excerpt: 'A short summary of your post.'
cover_image: '/assets/images/your-cover-image.png'
---

Your blog post content in Markdown...
```

### Notion Integration (Optional)

This project supports fetching blog posts from a Notion database at build time.

1.  **Create a Notion Integration**:
    - Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations) and create a new integration.
    - Note your **Internal Integration Token**.

2.  **Create a Notion Database**:
    - Create a new database in Notion.
    - The database must have the following properties:
        - `Title` (Title)
        - `Date` (Date)
        - `Tags` (Multi-select)
        - `Excerpt` (Text)
        - `CoverImage` (Files & media)
        - `Published` (Checkbox)

3.  **Share the Database with your Integration**:
    - Open your database, click the `...` menu, and select "Add connections".
    - Find and select your integration.

4.  **Set Environment Variables**:
    - Create a `.env.local` file in the root of the project.
    - Add your Notion token and database ID:
      ```
      VITE_NOTION_TOKEN=your_integration_token
      VITE_NOTION_DATABASE_ID=your_database_id
      ```

5.  **Fetch Posts**:
    - A script to fetch posts from Notion is not included, but you can create one using the `@notionhq/client` library. This script would fetch the data and create the markdown files in `src/content/posts`.

## Contact Form

The contact form uses Formspree. To make it work, you need to:

1.  Create a new form on [Formspree](https://formspree.io/).
2.  Get your form ID.
3.  Replace `YOUR_FORM_ID` in `src/components/sections/Contact.tsx` with your actual form ID.

## Deployment

### Vercel (Recommended)

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com) and import your repository.
3.  Vercel will automatically detect that it is a Vite project and configure the build settings.
4.  Deploy!

### GitHub Pages

A GitHub Actions workflow is included to automate deployment to GitHub Pages.

1.  Push your code to your GitHub repository.
2.  Go to your repository's "Settings" > "Pages".
3.  Under "Build and deployment", select "GitHub Actions" as the source.
4.  The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
