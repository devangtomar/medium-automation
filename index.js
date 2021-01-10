const request = require("request");

const clientId = "your-client-id";
const clientSecret = "your-client-secret";
const userId = "the-user-id-of-the-medium-user";

const options = {
  url: `https://api.medium.com/v1/users/${userId}/followers`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${clientId}:${clientSecret}`,
  },
};

request.get(options, (error, response, body) => {
  if (error) {
    // Handle error
  }

  const followers = JSON.parse(body);
  console.log(followers);
});
