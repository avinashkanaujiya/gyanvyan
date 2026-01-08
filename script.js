// Blog posts data - in a real application, this would come from a backend or static files
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        date: "2026-01-05",
        tags: ["html", "css", "javascript"],
        excerpt: "Learn the fundamentals of web development and start building your first website.",
        content: `# Getting Started with Web Development

Web development is an exciting field that combines creativity with technical skills. In this post, we'll explore the basics of getting started.

## What You Need to Know

To become a web developer, you should learn:

1. **HTML** - The structure of web pages
2. **CSS** - The styling and layout
3. **JavaScript** - The interactivity and logic

## HTML Basics

HTML (HyperText Markup Language) is the foundation of every website. Here's a simple example:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
\`\`\`

## CSS for Styling

CSS allows you to make your websites beautiful. You can change colors, fonts, layouts, and much more.

\`\`\`css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}
\`\`\`

## JavaScript for Interactivity

JavaScript brings your websites to life with dynamic features and interactivity.

\`\`\`javascript
document.querySelector('button').addEventListener('click', function() {
    alert('Hello, World!');
});
\`\`\`

## Next Steps

Practice is key! Start building small projects and gradually increase complexity. The web development community is incredibly supportive, so don't hesitate to ask questions.

> "The best way to learn web development is by building real projects."

Happy coding!`
    },
    {
        id: 2,
        title: "The Power of Responsive Design",
        date: "2026-01-03",
        tags: ["css", "responsive", "mobile"],
        excerpt: "Understanding responsive design principles and how to create websites that work on all devices.",
        content: `# The Power of Responsive Design

In today's multi-device world, responsive design is no longer optional—it's essential.

## Why Responsive Design Matters

With users accessing websites from phones, tablets, and desktops, your site needs to look great everywhere.

### Key Principles

1. **Fluid Grids** - Use percentages instead of fixed pixels
2. **Flexible Images** - Make images scale appropriately
3. **Media Queries** - Apply different styles for different screen sizes

## Media Queries Example

\`\`\`css
/* Mobile first approach */
.container {
    width: 100%;
    padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}
\`\`\`

## Modern CSS Grid and Flexbox

These CSS features make responsive design much easier:

\`\`\`css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}
\`\`\`

This creates a responsive grid that automatically adjusts the number of columns based on available space.

## Testing Your Design

Always test your responsive designs on real devices, not just browser dev tools. Real-world testing reveals issues you might miss otherwise.

Remember: responsive design is about creating the best experience for all users, regardless of their device!`
    },
    {
        id: 3,
        title: "Introduction to Modern JavaScript",
        date: "2026-01-01",
        tags: ["javascript", "es6", "programming"],
        excerpt: "Explore modern JavaScript features including arrow functions, async/await, and more.",
        content: `# Introduction to Modern JavaScript

JavaScript has evolved significantly with ES6 and beyond. Let's explore some modern features.

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions:

\`\`\`javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

## Destructuring

Extract values from arrays or objects easily:

\`\`\`javascript
const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name, age } = user;

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
\`\`\`

## Async/Await

Write asynchronous code that looks synchronous:

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

## Template Literals

Create strings with embedded expressions:

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;
\`\`\`

## Spread Operator

Expand arrays or objects:

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
\`\`\`

Modern JavaScript makes code more readable and maintainable. Keep learning and experimenting!`
    },
    {
        id: 4,
        title: "Building Better APIs",
        date: "2025-12-28",
        tags: ["api", "rest", "backend"],
        excerpt: "Best practices for designing and implementing RESTful APIs that developers love.",
        content: `# Building Better APIs

A well-designed API is crucial for any modern application. Let's explore best practices.

## RESTful Principles

REST (Representational State Transfer) is a popular architectural style:

- Use HTTP methods appropriately (GET, POST, PUT, DELETE)
- Use meaningful resource URLs
- Return appropriate status codes
- Version your API

## URL Design

Good URL structure is intuitive:

\`\`\`
GET    /api/v1/users          # Get all users
GET    /api/v1/users/123      # Get specific user
POST   /api/v1/users          # Create new user
PUT    /api/v1/users/123      # Update user
DELETE /api/v1/users/123      # Delete user
\`\`\`

## Status Codes

Use appropriate HTTP status codes:

- **200 OK** - Successful request
- **201 Created** - Resource created successfully
- **400 Bad Request** - Invalid request data
- **401 Unauthorized** - Authentication required
- **404 Not Found** - Resource doesn't exist
- **500 Internal Server Error** - Server error

## Error Handling

Return consistent error responses:

\`\`\`json
{
    "error": {
        "code": "VALIDATION_ERROR",
        "message": "Invalid email format",
        "field": "email"
    }
}
\`\`\`

## Documentation

Always document your API! Use tools like:

- Swagger/OpenAPI
- Postman Collections
- API Blueprint

Good documentation makes your API accessible and easier to use.

## Security

Never forget security:

- Use HTTPS
- Implement authentication (JWT, OAuth)
- Validate all inputs
- Rate limit requests
- Use CORS appropriately

Building great APIs takes practice, but following these principles will set you on the right path!`
    }
];

