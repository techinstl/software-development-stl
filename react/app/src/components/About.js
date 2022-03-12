import React from "react";

const About = () => {
  const sections = [
    {
      name: "School",
      content:
        "I go to Ladue Middle School! LMS is a fun place with great teachers and students.",
    },
    {
      name: "Hobbies",
      content:
        "I enjoy basketball, programming, and writing. If you don't see me in the driveway shooting hoops, I'm working on my next big thing!",
    },
  ];

  return (
    <div className="flex flex-col items-start space-y-6">
      <h1 className="text-6xl">About.</h1>
      <div className="flex flex-col container space-y-6">
        {sections.map((item) => {
          return (
            <div className="border-2 border-white w-full flex flex-col items-start space-y-4 bg-black text-white rounded-xl px-4 py-8 max-w-xl shadow-xl">
              <h1 className="text-4xl">{item.name}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
