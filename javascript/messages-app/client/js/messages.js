document.getElementById("messages-button").onclick = async () => {
  const rawData = await fetch("http://localhost:8000/messages");
  const json = await rawData.json();
  console.log(json);

  document.getElementById("messages-output").innerHTML = `
    <ul class="flex flex-col space-y-8">
        ${json.map((message) => {
          return `<li><div class="flex items-center space-x-4"><h1>${message.user_name} says</h1><div class="p-4 rounded-xl text-white bg-black">${message.content}</div></div></li>`;
        })}
    </ul>
  `;
};