// State management
let currentTags = [];
let searchQuery = '';

// Theme management
const themeToggle = document.getElementById('darkModeToggle');
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', function() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Initialize blog
function init() {
    renderTags();
    renderPosts();
    setupEventListeners();
}

// Render tags
function renderTags() {
    const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
    const tagsContainer = document.getElementById('tagsFilter');

    tagsContainer.innerHTML = allTags.map(tag => `
        <button class="tag-btn" data-tag="${tag}">#${tag}</button>
    `).join('');
}

// Filter and render posts
function renderPosts() {
    let filteredPosts = blogPosts;

    // Filter by tags
    if (currentTags.length > 0) {
        filteredPosts = filteredPosts.filter(post =>
            currentTags.some(tag => post.tags.includes(tag))
        );
    }

    // Filter by search query
    if (searchQuery) {
        filteredPosts = filteredPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }

    const postsContainer = document.getElementById('postsContainer');

    if (filteredPosts.length === 0) {
        postsContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No posts found.</p>';
        return;
    }

    postsContainer.innerHTML = filteredPosts.map(post => `
        <div class="post-card" data-post-id="${post.id}">
            <h3>${post.title}</h3>
            <div class="post-meta">
                <span>📅 ${formatDate(post.date)}</span>
            </div>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="post-tag">#${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Add click listeners to post cards
    document.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', function() {
            const postId = parseInt(this.dataset.postId);
            showPost(postId);
        });
    });
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Show full post in modal
function showPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    const modal = document.getElementById('postModal');
    const postContent = document.getElementById('postContent');

    // Use marked.js to parse markdown
    const htmlContent = marked.parse(post.content);

    postContent.innerHTML = `
        <h1>${post.title}</h1>
        <div class="post-meta">
            <span>📅 ${formatDate(post.date)}</span>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="post-tag">#${tag}</span>`).join('')}
            </div>
        </div>
        <div class="post-full-content">
            ${htmlContent}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('postModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Tag filter
    document.getElementById('tagsFilter').addEventListener('click', function(e) {
        if (e.target.classList.contains('tag-btn')) {
            const tag = e.target.dataset.tag;

            if (currentTags.includes(tag)) {
                currentTags = currentTags.filter(t => t !== tag);
                e.target.classList.remove('active');
            } else {
                currentTags.push(tag);
                e.target.classList.add('active');
            }

            renderPosts();
        }
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', function(e) {
        searchQuery = e.target.value;
        renderPosts();
    });

    // Close modal
    document.getElementById('closeModal').addEventListener('click', closeModal);

    // Close modal on outside click
    document.getElementById('postModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
