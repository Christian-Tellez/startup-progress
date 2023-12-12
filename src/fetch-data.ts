const fetchRandomFact = async () => {
  const response = await fetch(
    "https://uselessfacts.jsph.pl/api/v2/facts/random"
  );
  return await response.json();
};

export { fetchRandomFact };
