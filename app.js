import newsData from "./data.js";

const newsDatas = async () => {
  try {
    // const response = await fetch("");
    // const data = await response.json();
    console.log(newsData);

    const newsList = document.querySelector(".lang__news-lists");

    newsList.innerHTML = "";

    newsData.slice(0, 3).forEach((news) => {
      const listItem = document.createElement("li");
      listItem.className = "lang__news-lists-list";

      listItem.innerHTML = `
        <div class="lang__news-lists-list-l">
          <h1 class="lang__news-lists-list-l-title">${news.title}</h1>
          <p class="lang__news-lists-list-l-content">${news.content}</p>
          <p class="lang__news-lists-list-l-time">${news.date}</p>
        </div>
        <div class="lang__news-lists-list-r">
          <img class="lang__news-lists-list-r-img" src="${news.imageUrl}" alt="news_pic" />
        </div>
      `;

      newsList.appendChild(listItem);
    });
  } catch (err) {
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", newsDatas);
