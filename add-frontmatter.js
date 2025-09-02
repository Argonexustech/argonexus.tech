const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, 'posts');
const postsData = JSON.parse(fs.readFileSync('posts.json', 'utf8'));

fs.readdirSync(postsDir)
  .filter(file => file.endsWith('.md'))
  .forEach(file => {
    const filePath = path.join(postsDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);

    const post = postsData.find(p => p.id === file.replace(/\.md$/, ''));

    if (post) {
      const newContent = matter.stringify(content, post);
      fs.writeFileSync(filePath, newContent);
      console.log(`Added frontmatter to ${file}`);
    } else {
      console.log(`No data found for ${file} in posts.json`);
    }
  });