const express = require("express");
const generateToken = require("../helpers/generateToken");

const router = express.Router();

router.get("/stk", async (req, res) => {
  try {
    const body = {
      BusinessShortCode: 174379,
      Password:
        "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjUwMTI4MTQyNjE3",
      Timestamp: "20250128142617",
      TransactionType: "CustomerPayBillOnline",
      Amount: 1,
      PartyA: 254725020561,
      PartyB: 174379,
      PhoneNumber: 254725020561,
      CallBackURL: "https://mpesa-jzlo.onrender.com/api/stk",
      AccountReference: "CompanyXLTD",
      TransactionDesc: "Payment of X",
    };

    const url =
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
    const token = await generateToken(
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET
    );


    const options = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token.access_token}`,
        "content-Type":"application/json"
        
      },
      body:JSON.stringify(body)
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(token.access_token)

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

module.exports = router;
