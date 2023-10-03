import inquirer, { QuestionCollection } from 'inquirer';
import chalk from 'chalk';

const questions:QuestionCollection = [{
    name:'FirstNUmber',
    type: 'number',
    message: 'Enter First Number',
    validate:(answers) =>{
        if(!answers){
            return "Please Enter first Number";
        }
        return true
    }
},
{
    name:'SecondNUmber',
    type: 'number',
    message: 'Enter Second Number',
    validate: (answers)=>{
        if(!answers){
            return "Please Enter second number";
        }
        return true
    }
},
{
    name:'operations',
    type: 'list',
    message: 'Enter a operation you want to perform',
    choices:["addition","subtraction","multiplication","division","exponent","modulus"],
    validate: (answers)=>{
        if(!answers){
            return 'Please Enter operation';
        }
        return true
    }
}
]

async function Calculate(){

    try {
        var answers = await inquirer.prompt(questions);
        switch(answers.operations){
            case"multiplication":
                console.log(chalk.green.bold(`${answers.FirstNUmber} * ${answers.SecondNUmber} = ${answers.FirstNUmber * answers.SecondNUmber}`))
                break;
            case"addition":
                console.log(chalk.yellow.bold(`${answers.FirstNUmber} + ${answers.SecondNUmber} = ${answers.FirstNUmber + answers.SecondNUmber}`))
                break;
            case"division":
                console.log(chalk.yellowBright.bold(`${answers.FirstNUmber} / ${answers.SecondNUmber} = ${answers.FirstNUmber / answers.SecondNUmber}`))
                break;
            case"subtraction":
                console.log(chalk.blue.bold(`${answers.FirstNUmber} - ${answers.SecondNUmber} = ${answers.FirstNUmber - answers.SecondNUmber}`))
                break;
            case"modulus":
                console.log(chalk.grey.bold(`${answers.FirstNUmber} % ${answers.SecondNUmber} = ${answers.FirstNUmber % answers.SecondNUmber}`))
                break;
            case"exponent":
                console.log(chalk.magenta.bold(`${answers.FirstNUmber} ^ ${answers.SecondNUmber} = ${Math.pow(answers.FirstNUmber,answers.SecondNUmber)}`))
                break;
            default:
                console.log(chalk.bgRedBright.white.bold("Invalid Operation"))
    
        }
    }
    catch(error){
    console.log("Error",error)
    }
}

Calculate()
