const characters = [
  {
    name: "Leon S. Kennedy",
    bio: "A former rookie cop turned elite government agent. Known for his calm under pressure, sharp combat skills, and relentless fight against bioterrorism.",
    img: "./assets/Leon.jpg",
  },
  {
    name: "Kratos",
    bio: "The Ghost of Sparta, a former Greek god of war. Known for his immense strength, rage-fueled combat, and a journey of redemption in Norse realms.",
    img: "./assets/kratos.jpg",
  },
  {
    name: "Jill Valentine",
    bio: "An ex-S.T.A.R.S. officer and elite operative, renowned for her tactical brilliance, resourcefulness, and survival instincts against bioterrorism.",
    img: "./assets/jillvalentine.jpg",
  },
  {
    name: "Lara Croft",
    bio: "An adventurous archaeologist and fearless explorer. Skilled in combat, survival, and uncovering ancient mysteries around the world.",
    img: "./assets/lara.jpg",
  },
  {
    name: "Nathan Drake",
    bio: "A witty treasure hunter driven by curiosity and danger. Master of parkour, puzzles, and uncovering lost civilizations.",
    img: "./assets/nathan.jpg",
  },
  {
    name: "Spider-Man",
    bio: "A friendly neighborhood hero blessed with spider-like abilities. Balances hero life with personal struggles while protecting New York.",
    img: "./assets/spiderman.jpg",
  },
  {
    name: "Superman",
    bio: "The Man of Steel, an alien from Krypton with super strength, flight, and a heart dedicated to protecting humanity.",
    img: "./assets/superman.jpg",
  },
  {
    name: "Captain America (Steve Rogers)",
    bio: "The super soldier with unbreakable will, unwavering honor, and the iconic shield, leading the Avengers with courage.",
    img: "./assets/captain.jpg",
  },
  {
    name: "Mikasa Ackerman",
    bio: "A skilled soldier from the Scout Regiment, fiercely loyal, exceptionally strong, and unmatched in combat against Titans.",
    img: "./assets/mikasa.jpg",
  },
  {
    name: "Steve Harrington",
    bio: "From high school king to monster-slaying babysitter, Steve proves his loyalty and courage in the fight against the Upside Down.",
    img: "./assets/steve.jpg",
  },
];

// slide logic

let index = 0

let carousel = document.getElementById('carousel')

carousel.innerHTML = `
  <div class="relative w-full h-[500px] rounded-3xl overflow-hidden mx-auto">
    <img id="carouselImage" src="${characters[index].img}" alt="${characters[index].name}" class="w-full h-full object-cover rounded-3xl transition-opacity duration-500" />
    <div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100">
      <h1 id="carouselName" class="text-2xl font-bold mb-2">${characters[index].name}</h1>
      <p id="carouselBio" class="text-gray-200 text-sm leading-relaxed">${characters[index].bio}</p>
    </div>
  </div>
`;


function updateCarousel() {
  carousel.innerHTML = `
    <div class="relative w-full h-[500px] rounded-3xl overflow-hidden mx-auto ">
      <img id="carouselImage" src="${characters[index].img}" alt="${characters[index].name}" class="w-full h-full object-cover rounded-3xl transition-opacity duration-500" />
      <div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100">
        <h1 id="carouselName" class="text-2xl font-bold mb-2">${characters[index].name}</h1>
        <p id="carouselBio" class="text-gray-200 text-sm leading-relaxed">${characters[index].bio}</p>
      </div>
    </div>
  `;
  const slide = carousel.querySelector("div");
  requestAnimationFrame(() => {
    slide.classList.remove("opacity-0");
    slide.classList.add("opacity-100");
  });
}

updateCarousel()

 



document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % characters.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + characters.length) % characters.length;
  updateCarousel();
});
