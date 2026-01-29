const API_KEY = "46ca16545d2e403eacb1c23eb241f468";
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

async function fetchBusinessNews() {
  const newsDiv = document.getElementById("news");
  newsDiv.innerHTML = "Loading news...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    newsDiv.innerHTML = "";

    data.articles.forEach(article => {
      const div = document.createElement("div");
      div.className = "article";
      div.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
      newsDiv.appendChild(div);
    });
  } catch (error) {
    newsDiv.innerText = "Error loading news.";
    console.error("Error fetching news:", error.message);
  }
}

fetchBusinessNews();
