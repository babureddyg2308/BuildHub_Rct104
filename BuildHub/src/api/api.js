
const fetchLabTests = async () => {
    try {
      const response = await fetch('/api/labTests.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching lab tests:', error);
      throw error;
    }
  };
  
  export { fetchLabTests };
  