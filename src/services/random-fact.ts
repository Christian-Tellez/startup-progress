const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

export const fetchRandomFact = async (): Promise<string> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    console.error("Error fetching random fact");
    return "";
  }

  const { text } = (await res.json()) as { text: string };
  return text;
};
