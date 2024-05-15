import inquirer from 'inquirer';
async function main() {
    const { choice } = await inquirer.prompt([
        {
            type: 'number',
            name: 'choice',
            message: 'Enter 1 to talk to others, 2 for personality info, or anything else for mystery:',
        },
    ]);
    let message;
    switch (choice) {
        case 1:
            message = "if you want to talk to others.";
            break;
        case 2:
            const { name } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name:',
                },
            ]);
            message = `Your name is: ${name} and your personality type is: mystery.`;
            break;
        default:
            message = "Mystery.";
            break;
    }
    console.log(message);
    // Optionally prompt to close using any key
    await inquirer.prompt([
        {
            type: 'input',
            name: 'anyKey',
            message: 'Press any key to close this window...',
        },
    ]);
}
main();
