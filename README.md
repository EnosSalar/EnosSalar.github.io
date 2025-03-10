# Personal Developer Portfolio Website

This repository contains the code for my personal developer portfolio website hosted at [enosalar.github.io](https://enosalar.github.io).

## Features

- Responsive design that works on all devices
- Modern, clean UI with smooth animations
- Sections for showcasing skills, projects, and contact information
- Interactive elements with JavaScript

## Structure

- `index.html` - Main HTML structure of the website
- `styles.css` - Primary stylesheet with all design elements
- `additional-styles.css` - Supplementary styles for enhanced interactivity
- `script.js` - JavaScript functionality for interactive elements

## How to Update

### To modify content:

1. Edit the `index.html` file to change text, links, or section content
2. Update project information in the projects section
3. Modify skills or add new skill cards as needed

### To customize styles:

1. Edit the `styles.css` file to change colors, spacing, or layout
2. Update the CSS variables at the top of the stylesheet to quickly change the color scheme:

```css
:root {
    --primary-color: #4f46e5; /* Main brand color */
    --primary-dark: #4338ca; /* Darker shade for hover states */
    --secondary-color: #10b981; /* Accent color */
    /* Other variables... */
}
```

### To add new projects:

Add a new project card by copying the existing HTML structure:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Image or placeholder -->
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
    </div>
</div>
```

## Adding Images

To add your profile image or project screenshots:

1. Create an `images` directory in the repository
2. Add your images to this directory
3. Reference them in the HTML using relative paths:

```html
<img src="images/profile.jpg" alt="Enos Salar">
```

## Local Development

To work on this site locally:

1. Clone the repository
2. Open the project in your code editor
3. Use a local development server to view changes

## Deployment

The site is automatically deployed through GitHub Pages whenever changes are pushed to the main branch.