const inquirer = require('inquirer');
const axios = require('axios');
const say = require('say');

async function chat() {
  const { message } = await inquirer.prompt([
    { name: 'message', message: 'You:', type: 'input' }
  ]);

  const res = await axios.post('http://localhost:3000/api/chat', { message });
  console.log(`AI: ${res.data.reply}`);
  say.speak(res.data.reply);
}

chat();
