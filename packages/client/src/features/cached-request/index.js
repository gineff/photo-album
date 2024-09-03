export const cacheRequests = (fn, ttl = 900000) =>{ 
  return async function(...args) {
      const cacheKey = JSON.stringify(args);

      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const isExpired = (Date.now() - timestamp) > ttl;

          if (!isExpired) {
              return data; 
          } else {
              localStorage.removeItem(cacheKey); 
          }
      }

      const result = await fn(...args);

      const dataToCache = {
          data: result,
          timestamp: Date.now()
      };
      localStorage.setItem(cacheKey, JSON.stringify(dataToCache));
      return result;
  };
}
