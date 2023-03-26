const Discord = require('discord.js');
const client = new Discord.Client();

const botResponses = [
    "Hello!",
    "How are you?",
    "What's your name?",
    "Nice to meet you!"
];

// Define a function to get the bot's response
function getBotResponse(userInput) {
    // Split the user input into an array of words
    const words = userInput.split(" ");
    
    // Check if the user input contains a greeting
    if (words.includes("hi") || words.includes("hello")) {
        return botResponses[0];
    }
    
    // Check if the user input contains a question about the bot
    if (words.includes("you")) {
        return botResponses[3];
    }
    
    // Check if the user input contains a question about the user
    if (words.includes("name")) {
        return "I'm sorry, I don't know your name. What is it?";
    }
    
    // Check if the bot has already asked for the user's name
    if (session.name) {
        // If the bot knows the user's name, greet the user by name
        return "Nice to meet you, " + session.name + "!";
    } else {
        // If the bot doesn't know the user's name, ask for it
        session.name = userInput;
        return "Hi, " + session.name + "! How can I assist you?";
    }
    
    // If the bot doesn't know how to respond, return a generic response
    return botResponses[1];
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // Ignore messages sent by the bot itself
  if (msg.author.bot) return;
  
  // Get the user input
  const userInput = msg.content.toLowerCase();
  
  // Get the bot's response
  const botResponse = getBotResponse(userInput);
  
  // Send the bot's response as a message
  msg.reply(botResponse);
});

client.login('YOUR_DISCORD_BOT_TOKEN');
