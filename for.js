let resumeData = {
    name: "Ramkumar Sundaram",
    email: "ramkumar742k@gmail.com",
    phone: "+91 8220442428",
    address: {
      street: "Anna nagar Main Street",
      city: "Usilampatti",
      state: "Tamil Nadu",
      zipcode: "625532",
      country: "India"
    },
    education: [
      {
        "degree": "Bachelor of Science in Computer Science",
        "university": "NMS SVN COllege",
        "year": "2017-2020"
      }
    ],
    experience: [
      {
        "title": "PHP Developer",
        "company": "Hello Technologies",
        "location": "Madurai",
        "duration": "2022-2023",
        "responsibilities": [
          "Developed web applications using PHP and MySQL",
          "Collaborated with cross-functional teams to deliver high-quality software products",
          "Implemented responsive design and optimized performance"
        ]
      },
    ],
    skills: [
      "JavaScript",
      "React.js",
      "PHP",
      "HTML",
      "CSS",
      "Git",
    ],
    languages: [
      "English (Fluent)",
    ],
    interests: [
      "Reading",
      "Hiking",
      "Photography"
    ]
  };
  
  let newResumeData = JSON.parse(JSON.stringify(resumeData));

  
  
const keys = Object.keys(newResumeData);


for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(newResumeData[key]);
}

