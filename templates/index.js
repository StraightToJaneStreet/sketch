export default (obj) => {
  const { attributes, files, publicPath, title, meta } = obj;
  const { link, scripts, html: htmlAttributes } = attributes;
  console.log(obj);

  return `
<!DOCTYPE html>
<html ${htmlAttributes}>
<head>
  ${meta}
  <title>${title}</title>
  ${link}
</head>
<body>
  <div class="container">
    <div id="sketch-root"></div>
  </div>
  ${scripts}
</body>
</html>
  `;
}
