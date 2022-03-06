document.getElementById("form").onsubmit = async (event) => {
  event.preventDefault();
  const messageInput = document.getElementById("form-message-input");
  const usernameInput = document.getElementById("form-username-input");

  const sentObject = {
    user_name: usernameInput.value,
    content: messageInput.value,
  };

  const rawResponse = await fetch("http://localhost:8000/messages/add", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sentObject),
  });

  const content = await rawResponse.json();
  
  messageInput.value = "";
  usernameInput.value = "";
  alert(content.status);
};
