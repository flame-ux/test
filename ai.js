const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const responses = {
  hello: "Hey there!",
  "how are you": "I'm just code, feeling great!",
  "what your name": "I am jarves, and you",
  "hi": "hello 🖐️",
  "hey": "hey! 😊",
  "hiya": "hiya! 🤗",
  "how are you": "I'm doing great, thanks! 😊",
  "what's up": "Not much! Just here to help 🤔",
  "hi there": "hello there! 👋",
  "greetings": "greetings! 🌟",
  "salutations": "salutations! 🤝",
  "what's the weather like": "I'm not connected to real-time data, but I can suggest ways to find out! 🌞",
  "can you recommend a movie": "I'd be happy to suggest some popular movies or help you find one! 🍿",
  "can you write a poem": "I'd love to generate a poem for you! 📝",
  "can you tell me a joke": "Here's one: Why couldn't the bicycle stand up by itself? Because it was two-tired! 😄",
  "How are you?" : "I'm doing well, thanks for asking!",
"What's your name?" : "You can call me fire AI!",
"Can you understand sarcasm?" : "I'm getting better at detecting tone and sarcasm!",
"Can you tell me a joke?" : "Here's one: Why couldn't the bicycle stand up by itself? Because it was two-tired!",
"Can you write a poem?" : "I'd love to generate a poem for you!",
  "What is the process by which plants make food?" : "Photosynthesis",
"What is the largest living structure on Earth?" : "The Great Barrier Reef",
"What is the scientific term for the study of the structure of the Earth?" : "Geology",
"Who is credited with the discovery of gravity?" : "Isaac Newton",
"What is the largest mammal on Earth?" : "Blue whale",
"Who was the first president of the United States?" : "George Washington",
"What year did World War II end?" : "1945",
"Who built the Great Pyramid of Giza?" : "The ancient Egyptians",
"What was the main cause of the American Revolution?" : "Taxation without representation",
"Who was the leader of the Soviet Union during World War II?" : "Joseph Stalin",
  bye: "See you later!"
};

function getResponse(input) {
  input = input.toLowerCase();
  for (let key in responses) {
    if (input.includes(key)) {
      return responses[key];
    }
  }
  return "I don't get that, try asking something else.";
}

function chat() {
  rl.question("> ", (answer) => {
    if (answer.toLowerCase() === "exit") {
      console.log("Chat ended. Bye!");
      rl.close();
      return;
    }
    console.log(getResponse(answer));
    chat();
  });
}

console.log("Hi! I'm a simple JS chatbot. Type 'exit' to quit.");
chat();