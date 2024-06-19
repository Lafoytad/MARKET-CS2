export async function GET(request) {
  try {
    const newsResponse = await fetch(
      "https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=730&count=10&maxlength=300&format=json"
    );
    if (!newsResponse.ok) {
      throw new Error("Ошибка при получении данных");
    }
    const newsData = await newsResponse.json();
    const newsItems = newsData.appnews.newsitems;
    return new Response(JSON.stringify(newsItems));
  } catch (error) {
    console.error("Произошла ошибка:", error);
    return new Response("Произошла ошибка при получении данных", {
      status: 500,
    });
  }
}
