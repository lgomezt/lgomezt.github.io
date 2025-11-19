/**
 * Modular data file - modify this file to add/update Publications, Projects, and News
 * 
 * MARKDOWN FORMATTING:
 * You can use markdown-style syntax in text fields (description, abstract, content):
 * - **text** for bold text
 * - *text* for italic text
 * - You can nest them: **bold with *italic* inside**
 * 
 * To add a new publication:
 * - Copy one of the existing publication objects
 * - Update the id, image, conference, title, shortAbstract, longAbstract, tags, links, authors, and year fields
 * - shortAbstract: displayed in the card (keep it concise)
 * - longAbstract: full abstract (not displayed, for future use)
 * - links: object with doi, pdf, video, talk, blog, code (can be empty strings if not available)
 * - blog: if it's a relative path (e.g., '/blog/modelling-underreported-crime'), it will route internally to the blog article page. If it's an external URL (starts with http), it will open in a new tab. If empty, the publication card will not be clickable.
 * - code: link to code repository (GitHub, etc.)
 * - Add images: Use placeholder images (picsum.photos) or replace with your own image URLs
 * 
 * To add a new project:
 * - Copy one of the existing project objects
 * - Update the id, image, title, and description fields
 * 
 * To add a new news item:
 * - Copy one of the existing news objects
 * - Update the id, date, content, and blog fields
 * - date: use ISO format (YYYY-MM-DD) for proper chronological sorting (e.g., '2023-06-15')
 * - blog: optional field - if provided (e.g., '/blog/modelling-underreported-crime'), the news item will be clickable and link to the blog article. If empty or omitted, the item won't be clickable.
 * - visible: optional field - set to false to hide the news item without deleting it. Defaults to true if omitted.
 */

export const PUBLICATIONS = [
  {
    id: 'values-in-the-loop',
    image: '/values_in_the_loop_interface.png',
    conference: 'CUI Demo',
    title: 'Values in the Loop: Designing Interactive Optimization with Conversational Feedback',
    shortAbstract: "We present an interactive system for value-guided decision-making in constrained optimization problems, enabling users to discover, articulate, and refine their personal values through conversational reflection and visual feedback.",
    longAbstract: "",
    tags: ["Value elicitation", "Conversational User Interface"],
    links: {
      doi: 'https://dl.acm.org/doi/abs/10.1145/3719160.3735655',
      video: '',
      blog: '',
      talk: '',
      code: 'https://github.com/lgomezt/Values-in-the-Loop',
    },
    authors: "Lucas Gómez-Tobón & Edith Law",
    year: 2025,
    status: 'published',
    type: 'publication',
  },
  {
    id: 'modelling-underreported-crime',
    image: '/modelling_underreported_crime.png',
    conference: 'PLOS One',
    title: 'Modelling underreported spatio-temporal crime events',
    shortAbstract: "Official crime statistics are often biased by underreporting, creating a 'dark figure' that misleads security planning. We use a combinatorial Multi-Armed Bandit framework that combines police records with citizen emergency calls to reconstruct true crime rates, validating the approach with data from Bogotá.",
    longAbstract: "",
    tags: ["Multi-Armed Bandits", "Public Policy", "Crime Analysis", "AI for Social Good"],
    links: {
      doi: 'https://doi.org/10.1371/journal.pone.0287776',
      pdf: '/pdf/Modelling underreported spatio-temporal crime events (PlosONE, 2023).pdf',
      video: '',
      blog: '/blog/modelling-underreported-crime',
      talk: 'https://www.youtube.com/watch?v=ae74kxqFQVY',
      code: 'https://github.com/lgomezt/Modelling-underreported-crime',
    },
    authors: "Álvaro J. Riascos Villegas, Jose Sebastian Ñungo, Lucas Gómez-Tobón, Dulce Rubio, Mateo Gómez & Francisco Gómez",
    year: 2023,
    status: 'published',
    type: 'publication',
  },
  {
    id: 'perreology',
    image: '/spectogram.gif',
    conference: 'Master\'s Thesis',
    title: 'Hips don\'t lie: Leveraging Music in Statistical Analysis',
    shortAbstract: 'Can music consumption track economic sentiment? We created high-dimensional embeddings of Colombia\'s daily top charts to quantify acoustic patterns over time. Our results show that shifts in musical preferences are strongly correlated with the Consumer Confidence Index, explaining over 80% of its variance.',
    longAbstract: '',
    tags: ['Music Information Retrieval', 'Economic Forecasting'],
    links: {
      doi: 'https://repositorio.uniandes.edu.co/handle/1992/58861',
      pdf: '',
      video: '',
      talk: 'https://www.youtube.com/watch?v=ZcpSlVNnq0M&t=2s',
      blog: '',
    },
    authors: 'Lucas Gómez-Tobón',
    year: 2022,
    status: 'published',
    type: 'publication',
  },
];

