import google from 'googleapis';
import secretKey from '../client_secret.json' assert {type: 'json'};

export const getRecipes = async (req, res) => {
    try {
        // let google = require('googleapis');
        // let secretKey = require("./client_secret.json");
        let jwtClient = new google.google.auth.JWT(
               secretKey.client_email,
               null,
               secretKey.private_key,
               ['https://www.googleapis.com/auth/spreadsheets']);
        //authenticate request
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("Successfully connected!");
            }
        });
      
        //Google Sheets API
        let spreadsheetId = '1BwAYU20mE4INDXirR3Yygzlu1Mi75ESir2ycwBP9dNA';
        let sheetRange = 'fitgreenmind!A:F'
        let sheets = google.google.sheets('v4');

        sheets.spreadsheets.values.get({
            auth: jwtClient,
            spreadsheetId: spreadsheetId,
            range: sheetRange
        }, function (err, response) {
            if (err) {
                console.log('The API returned an error: ' + err);
                return;
            } else { 
                const results = response.data.values
                console.log(results[1])

                // save results to array/dictionary
                let recipes = [];
                let count = 0;
                results.shift(); // removes first value (category headers) from results

                // adds to dictionary object and pushes to recips array
                results.forEach(function() {
                    const title = results[count][0];
                    const recipe = results[count][1];
                    const date = results[count][2];
                    const postUrl = results[count][3];
                    recipes.push({
                        title, recipe, date, postUrl
                    })
                    count += 1
                })
                // send recipes array to localhost :)
                console.log(recipes[0])
                res.json(recipes)
            }
        });
        // res.status(200).json("donzo")
    } catch (error) { 
        res.status(404).json({ message: error.message});
        return;
    }
    // res.send('THIS WORKS!');
}
