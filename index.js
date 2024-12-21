import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // Set EJS as the templating engine
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const latitudeBerlin = 52.5200;
const longitudeBerlin = 13.4050;

// Function to calculate the Haversine distance between two points on Earth
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Route to render the form initially
app.get("/", (req, res) => {
    res.render("index", { message: null }); // Render the EJS template without a message
});

// Route to handle form submission and calculate ISS distance
app.post("/check", async (req, res) => {
    try {
        const response = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
        const issData = response.data;
        const distance = calculateDistance(
            latitudeBerlin,
            longitudeBerlin,
            issData.latitude,
            issData.longitude
        );

        let message;
        if (distance < 100) {
            message = "The ISS is the closest it can be to Berlin!";
        } else if (distance < 500) {
            message = `The ISS is close to Berlin, approximately ${distance.toFixed(1)} km away.`;
        } else {
            message = `The ISS is far from Berlin, approximately ${distance.toFixed(1)} km away.`;
        }

        res.render("index", { message }); // Pass the message to the template
    } catch (error) {
        console.error("Failed to fetch ISS data:", error.message);
        res.render("index", { message: "Failed to retrieve ISS position." });
    }
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