export const PROJECTS = [
  {
    id: 'teaching-the-agent',
    image: '/webvideo.gif',
    title: 'Teaching the Agent',
    description: 'We learn better when we teach. We\'re designing agents that act as **less knowledgeable peers** to be taught by users.',
    abstract: '',
    tags: ['Education', 'Learning'],
    links: [],
    authors: 'Lucas Gómez-Tobón',
    year: "2025",
    status: 'in-progress',
    type: 'project',
  },
  {
    id: 'social-agentics',
    image: '/social_agentics_theoffice.jpeg',
    title: 'Social Agentics',
    description: 'Agents will be our collaborators. We are studying how to **align them with our values and social context** so they can *cooperate* with other agents on our behalf.',
    abstract: '',
    tags: ['Work', 'Cooperation', 'Agents'],
    links: [],
    authors: 'Lucas Gómez-Tobón',
    year: "2025",
    status: 'in-progress',
    type: 'project',
  },
  {
    id: 'value-elicitation',
    image: '/values_in_the_loop_interface.png',
    title: 'Value Elicitation',
    description: 'Technology is not neutral. We create tools that help users **reflect on their values and navigate complex trade-offs**, specifically in contexts like carpooling and job searching.',
    abstract: '',
    tags: ['Values', 'Preferences'],
    links: [],
    authors: 'Lucas Gómez-Tobón',
    year: null,
    status: 'in-progress',
    type: 'project',
  },
];

export const NEWS = [
  {
    id: 'news-1',
    date: '2023-10-31',
    content: 'Guided an indigenous student research initiative to evaluate an HPV educational intervention, resulting in a poster presentation at [EAAMO \'23](https://www.eaamo.org/projects/rednacecyt-md4sg-2023-summer-of-science-program).',
    blog: '',
    visible: false,
  },
  {
    id: 'news-2',
    date: '2023-10-09',
    content: 'I will present our paper, [Modelling Underreported Spatio-Temporal Crime Events](/blog/modelling-underreported-crime), at the [XV Latin American Congress of Statistical Societies (CLATSE)](https://congresoestadistica.sce.org.co).',
    blog: '',
    visible: false,
  },
  {
    id: 'news-3',
    date: '2023-09-22',
    content: 'I developed the [tidyX](https://tidyx.readthedocs.io/en/latest/) Python library to facilitate text preprocessing for Spanish social media data.',
    blog: '',
    visible: true,
  },
  {
    id: 'news-4',
    date: '2023-07-26',
    content: 'Colombia\'s former Minister of Finance discussed our research, [Modelling Underreported Spatio-Temporal Crime Events](/blog/modelling-underreported-crime), in a [radio interview](https://alacarta.caracol.com.co/audio/caracol_radio_6amhoyporhoy_20230726_070000_080000?mm_time=2206&mm_time_id=caracol_radio_6amhoyporhoy_20230726_070000_080000&autoplay=true).',
    blog: '',
    visible: false,
  },
  {
    id: 'news-5',
    date: '2025-10-06',
    content: 'I am co-organizing the [Futures Lab](https://blog.google/intl/en-ca/company-news/outreach-initiatives/our-new-partnership-with-the-university-of-waterloo-on-the-future-of-learning-and-work/), an 8-week **AI prototyping workshop** with Google, where we are actively studying how GenAI tools influence collaboration between technical and non-technical teams.',
    blog: '',
    visible: true,
  },
  {
    id: 'news-6',
    date: '2025-10-22',
    content: 'My research on [Learning by Teaching](/blog/teaching-the-agent) has been integrated into the new **Google Chair in the Future of Work.**',
    blog: '/blog/teaching-the-agent',
    visible: true,
  },
];

