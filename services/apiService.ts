// This is a sample function to demonstrate how to use an API key.
// In a real application, you would replace the URL with the actual API endpoint.

export const fetchDataFromApi = async () => {
  const apiKey = import.meta.env.VITE_SULLIVAN_API_KEY;

  if (!apiKey) {
    throw new Error('API key is missing. Please set VITE_SULLIVAN_API_KEY.');
  }

  // Most APIs expect the key in an 'Authorization' header, often with 'Bearer'.
  // Check your specific API's documentation to be sure.
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  // We'll use a placeholder API for this example.
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
};
