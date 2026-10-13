const express = require("express");
const app = express();

app.use(express.static("public"));


// 10 artwork objects
const artworks = [
  { title: "Water Lilies", artist: "Monet", year: 1916 },
  { title: "Starry Night", artist: "Van Gogh", year: 1889 },
  { title: "The Scream", artist: "Munch", year: 1893 },
  { title: "The Kiss", artist: "Klimt", year: 1908 },
  { title: "The Two Fridas", artist: "Frida Kahlo", year: 1939 },
  { title: "Composition VIII", artist: "Kandinsky", year: 1923 },
  { title: "The Great Wave", artist: "Hokusai", year: 1831 },
  { title: "Girl with a Pearl Earring", artist: "Vermeer", year: 1665 },
  { title: "Campbell's Soup Cans", artist: "Warhol", year: 1962 },
  { title: "The Persistence of Memory", artist: "Dali", year: 1931 }
];


// Route 2
app.get("/data", function(req, res) {
  res.json(artworks);
});


// Route 3
app.get("/data/:artist", function(req, res) {

  const artistName = req.params.artist.toLowerCase();

  const result = artworks.filter(function(artwork) {
    return artwork.artist.toLowerCase().includes(artistName);
  });

  res.json(result);
});


app.listen(3000, function() {
  console.log("Server is running!");
});