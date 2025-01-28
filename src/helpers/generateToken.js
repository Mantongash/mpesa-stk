const generateToken = async (key, secret) => {
  const url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
  console.log("key", key);
  console.log("secret", secret);

  const base64String = Buffer.from(`${key}:${secret}`).toString("base64");

  console.log("base64", base64String);
  const headers = new Headers();
  headers.set("Authorization", `Basic ${base64String}`);

  console.log(headers);

  const response = await fetch(url, {headers});
  const data = await response.json().catch((err) => console.log(err));

  if (response.ok) {
    const token = data;
    return token;
  } else {
    console.log("Fetch Error");
  }
};

module.exports = generateToken;
