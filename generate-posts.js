const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, 'posts');
const posts = fs.readdirSync(postsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const filePath = path.join(postsDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      id: file.replace(/\.md$/, ''),
      ...data,
      file: `posts/${file}`
    };
  });

fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));

console.log('posts.json generated successfully!');