const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const responses = {
  "hello": "Hey there!",
  "how are you": "I'm just code, feeling great!",
  "bye": "See you later!"
};

async function fetchFromWiki(query) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "TermuxChatbot/1.0" }
    });

    if (!res.ok) throw new Error(`HTTP Error ${res.status}`);

    const data = await res.json();
    if (data.extract) {
      return data.extract;
    } else {
      return "I couldn’t find anything in Wikipedia.";
    }
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

async function getResponse(input) {
  input = input.toLowerCase();

  // 1. Check predefined responses
  for (let key in responses) {
    if (input.includes(key)) {
      return responses[key];
    }
  }

  // 2. Fallback to Wikipedia KB
  return await fetchFromWiki(input);
}

async function chat() {
  rl.question("> ", async (answer) => {
    if (answer.toLowerCase() === "exit") {
      console.log("Chat ended. Bye!");
      rl.close();
      return;
    }
    console.log(await getResponse(answer));
    chat();
  });
}

console.log("Hi! I'm a chatbot with an online knowledge base. Type 'exit' to quit.");
chat();