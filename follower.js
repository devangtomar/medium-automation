const medium = require("medium-sdk");

// Replace with your own access token
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

// Replace with a list of user IDs to follow
const userIdsToFollow = ["user1", "user2", "user3"];

const client = new medium.MediumClient({
  clientId: "YOUR_CLIENT_ID",
  clientSecret: "YOUR_CLIENT_SECRET",
});

client.setAccessToken(ACCESS_TOKEN);

(async () => {
  for (const userId of userIdsToFollow) {
    try {
      // Follow the user
      await client.followUser(userId);
      console.log(`Successfully followed user: ${userId}`);
    } catch (error) {
      console.error(`Error following user ${userId}: ${error.message}`);
    }
  }
})();
