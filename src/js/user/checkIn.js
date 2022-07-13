async function checkIn(user) {
    let response = await fetch("http://localhost:1717/login", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(user),
      });
      let result = await response.json();
      console.log(result);
      localStorage.setItem("token", JSON.stringify(result.token));
    }

export default checkIn;