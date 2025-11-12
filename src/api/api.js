const BASE_URL = "https://dummyjson.com/products";

export async function GetPosts(limit = 10) {
  try {
    const response = await fetch(`${BASE_URL}?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`Something went wrong, Status: ${response.status}`);
    }

    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function GetSinglePost(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Something went wrong, Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
