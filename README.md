# Personal Developer Portfolio

A minimal, premium, and highly responsive personal developer portfolio website designed for **Savyasachi Mishra**. 

It uses a clean, editorial layout featuring:
- A warm, paper-like off-white background (`#faf8f5`).
- Confident serif/slab-serif headings (`Lora`) paired with clean sans-serif body copy (`Inter`).
- A single deliberate, muted ink-blue accent (`#1a3644`).
- Generous whitespace, precise typography scales, and subtle hover animations.
- Accessible markup (semantic HTML5 structure, ARIA roles, high contrast ratios, and clean focus outlines).
- Zero external build dependencies, resulting in instant load speeds (100/100 Lighthouse performance).

---

## 📂 Project Structure

- `index.html` — The main structural page (fully annotated with HTML comments for customization).
- `styles.css` — Custom CSS variables, responsive design, typography, layout grid, and interactive hover states.
- `script.js` — High-performance scroll-spy navigation tracking (highlights the active link as you scroll) and click-to-copy email contact handler.
- `.gitignore` — standard exclusion list for system/IDE metadata.

---

## 🛠️ Customizing the Projects

The `index.html` file includes 6 structured project slots (5 populated with filler data, and 1 empty slot). 
To edit or replace them, search for the `Projects Section` comment block in `index.html`:

```html
<!-- 
  =========================================
  PROJECT 1: Student Skill Tracker
  To customize this project, edit the content below.
  =========================================
-->
<article class="project-card">
  <div class="project-content">
    <h3 class="project-title">Your Project Name</h3>
    <div class="project-tags">
      <span class="tag">Tech 1</span>
      <span class="tag">Tech 2</span>
    </div>
    <p class="project-description">
      Your project description goes here. Make it brief and impact-oriented.
    </p>
  </div>
  <div class="project-links">
    <a href="https://github.com/your-username/repo-name" target="_blank" rel="noopener noreferrer" class="project-link-item">
      <!-- SVG Code Icon -->
      <span>Code</span>
    </a>
    <a href="https://live-demo-link.com" target="_blank" rel="noopener noreferrer" class="project-link-item">
      <!-- SVG External Link Icon -->
      <span>Live Demo</span>
    </a>
  </div>
</article>
```

If a project doesn't have a live demo or open-source repository yet, you can add the `.link-disabled` class to its anchor tag, and change the `href` to `#` to styled it as a clean disabled placeholder.

---

## 🚀 Running Locally

Since this project consists of raw HTML, CSS, and JS, you do not need to run `npm install`. You can run it instantly using any local server:

### Option A: VS Code Live Server Extension
1. Install the **Live Server** extension in VS Code.
2. Open `index.html` and click **Go Live** in the status bar at the bottom right.

### Option B: Python Local Server
If you have Python installed, run this command in your terminal:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🌐 Deploying to Production

This project is optimized to run as a static site and can be deployed entirely for free:

### Deploying to Vercel (Recommended)
1. Initialize a Git repository, commit the files, and push them to GitHub/GitLab.
2. Log into your [Vercel account](https://vercel.com).
3. Click **Add New** > **Project** and import your GitHub repository.
4. Vercel will automatically detect the static project. Click **Deploy**.
5. Once complete, you will receive a production URL (e.g. `yourproject.vercel.app`).

### Deploying to GitHub Pages
1. Go to your repository settings on GitHub.
2. Scroll down to **Pages** in the left sidebar.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select the `main` or `master` branch and folder `/ (root)`.
5. Click **Save**. Within a few minutes, your site will be live at `https://<your-username>.github.io/<repo-name>/`.
