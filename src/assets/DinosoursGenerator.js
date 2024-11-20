const DinosaursGenerator = [
    "Tyrannosaurus Rex", "Triceratops", "Velociraptor", "Stegosaurus", "Brachiosaurus",
    "Ankylosaurus", "Spinosaurus", "Allosaurus", "Diplodocus", "Iguanodon",
    "Carnotaurus", "Pachycephalosaurus", "Gallimimus", "Compsognathus", "Parasaurolophus",
    "Pteranodon", "Mosasaurus", "Coelophysis", "Deinonychus", "Apatosaurus",
    "Archaeopteryx", "Ceratosaurus", "Dilophosaurus", "Euoplocephalus", "Microraptor",
    "Plateosaurus", "Protoceratops", "Therizinosaurus", "Utahraptor", "Oviraptor",
    "Gigantoraptor", "Suchomimus", "Edmontosaurus", "Maiasaura", "Sinoceratops",
    "Pachyrhinosaurus", "Troodon", "Kentrosaurus", "Herrerasaurus", "Shunosaurus",
    "Camarasaurus", "Eoraptor", "Torosaurus", "Dreadnoughtus", "Cryolophosaurus",
    "Megalosaurus", "Irritator", "Giganotosaurus", "Daspletosaurus", "Sauropelta"
];

// 整理成資料格式
export const generateDinosaurData = () => {
    return DinosaursGenerator.map((name, index) => ({ id: index + 1, name }));
};

export default DinosaursGenerator;