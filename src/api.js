const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  try {
    const req = await fetch(`${url}/assets?limit=20`);
    const res = await req.json();
    return await res.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

const getAsset = async (coin) => {
  try {
    const req = await fetch(`${url}/assets/${coin}`);
    const res = await req.json();
    return await res.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

const getAssetHistory = async (coin) => {
  try {
    const now = new Date();
    const end = now.getTime();
    now.setDate(now.getDate() - 1);
    const start = now.getTime();
    const req = await fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    );
    const res = await req.json();
    return await res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const getMarkets = async (coin) => {
  try {
    const req = await fetch(`${url}/assets/${coin}/markets?limit=5`);
    const res = await req.json();
    return await res.data;
  } catch (error) {
    console.error("Error del server");
    throw new Error(error);
  }
};

const getExchange = async (id) => {
  try {
    const req = await fetch(`${url}/exchanges/${id}`);
    const res = await req.json();
    return await res.data;
  } catch (error) {
    console.error("Error del server");
    throw new Error(error);
  }
};

export { getAssets, getAsset, getAssetHistory, getMarkets, getExchange };
