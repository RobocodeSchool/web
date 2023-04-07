let container = document.querySelector(".container");

for (let i = 1; i <= 12; i++) {
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    `https://test-name-site.neocities.org/HostPhotos/WebBeginnerEaster/${i}.jpg`
  );
  image.classList.add("image");
  image.classList.add(`image${i}`);

  container.append(image);
}
