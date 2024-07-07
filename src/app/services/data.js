import { API_URL } from ".";

export async function getAllData() {
  const response = await fetch(`${API_URL}/data`, { cache: "force-cache" });
  return await response.json();
}

export async function getAllPosts() {
  const response = await fetch(`${API_URL}/news`, {
    next: { revalidate: 3600 },
  });
  return await response.json();
}
