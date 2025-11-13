const BASE_URL = "https://dummyjson.com/products";

export async function GetPosts(category, limit = 10) {
  let url = "";
  if (category) {
    url = `${BASE_URL}/category/${category}?limit=${limit}`;
  } else {
    url = `${BASE_URL}?limit=${limit}`;
  }
  try {
    const response = await fetch(url);
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
