function sendMessage(username, content) {
    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discordapp.com/users/629851641579044874",
    );
  
    request.setRequestHeader("Content-type", "application/json");
  
    const params = {
      username: username,
      avatar_url: "https://i.imgur.com/LpKlqsn.jpeg",
      content: content,
    };
  
    request.send(JSON.stringify(params));
  }
  
  const form = document.querySelector("#form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    for (const [name, value] of data) {
      if (name === "name") {
        var username = value;
      } else {
        var content = value;
      }
    }
    sendMessage(username, content);
    form.reset();
  });