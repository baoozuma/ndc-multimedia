const images = {};
const imageFiles = import.meta.globEager('../assets/**/*.{png,jpg,jpeg,svg}');

Object.keys(imageFiles).forEach((filePath) => {
  const imageName = filePath.replace(/^..\/assets\//, '');
  images[imageName] = imageFiles[filePath].default;
});

export default images;
