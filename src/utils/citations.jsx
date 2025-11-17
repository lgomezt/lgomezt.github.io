import React from 'react'

/**
 * Parses citation syntax and converts it to React elements
 * Supports:
 * - [cite_start]text[cite: numbers] - creates a citation with superscript numbers
 * 
 * @param {string} text - The text to parse
 * @returns {Array|string} Array of React elements or original text if no citations
 */
export function parseCitations(text) {
  if (!text || typeof text !== 'string') {
    return text
  }

  // Check if text contains citation markers
  if (!text.includes('[cite_start]') && !text.includes('[cite:')) {
    return text
  }

  const parts = []
  let key = 0
  let i = 0

  while (i < text.length) {
    // Look for [cite_start]
    const citeStartIndex = text.indexOf('[cite_start]', i)
    if (citeStartIndex === -1) {
      // No more citations, add remaining text
      if (i < text.length) {
        parts.push(text.substring(i))
      }
      break
    }

    // Add text before citation start
    if (citeStartIndex > i) {
      const beforeText = text.substring(i, citeStartIndex)
      if (beforeText) {
        parts.push(beforeText)
      }
    }

    // Find the corresponding [cite: ...]
    const citeEndIndex = text.indexOf('[cite:', citeStartIndex + 12)
    if (citeEndIndex === -1) {
      // No closing citation, add rest as text
      parts.push(text.substring(citeStartIndex + 12))
      break
    }

    // Extract the citation text (between [cite_start] and [cite:)
    const citationText = text.substring(citeStartIndex + 12, citeEndIndex)

    // Extract citation numbers (between [cite: and ])
    const citeCloseIndex = text.indexOf(']', citeEndIndex)
    if (citeCloseIndex === -1) {
      // Malformed citation, add rest as text
      parts.push(citationText)
      parts.push(text.substring(citeEndIndex))
      break
    }

    const citationNumbers = text.substring(citeEndIndex + 6, citeCloseIndex).trim()

    // Create citation element
    parts.push(
      <span key={`cite-${key++}`} className="citation">
        {citationText}
        <sup className="citation-numbers">{citationNumbers}</sup>
      </span>
    )

    // Continue after the citation
    i = citeCloseIndex + 1
  }

  return parts.length > 1 ? parts : (parts[0] || text)
}

