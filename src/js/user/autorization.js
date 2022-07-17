export function renderBackRequest(backRequest) {
  const warningError = document.querySelector(".warning-usersData-error");
  warningError.textContent = backRequest+"*";
}

async function autorization(user) {
  let response = await fetch("http://localhost:1717/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  });
  let result = await response.json();
  if (typeof(result) === "string") {
    renderBackRequest(result);
  } else {
    localStorage.setItem("userdata",JSON.stringify(result));
  }
}

export default autorization;
