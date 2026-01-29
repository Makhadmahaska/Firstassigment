const API_KEY_NEWS = "YOUR_NEWSAPI_KEY";
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY_NEWS}`;

async function fetchBusinessNews() {
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = "Loading news...";

  try {
    const response = await fetch(url);
    const data = await response.json();
    newsDiv.innerHTML = "";

    data.articles.forEach(article => {
      const div = document.createElement("div");
      div.className = "article";
      div.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
      newsDiv.appendChild(div);
    });
  } catch (err) {
    newsDiv.innerText = "Error loading news.";
    console.error(err);
  }
}

fetchBusinessNews();
