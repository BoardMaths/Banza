import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  //creates token
  const token = jwt.sign(
    { userId },
    "0ec499d57ffa5b731d8e5e8879f37028067282175485506df9d6025c06f350428357b21523c3ef86472b09a55a51bdf44b10af9c4992712e2ecf27fb79ea63b0",
    {
      expiresIn: "30d",
    }
  );

  // sends back the created token
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",

    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateToken;

// so i removed, sameSite: strict, from res.cookie("jwt"), bcos we still in development
