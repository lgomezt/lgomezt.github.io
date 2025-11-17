import React from 'react'

/**
 * Parses markdown-style text and converts it to React elements
 * Supports:
 * - **text** for bold
 * - *text* for italic
 * - [text](url) for links
 * - Handles nested cases like **bold with *italic* inside** and [**bold link**](url)
 * 
 * @param {string} text - The text to parse
 * @returns {Array|string} Array of React elements or original text if no markdown
 */
export function parseMarkdown(text) {
  if (!text || typeof text !== 'string') {
    return text
  }

  // Check if text contains any markdown
  if (!text.includes('*') && !text.includes('[')) {
    return text
  }

  const result = parseText(text, 0)
  
  // If result is a string, return it directly
  if (typeof result === 'string') {
    return result
  }
  
  // If result is an array, wrap it in a fragment to keep everything inline
  return <>{result}</>
}

/**
 * Recursively parses text for markdown formatting
 * @param {string} text - Text to parse
 * @param {number} keyOffset - Offset for React keys
 * @returns {Array} Array of React elements and strings
 */
function parseText(text, keyOffset = 0) {
  const result = []
  let key = keyOffset
  let i = 0

  // Helper to normalize parseText result to array
  const normalizeToArray = (value) => {
    if (Array.isArray(value)) return value
    if (typeof value === 'string') return [value]
    return [value]
  }

  while (i < text.length) {
    // Check for [link](url) first (must be before bold/italic to allow markdown inside links)
    if (text[i] === '[') {
      const endBracket = text.indexOf(']', i + 1)
      if (endBracket !== -1 && endBracket < text.length - 1 && text[endBracket + 1] === '(') {
        const startParen = endBracket + 1
        const endParen = text.indexOf(')', startParen + 1)
        if (endParen !== -1) {
          // Add text before link
          if (i > 0) {
            const before = text.substring(0, i)
            if (before) {
              const beforeParts = normalizeToArray(parseText(before, key))
              result.push(...beforeParts)
              key += before.length
            }
          }
          
          // Parse link text (may contain bold/italic)
          const linkText = text.substring(i + 1, endBracket)
          const linkUrl = text.substring(startParen + 1, endParen)
          const linkParts = parseText(linkText, key)
          
          result.push(
            <a 
              key={`link-${key++}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0891b2', textDecoration: 'underline', display: 'inline' }}
            >
              {linkParts}
            </a>
          )
          
          // Continue with remaining text
          text = text.substring(endParen + 1)
          i = 0
          continue
        }
      }
    }
    
    // Check for **bold** (must be before *italic*)
    if (text.substring(i, i + 2) === '**') {
      const endBold = text.indexOf('**', i + 2)
      if (endBold !== -1) {
        // Add text before bold
        if (i > 0) {
          const before = text.substring(0, i)
          if (before) {
            const beforeParts = normalizeToArray(parseText(before, key))
            result.push(...beforeParts)
            key += before.length
          }
        }
        
        // Parse content inside bold (may contain italic or links)
        const boldContent = text.substring(i + 2, endBold)
        const boldParts = parseText(boldContent, key)
        result.push(<strong key={`bold-${key++}`}>{boldParts}</strong>)
        
        // Continue with remaining text
        text = text.substring(endBold + 2)
        i = 0
        continue
      }
    }
    
    // Check for *italic* (not part of **)
    if (text[i] === '*' && 
        (i === 0 || text[i - 1] !== '*') && 
        (i === text.length - 1 || text[i + 1] !== '*')) {
      const endItalic = text.indexOf('*', i + 1)
      if (endItalic !== -1 && 
          (endItalic === text.length - 1 || text[endItalic + 1] !== '*')) {
        // Add text before italic
        if (i > 0) {
          const before = text.substring(0, i)
          if (before) {
            const beforeParts = normalizeToArray(parseText(before, key))
            result.push(...beforeParts)
            key += before.length
          }
        }
        
        // Parse content inside italic (may contain links)
        const italicContent = text.substring(i + 1, endItalic)
        const italicParts = parseText(italicContent, key)
        result.push(<em key={`italic-${key++}`}>{italicParts}</em>)
        
        // Continue with remaining text
        text = text.substring(endItalic + 1)
        i = 0
        continue
      }
    }
    
    i++
  }

  // Add remaining text
  if (text) {
    result.push(text)
  }

  // Return array if we have multiple parts, otherwise return the single element or empty array
  if (result.length === 0) {
    return []
  }
  if (result.length === 1 && typeof result[0] === 'string') {
    return result[0]
  }
  return result
}
