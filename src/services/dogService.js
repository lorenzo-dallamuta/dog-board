import { v4 } from "uuid";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

function getRandomName() {
  const hexString = v4().replaceAll("-", "");
  const base64String = Buffer.from(hexString, "hex").toString("base64");
  return base64String;
}

export async function saveDog(dog) {
  dog["id"] = getRandomName();
  return fetch(baseUrl + "dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  });
}
