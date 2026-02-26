const express = require("express");
const axios = require("axios");




const CMS_URL = "http://directus:8055";
const ACCESS_TOKEN = "23zq-oq_0smZZDcApHp9ce8UJxs7ZBQq";
let cached_articles = [];




const app = express();







const generateHTML = (articles) =>{
  let html = `
    <html>
      <head>
        <title>Articles</title>
      </head>
      <body>
        <h1>Articles</h1>
        <ul>
  `;

  articles.forEach(article => {
    html += `
      <li style="margin-bottom:20px;">
        <h3>${article.name || "Unknown"}</h3>
        <p>${article.content || "No Content"}</p>
        <p><strong>Author:</strong> 
          ${article.author ? article.author.name : "Unknown"}
        </p>
      </li>
    `;
  });

  html += `
        </ul>
      </body>
    </html>
  `;

  return html;
};




app.get("/", async (req, res) => {
  if(!cached_articles || cached_articles.length == 0) await refresh_articles();
  let html = generateHTML(cached_articles);
  res.send(html);
});




app.get("/access", async (req, res) => {
  try {
    const response = await axios.get(`${CMS_URL}/items/articles`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      },
      params: {
        fields: ["*", "author.*"]
      }
    });

    const articles = response.data.data;

    let html = generateHTML(articles);

    res.send(html);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("Error loading articles");
  };
});




const refresh_articles = async (req, res) =>{
  try{
    const response = await axios.get(`${CMS_URL}/items/articles`, {
      params: {
        fields: ["*", "author.*"]
      }
    });

    cached_articles = response.data.data;
    
    console.log("cached_articles refresh");
  }
  catch(err){
    console.error(err);
  };
};




app.get("/refresh", async (req, res) => {
  try{
    await refresh_articles();
    res.send("OK");
  }
  catch(err){
    console.error(err.response?.data || err.message);
    res.status(500).send("Error loading articles");
  }
});




refresh_articles();




setInterval(() => {
  refresh_articles();
}, 60000);







app.listen(4000, () => {
  console.log("Frontend running on port 4000");
});
