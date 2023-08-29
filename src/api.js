export const fetchBeers = async (page) => {
  try {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch beers");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchBeersFromLS = () => {
  const data = localStorage.getItem("beers");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
