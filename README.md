# Personal Blog

A modern, responsive personal blog built with vanilla HTML, CSS, and JavaScript. Features a clean design, dark mode, markdown support, and filtering capabilities.

## Features

- **Clean, Modern Design** - Minimalist interface focused on content
- **Dark Mode** - Toggle between light and dark themes with preference persistence
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- **Markdown Support** - Write blog posts in markdown format
- **Category Filtering** - Organize and filter posts by categories
- **Tag System** - Tag posts and filter by multiple tags
- **Search Functionality** - Search posts by title, excerpt, or tags
- **Modal Post View** - Read full posts in an elegant modal overlay

## Quick Start

### Option 1: Open Locally

Simply open `index.html` in your web browser. No build process or server required!

### Option 2: Use a Local Server

For a better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # All styling including dark mode
├── script.js           # Blog functionality and data
└── README.md           # This file
```

## Adding Your Own Blog Posts

Blog posts are currently stored in the `blogPosts` array in `script.js`. To add a new post:

1. Open `script.js`
2. Find the `blogPosts` array (near the top of the file)
3. Add a new post object following this structure:

```javascript
{
    id: 5,  // Unique ID
    title: "Your Post Title",
    date: "2026-01-08",  // YYYY-MM-DD format
    category: "Your Category",
    tags: ["tag1", "tag2", "tag3"],
    excerpt: "A brief description of your post that appears on the card.",
    content: `# Your Post Title

Your markdown content here...

## Subheading

More content with **bold** and *italic* text.

\`\`\`javascript
// Code blocks are supported
console.log('Hello, World!');
\`\`\`
`
}
```

### Markdown Support

The blog uses [marked.js](https://marked.js.org/) for markdown parsing. Supported features include:

- Headings (`# H1`, `## H2`, etc.)
- **Bold** and *italic* text
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes
- Links and images

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #212529;
    --accent: #0066cc;
    /* ... more variables */
}

[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --text-primary: #e4e4e4;
    --accent: #4a9eff;
    /* ... more variables */
}
```

### Changing Blog Title

Edit the `<h1 class="logo">` in `index.html`:

```html
<h1 class="logo">Your Blog Name</h1>
```

Also update the `<title>` tag and the "About" section.

### Changing About Text

Edit the about text in the sidebar section of `index.html`:

```html
<p class="about-text">Your custom about text here.</p>
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Select the branch to deploy (usually `main`)
4. Your blog will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Sign up for [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Your blog is live!

### Vercel

1. Sign up for [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with CSS Grid, Flexbox, and CSS Variables
- **JavaScript (ES6+)** - Functionality
- **Marked.js** - Markdown parsing

## Future Enhancements

Some ideas for extending the blog:

- Connect to a backend API or CMS (like Contentful, Strapi)
- Add RSS feed support
- Implement reading time estimates
- Add social sharing buttons
- Include comment system (Disqus, Giscus)
- Add pagination for large numbers of posts
- Implement static site generation with a build step
- Add image optimization
- Include analytics

## License

This project is open source and available under the MIT License.

## Credits

Built with vanilla JavaScript - no frameworks required!

---

Happy blogging! 📝
