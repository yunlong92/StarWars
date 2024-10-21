// Funktion som hämtar och visar karaktärsinformation
function getApi() {
    // Hämta karaktärens namn från input-fältet
    const characterName = document.querySelector('#characterName').value;

    // Skapa fullständig URI för API-förfrågan
    const fullUri = `https://www.swapi.tech/api/people/?name=${characterName}`;

    // Skicka förfrågan till API:t
    fetch(fullUri)
        .then(res => res.json())
        .then(data => {
            // Kolla om karaktär hittades
            if (data.result.length > 0) {
                // Plocka ut biometrisk data från första matchningen
                const character = data.result[0].properties;
                const height = character.height;
                const mass = character.mass;
                const gender = character.gender;
                const hairColor = character.hair_color;

                // Skapa en sträng med all information
                let outputText = `Height: ${height} cm\nMass: ${mass} kg\nGender: ${gender}\nHair color: ${hairColor}`;

                // Skriv ut resultatet i textrutan
                document.querySelector('#output').value = outputText;
            } else {
                // Om ingen karaktär hittades, visa ett felmeddelande
                document.querySelector('#output').value = "Character not found.";
            }
        })
        .catch(err => {
            // Visa fel om något går snett
            console.log(err);
            document.querySelector('#output').value = "An error occurred while fetching data.";
        });
}

// Lägg till eventListener på knappen
document.querySelector('#searchButton').addEventListener('click', getApi);
