const result = (color, message) => {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Dynamic Background Color</title>
        <style>
          body {
            background-color: #${color};
          }
        </style>
      </head>
      <body>
        <p>${message}</p>
      </body>
    </html>
  `;
    return html;
}

module.exports = result;