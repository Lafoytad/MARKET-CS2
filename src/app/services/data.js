import { API_URL } from ".";

export async function getAllData() {
  try {
    const response = await fetch(`${API_URL}/data`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Или верните значение по умолчанию, если необходимо
  }
}

export async function getAllPosts() {
  try {
    console.log("API_URL:", API_URL);
    console.log("API_TOKEN:", process.env.API_TOKEN);
    const response = await fetch(`${API_URL}/news`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null; // Или верните значение по умолчанию, если необходимо
  }
}
