const iconsImport = import.meta.glob("../assets/carrouselIcons/*.svg", {
  eager: true,
});

const carrouselIcons = {};
Object.keys(iconsImport).forEach((path) => {
  const fileName = path.split("/").pop().replace(".svg", "");
  carrouselIcons[fileName] = iconsImport[path].default;
});

const carImages = import.meta.glob(
  "../assets/featuresImg/porscheModels/*.svg",
  {
    eager: true,
  }
);

const featuresImages = Object.values(carImages).map((img) => img.default);

const brand = ["Tesla", "Tesla", "Audi", "Porsche", "Porsche"];
const model = ["Model X", "Model 3", "E-tron", "Boxster 987", "Panamera"];
const prices = [98900, 45900, 175900, 126900, 126900];

export const featuresData = brand.map((currentBrandName, index) => ({
  name: currentBrandName,
  model: model[index],
  prices: prices[index],
  image: featuresImages[index],
  saveIcon: carrouselIcons.saveIcon,
}));
