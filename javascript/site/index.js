// document.getElementById("form").onsubmit = async (e) => {
//   e.preventDefault();
//   const value = document.getElementById("form-input").value;
//   document.getElementById("form-input").value = "";

//   await axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
//     .then((res) => {
//       const data = res.data;
//       console.log(data);

//       const image = data.sprites.back_default;
//       const types = data.types;
//       const weight = data.weight;
//       const height = data.height;
//       const baseExperience = data.base_experience;
//       console.log(types)
//       //   document.getElementById("test").innerHTML = "test changed"
//       document.getElementById("output").innerHTML = `
//         <div class="flex flex-col bg-white items-start p-10 space-y-10 w-full shadow-2xl shadow-cyan-500">
//             <h1 class="text-4xl">${value.toUpperCase()}</h1>
//             <div class="flex flex-row space-x-12 p-5">
//                 <img class="rounded-2xl shadow-2xl shadow-cyan-500 border-4 border-black border-dotted" src="${image}">
//                 <div class="flex flex-col space-y-2">
//                     <h1 class="text-2xl">About</h1>
//                     <ol class="flex flex-col items-start space-y-2">
//                         <li>
//                             <span class="underline ">Weight:</span>
//                             ${weight}
//                         </li>
//                         <li>
//                             <span class="underline ">Height:</span>
//                             ${height}
//                         </li>
//                         <li>
//                             <span class="underline ">Expierence:</span>
//                             ${baseExperience}
//                         </li>
//                         <li>
//                             <span class="underline ">Type:</span>
//                             ${types.map((element) => element.type.name).join(", ")}
//                         </li>
//                     </ol>
//                 </div>
//             </div>

//         </div>
//       `;
//     })
//     .catch((error) => alert("Input not valid: No Pokemon Found"));
// };

document.getElementById("form").onsubmit = async function (e) {
  e.preventDefault();
  const value = document.getElementById("form-input").value;

  if (value.trim() === "") {
    return;
  }

  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then((result) => {
      const data = result.data;
      console.log(data);

      const image = data.sprites.back_default;
      const types = data.types;
      const weight = data.weight;
      const height = data.height;
      const baseExperience = data.base_experience;

      document.getElementById("output").innerHTML = `
        <img class="rounded-2xl shadow-2xl shadow-cyan-500 border-4 border-black border-dotted" src="${image}">
        <ol class="flex flex-col items-start space-y-2">
        <li>
            <span class="underline ">Weight:</span>
            ${weight}
        </li>
        <li>
            <span class="underline ">Height:</span>
            ${height}
        </li>
        <li>
            <span class="underline ">Expierence:</span>
            ${baseExperience}
        </li>
        <li>
            <span class="underline ">Type:</span>
            ${types.map((element) => element.type.name).join(", ")}
        </li>
    </ol>
      `;
    })
    .catch((error) => {
      if (error) console.log(error);
      alert("Not a pokemon!");
    });
};

const Chart = require("chart.js");
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
