// This script requires medium-sdk, which you can install by running npm install medium-sdk. You will also need to register your app with Medium and obtain a client ID and client secret, which you can do by following the instructions here. You will also need to generate an access token, which you can do by following the instructions here.

// In the script, replace YOUR_ACCESS_TOKEN with the access token you generated, YOUR_CLIENT_ID with your app's client ID, and YOUR_CLIENT_SECRET with your app's client secret. Then, replace the userIdsToFollow array with a list of user IDs that you want to follow. You can find a user's ID by looking at their profile URL on Medium; for example, if their profile URL is https://medium.com/@username, their user ID is username.
// When you run the script, it will iterate over the list of user IDs and follow each user. If there are any errors, they will be logged to the console.

const medium = require("medium-sdk");

// Replace with your own access token
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

// Replace with a list of user IDs to follow
const userIdsToFollow = ["user1", "user2", "user3"];

const client = new medium.MediumClient({clientId: "YOUR_CLIENT_ID", clientSecret: "YOUR_CLIENT_SECRET"});

client.setAccessToken(ACCESS_TOKEN);

(async () => {
    for (const userId of userIdsToFollow) {
        try { // Follow the user
            await client.followUser(userId);
            console.log(`Successfully followed user: ${userId}`);
        } catch (error) {
            console.error(`Error following user ${userId}: ${
                error.message
            }`);
        }
    }
})();
