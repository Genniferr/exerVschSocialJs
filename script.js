var sevenDwarfs = {
  name: "Snow White",
  age: 22,
  activities: ["singing", "dancing", "cleaning"],
  beauty: [" the fairest of them all"],
  roommates: [
    {
      name: "Sneezy",
      age: 101,
      trait: ["ill"],
      activities: ["singing", "mining"],
      favoriteSongs: [
        {
          songName: "Heigh Ho",
          pitch: 1,
        },
      ],

    },
    {
      name: "Sleepy",
      age: 111,
      trait: ["lethargic"],
      activities: ["singing", "sleeping", "mining"],
    }, {
      name: "Happy",
      age: 102,
      trait: ["jovial"],
      activities: ["singing", "mining"],
    }, {
      name: "Doc",
      age: 107,
      trait: ["leader"],
      activities: ["singing", "mining"],
    }, {
      name: "Grumpy",
      age: 114,
      trait: ["mean"],
      activities: ["singing", "mining"],
    }, {
      name: "Dopey",
      age: 112,
      trait: ["mute"],
      activities: ["singing", "mining"],
    }, {
      name: "Bashful",
      age: 108,
      trait: ["shy"],
      activities: ["singing", "mining"],
      favoriteSongs: [
        {
          songName: "Whistle While Your Work",
          pitch: 6,
    },
  ],
        },
  ],
};
console.log(sevenDwarfs.name + " is" +sevenDwarfs.beauty)
sevenDwarfs.roommates[0].gender="male";
sevenDwarfs.roommates[0].favoriteFood="apple";
console.log(sevenDwarfs.roommates[0].gender);
console.log(sevenDwarfs.roommates[0].favoriteFood);
sevenDwarfs.roommates.push("Whistle While You Work");
sevenDwarfs.roommates.push("Heigh Ho");
console.log(sevenDwarfs);
