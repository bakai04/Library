export async function autorization(user) {
  let response = await fetch("http://localhost:1717/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  }).then((el) => {
    return el.json();
  });
  return response;
}

export async function checkIn(user) {
  let response = await fetch("http://localhost:1717/login", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(user),
  }).then((el) => {
    return el.json();
  });
  return response;
}
