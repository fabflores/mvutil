const inquirer = require("inquirer");
const PasswordPrompt = require("inquirer/lib/prompts/password");

console.log("Welcome!");

const questions = [
    {
    type: 'rawlist',
    name: 'command',
    message: 'which command would you like to do? ',
    choices: ['Update Password', 'Extend Expiration'],
    },

    {
        when: answer => {
              return answer.command == "Update Password"
        },
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate(value){
            const pass = value.match(
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
            );
            if (pass){
                return true;
            }
            return "Please enter a valid email"
        },
    
    },
    {
        type: 'input',
        name:'password',
        message:'Enter new password', 
    },

    {
        when: answer => {
            return answer.command == "Extend Expiration"
        },
        type: 'input',
        name: 'email',
        message: "What is your email?",
         validate(value){
            const pass = value.match(
                /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
            );
            if (pass){
                return true;
            }
            return "Please enter a valid email"
        },
    },
    {
        type: 'list',
        name: 'extend',
        message: 'How many months would you like to extend?',
        choices: ['3', '6', '12'],
        
       
    },

    ]

    inquirer.prompt(questions).then((answers) => {
        console.log('\nOrder receipt:');
        console.log(JSON.stringify(answers, null, '  '));
      });

    