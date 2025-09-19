# 🤖 JavaScript AI Chatbot

A simple Node.js chatbot that responds to predefined phrases and fetches answers from **Wikipedia** if it doesn’t know the response.  

## ✨ Features
- Predefined responses (`hello`, `how are you`, `bye`)
- Wikipedia integration for general knowledge
- Interactive CLI chat
- Lightweight, no external dependencies (uses Node.js built-in + fetch)

## 🛠️ Requirements
- Node.js **v18+** (for native `fetch` support)
- npm (optional)

## 🚀 Installation
Clone the repo:
```bash
git clone https://github.com/flame-ux/test.git
cd test
```
~USAGE~

node ai2.js

~Example interaction~
Hi! I'm a chatbot with an online knowledge base. Type 'exit' to quit.
> hello
Hey there!
> who is Elon Musk
Elon Musk is a business magnate and investor. He is the founder, CEO, and chief engineer of SpaceX...
> bye
See you later!

~project structure~
ai2.js   # main chatbot code
README.md    # project documentation
