import React from "react";

const Contact = () => {
  const sections = [
    {
      name: "Email",
      content:
        "mark.fang.mo@gmail.com",
    },
    {
      name: "Discord User Name:",
      content:
        "@coolusername#4455",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-6xl">Contact.</h1>
      <div className="flex flex-col items-center container space-y-2">
        {sections.map((item) => {
          return (
            <div className="w-full shadow-blue-500 flex flex-col items-start space-y-4 text-white rounded-xl px-4 py-8  shadow-xl">
              <h1 className="text-4xl font-bold">{item.name}</h1>
              <p className="font-semibold shadow-lg shadow-black underline">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
