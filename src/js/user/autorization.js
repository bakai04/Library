async function autorization(user){
    let response = await fetch("http://localhost:1717/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(user),
      });
  
      let result = await response.json();
      localStorage.setItem("token", result.token);
    
}

export default autorization;