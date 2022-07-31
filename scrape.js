const PORT = process.env.PORT || 8080;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

let articles = [];

app.get("/",(req,res) => {
  res.json("Welcome to news api!!");
})

app.get("/country/:id",(req,res) => {
  console.log(req.params.id);

  articles = [];
  const url = `https://www.theguardian.com/world/${req.params.id}`;
  axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    $("div.fc-item__container").each(function(){
       const title = $(this).find(".fc-item__content .fc-item__header h3 a span span").text();
       const image = $(this).find(".fc-item__media-wrapper .fc-item__image-container picture img").attr("src");
       const link = $(this).find(".fc-item__content .fc-item__header h3 a").attr("href");
       const date = $(this).find(".fc-item__content .fc-item__meta .fc-item__timestamp .fc-timestamp__text").text();

      const newDate = date.slice(11,date.length);
      

      if(newDate === ""){
        articles.push({
          news:{
          title,
          image,
          link
         }
        })
      }else{
        articles.push({
          news:{
          title,
          image,
          link,
          newDate
         }
        })
      }
      });


      res.json(articles);
  })
  .catch(err => console.log(err));
});
app.get("/news",(req,res) => {
    articles = [];
    const url = "https://www.theguardian.com/world";

    axios.get(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        $("div.fc-item__container").each(function(){
           const title = $(this).find(".fc-item__content .fc-item__header h3 a span span").text();
           const image = $(this).find(".fc-item__media-wrapper .fc-item__image-container picture img").attr("src");
           const link = $(this).find(".fc-item__content .fc-item__header h3 a").attr("href");
           const date = $(this).find(".fc-item__content .fc-item__meta .fc-item__timestamp .fc-timestamp__text").text();

          const newDate = date.slice(11,date.length);
          

          if(newDate === ""){
            articles.push({
              news:{
              title,
              image,
              link
             }
            })
          }else{
            articles.push({
              news:{
              title,
              image,
              link,
              newDate
             }
            })
          }
          });


          res.json(articles);
      })
      .catch(err => console.log(err));
});
app.get("/sport",(req,res) => {
  articles = [];
  const url = "https://www.theguardian.com/uk/sport";

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("div.fc-item__container").each(function(){
         const title = $(this).find(".fc-item__content .fc-item__header h3 a span span").text();
         const image = $(this).find(".fc-item__media-wrapper .fc-item__image-container picture img").attr("src");
         const link = $(this).find(".fc-item__content .fc-item__header h3 a").attr("href");

         articles.push({
          news:{
          title,
          image,
          link
         }
        })

        });


        res.json(articles);
    })
    .catch(err => console.log(err));
})
app.get("/basketball",(req,res) => {
  articles = [];
  const url = "https://www.theguardian.com/sport/basketball";

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("div.fc-item__container").each(function(){
         const title = $(this).find(".fc-item__content .fc-item__header h3 a span span").text();
         const image = $(this).find(".fc-item__media-wrapper .fc-item__image-container picture img").attr("src");
         const link = $(this).find(".fc-item__content .fc-item__header h3 a").attr("href");

         articles.push({
          news:{
          title,
          image,
          link
         }
        })

        });


        res.json(articles);
    })
    .catch(err => console.log(err));
})
app.get("/football/:team",(req,res) => {
  articles = [];

       url = `https://www.theguardian.com/football/${req.params.team}`;

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("div.fc-item__container").each(function(){
         const title = $(this).find(".fc-item__content .fc-item__header h3 a span span").text();
         const image = $(this).find(".fc-item__media-wrapper .fc-item__image-container picture img").attr("src");
         const link = $(this).find(".fc-item__content .fc-item__header h3 a").attr("href");

         articles.push({
          news:{
          title,
          image,
          link
         }
        })

        });


        res.json(articles);
    })
    .catch(err => console.log(err));
})
app.get("/football",(req,res) => {
  articles = [];

       url = `https://www.theguardian.com/football`;

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("div.fc-item__container").each(function(){
         const title = $(this).find(".fc-item__content .fc-item__header h3 a span span").text();
         const image = $(this).find(".fc-item__media-wrapper .fc-item__image-container picture img").attr("src");
         const link = $(this).find(".fc-item__content .fc-item__header h3 a").attr("href");

         articles.push({
          news:{
          title,
          image,
          link
         }
        })

        });


        res.json(articles);
    })
    .catch(err => console.log(err));
})
app.get("/news",async(req,res) => {
  const url = "https://www.theguardian.com/world";

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      $("div.fc-item__container").each(function(){
         const title = $(this).find(".fc-item__content .fc-item__header h3 a span span").text();
         const image = $(this).find(".fc-item__media-wrapper .fc-item__image-container picture img").attr("src");
         const link = $(this).find(".fc-item__content .fc-item__header h3 a").attr("href");

         articles.push({
          news:{
          title,
          image,
          link
         }
        })

        });


        res.json(articles);
    })
    .catch(err => console.log(err));
})

app.listen(PORT);