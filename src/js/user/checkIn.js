import { renderBackRequest } from "./autorization.js";

async function checkIn(user) {
  let response = await fetch("http://localhost:1717/login", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  });
  let result = await response.json();
  
  if (typeof result === "string") {
    renderBackRequest(result);
  } else {
    localStorage.setItem("userdata",JSON.stringify(result));
  }
}

export default checkIn;
