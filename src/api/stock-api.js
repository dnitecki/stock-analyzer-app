const basePath = "https://finnhub.io/api/v1";
const basePathAV = "https://www.alphavantage.co/query";
const basePathIEX = "https://cloud.iexapis.com/stable";

//Date Handeling
const date = new Date().toISOString().split("T")[0];
let fromDate = new Date(date);
fromDate.setDate(fromDate.getDate() - 3);
let newsFrom = new Date(fromDate).toISOString().split("T")[0];
let newsTo = date;

//API Calls
export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY} `;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
export const fetchQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY} `;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
export const fetchHistoricalData = async (
  stockSymbol,
  resolution,
  from,
  to
) => {
  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY} `;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
export const fetchStockNews = async (stockSymbol) => {
  const url = `${basePath}/company-news?symbol=${stockSymbol}&from=${newsFrom}&to=${newsTo}&token=${process.env.REACT_APP_API_KEY} `;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
export const fetchSP500 = async () => {
  const url = `${basePathAV}?function=GLOBAL_QUOTE&symbol=VOO&apikey=${process.env.REACT_APP_AV_API_KEY} `;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
export const fetchStockFundamentals = async (stockSymbol) => {
  const url = `${basePathAV}?function=OVERVIEW&symbol=${stockSymbol}&apikey=${process.env.REACT_APP_AV_API_KEY} `;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
export const fetchStockFinancials = async (stockSymbol) => {
  const url = `${basePathIEX}/stock/${stockSymbol}/stats/?token=${process.env.REACT_APP_IEX_API_KEY} `;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
export const fetchDetailedStockQuote = async (stockSymbol) => {
  const url = `${basePathIEX}/stock/${stockSymbol}/quote/?token=${process.env.REACT_APP_IEX_API_KEY} `;
  const response = await fetch(url);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  return await response.json();
};
