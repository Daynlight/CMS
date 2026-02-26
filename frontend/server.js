const express = require("express");
const axios = require("axios");

const app = express();
const CMS_URL = "http://directus:8055";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${CMS_URL}/items/articles`, {
      params: {
        filter: {
          status: {
            _eq: "published"
          }
        },
        fields: ["*", "author.*"]
      }
    });

    const articles = response.data.data;

    let html = `
      <html>
        <head>
          <title>Articles</title>
        </head>
        <body>
          <h1>Published Articles</h1>
          <ul>
    `;

    articles.forEach(article => {
      html += `
        <li style="margin-bottom:20px;">
          <h3>${article.name || "No Title"}</h3>
          <p>${article.content || ""}</p>
          <p><strong>Author:</strong> 
            ${article.author ? article.author.name : "No Author"}
          </p>
        </li>
      `;
    });

    html += `
          </ul>
        </body>
      </html>
    `;

    res.send(html);

  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("Error loading articles");
  }
});

app.listen(4000, () => {
  console.log("Frontend running on port 4000");
});