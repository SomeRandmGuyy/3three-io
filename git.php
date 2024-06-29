<?php

// Fetch GitHub username and token from environment variables
$username = getenv('GITHUB_USERNAME');
$token = getenv('GITHUB_TOKEN');

// Function to execute shell commands and print output
function executeCommand($command) {
    $output = [];
    $return_var = 0;
    exec($command, $output, $return_var);
    foreach ($output as $line) {
        echo $line . PHP_EOL;
    }
    if ($return_var !== 0) {
        echo "Command failed with return code: $return_var" . PHP_EOL;
    }
}

// Prompt for commit message
echo "Enter your commit message: ";
$commitMessage = trim(fgets(STDIN));

// Git commands to add, commit, and push changes
$commands = [
    'git add .',
    'git commit -m "' . $commitMessage . '"',
    'git push https://' . $username . ':' . $token . '@github.com/SomeRandmGuyy/3three-io.git main'
];

// Execute each command
foreach ($commands as $command) {
    executeCommand($command);
}

?>

