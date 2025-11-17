/**
 * Example article component
 * 
 * To create a new article:
 * 1. Copy this file and rename it to match your publication ID (e.g., 'modelling-underreported-crime.jsx')
 * 2. Replace the content with your article
 * 3. Update the BlogArticle.jsx component to import and render your article
 * 
 * You can use the parseMarkdown utility for markdown formatting:
 * import { parseMarkdown } from '../utils/markdown'
 */

import { parseMarkdown } from '../utils/markdown'

export default function ExampleArticle() {
  return (
    <div className="article-content">
      <h2>Introduction</h2>
      <p>
        This is an example article. Replace this content with your actual article text.
        You can use **bold** and *italic* markdown formatting.
      </p>
      
      <h3>Section Title</h3>
      <p>
        More content goes here. You can structure your article with headings, paragraphs,
        lists, code blocks, and more.
      </p>
      
      <h2>Conclusion</h2>
      <p>
        Wrap up your article here.
      </p>
    </div>
  )
}

