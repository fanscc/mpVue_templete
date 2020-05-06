const inquirer = require('inquirer')
const spawn = require('child_process').spawn
const jetpack = require('fs-jetpack')

const PLATFORM = process.env.npm_config_otp || 'wx'
const dev = process.env.npm_config_env
const mapHost = jetpack.read('./build/beforBuild/host-map.json', 'json')
const list = []
/* eslint-disable */
for (const i in mapHost) {
    list.push({
        name: i,
        value: mapHost[i],
    });
}

const questions = [];

if (!dev) {
    questions.push({
        type: "list",
        name: "baseUrl",
        message: "选一个后台的地址",
        choices: list,
    });
}

inquirer.prompt(questions).then((answers) => {
    let cmd = "";
    const command = `npm run _dev:${PLATFORM}`;
    console.log(command)
    if (answers.baseUrl) {
        process.env.baseUrl = answers.baseUrl;
    }
    if (/^win/.test(process.platform)) {
        // cmd = spawn('cmd', ['/s', '/c', command], { stdio: 'inherit' });
        cmd = spawn("cmd", ["/s", "/c", command]);
    } else {
        cmd = spawn("/bin/sh", ["-c", command], { stdio: "inherit" });
    }
    cmd.stdout.on("data", (data) => {
        process.stdout.write(data);
    });

    cmd.stderr.on("data", (data) => {
        process.stderr.write(data);
    });
});
