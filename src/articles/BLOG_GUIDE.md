# Blog Article Guide

This guide explains how to add blog articles for your publications.

## Overview

When a publication has a `blog` link in `data.js`, clicking on the publication card will navigate to an internal blog article page. The article content is loaded from the `src/articles/` folder.

## Setting Up a Blog Article

### Step 1: Update data.js

In your publication object, set the `blog` link to a relative path that matches your publication ID:

```javascript
{
  id: 'modelling-underreported-crime',
  // ... other fields
  links: {
    doi: 'https://doi.org/...',
    pdf: '/pdf/...',
    code: 'https://github.com/...',
    video: '',
    talk: '',
    blog: '/blog/modelling-underreported-crime', // Internal blog link
  }
}
```

**Important:**
- Use `/blog/{publication-id}` format for internal blog articles
- If `blog` is empty, the publication card won't be clickable
- If `blog` starts with `http`, it will open in a new tab (external link)

### Step 2: Create Article File

Create a file in `src/articles/` named after your publication ID:

**File:** `src/articles/modelling-underreported-crime.jsx`

```jsx
import { parseMarkdown } from '../utils/markdown'

export default function ModellingUnderreportedCrimeArticle() {
  return (
    <div className="article-content">
      <h2>Introduction</h2>
      <p>
        Your article content here. You can use **bold** and *italic* markdown formatting.
      </p>
      
      <h3>Methodology</h3>
      <p>
        More content...
      </p>
      
      <h2>Results</h2>
      <p>
        Results and discussion...
      </p>
    </div>
  )
}
```

### Step 3: Use Markdown Formatting

You can use the `parseMarkdown` utility for markdown support:

```jsx
import { parseMarkdown } from '../utils/markdown'

export default function MyArticle() {
  return (
    <div className="article-content">
      <p>{parseMarkdown('This is **bold** and this is *italic*')}</p>
    </div>
  )
}
```

## Article Structure

The blog article page automatically displays:
- Publication title
- Authors (with your name highlighted)
- Conference/Year badges
- Tags
- Publication image
- Long abstract
- Your custom article content
- Links (DOI, PDF, Code, Video, Talk)

## Styling

The article content is styled with the `.blog-body` class. You can use:
- Headings: `<h2>`, `<h3>`
- Paragraphs: `<p>`
- Code: `<code>` for inline code, `<pre><code>` for blocks
- Lists: `<ul>`, `<ol>`
- Blockquotes: `<blockquote>`

All styles are defined in `src/pages/BlogArticle.css`.

