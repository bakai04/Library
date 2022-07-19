function userName() {
    const userName = document.querySelector(".user-name");
    userName.textContent = JSON.parse(localStorage.getItem("userdata"))?.data.username || "user";
}

export default userName