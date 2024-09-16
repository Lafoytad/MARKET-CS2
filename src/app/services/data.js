import { API_URL } from ".";

export async function getAllData() {
  try {
    const response = await fetch(`${API_URL}/data`, {
      method: "GET",
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      avatars: {},
      characters: {},
      musicKits: {},
      status: {},
      base_weapons: {},
      general: [],
      capsules: [],
      stickers: [],
      cases: [],
      items: [],
    };
  }
}

export async function getAllPosts() {
  try {
    const response = await fetch(`${API_URL}/news`, {
      method: "GET",
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
