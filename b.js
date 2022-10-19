const { exec, execSync } = require("child_process");
const { from, Observable, defer } = require('rxjs');
const { concatAll } = require('rxjs/operators');
const fs = require('fs');

const build$ = new Observable((subsc) => {
    console.log('run ng build...');

    exec("ng build --prod --build-optimizer", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        // if (stderr) {
        //     console.log(`stderr: ${stderr}`);
        //     reject(stderr);
        //     return;
        // }
        console.log(`stdout: ${stdout}`);
        subsc.next();
        subsc.complete();
    });
});
function getDistFiles(dirPath) {
    const dirents = fs.readdirSync(dirPath, { withFileTypes: true });
    const filesNames = dirents
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);
    // filesNames.forEach(fn => {
    //     console.log(fn);
    // });
    return filesNames;
}
const copyGithub$ = new Observable((subsc) => {
    console.log('copyGithub');
    const targetDirName = 'aikacalc.github.io';
    const locFiles = getDistFiles(`../${targetDirName}`);
    const distFiles = getDistFiles(`dist/AikaCalc`);
    locFiles.forEach(fileName => {
        fs.unlinkSync(`../${targetDirName}/${fileName}`, { recursive: true });
    });
    distFiles.forEach(fileName => {
        fs.copyFileSync(`dist/AikaCalc/${fileName}`, `../${targetDirName}/${fileName}`);
    });
    subsc.next();
    subsc.complete();
});
const copyBitbucket$ = new Observable((subsc) => {
    console.log('copyBitbucket');
    const targetDirName = 'aikacalc.bitbucket.io';
    const locFiles = getDistFiles(`../${targetDirName}`);
    const distFiles = getDistFiles(`dist/AikaCalc`);
    locFiles.forEach(fileName => {
        fs.unlinkSync(`../${targetDirName}/${fileName}`, { recursive: true });
    });
    distFiles.forEach(fileName => {
        fs.copyFileSync(`dist/AikaCalc/${fileName}`, `../${targetDirName}/${fileName}`);
    });
    subsc.next();
    subsc.complete();
});
const gitGithubAikaClac$ = new Observable((subsc) => {
    console.log('git aikacalc');
    const cmd = 'cmd /K "C:\Program Files\Git\bin\git.exe" commit -a -m' + `u`;
    exec(cmd, (error, stdout, stderr) => {
        subsc.next();
        subsc.complete();
    });
});
const gitGithub$ = new Observable((subsc) => {
    console.log('git aikacalc.github.io');
    const cmd = 'cd ../aikacalc.github.io'
        + ' & cmd /K "C:\Program Files\Git\bin\git.exe" commit -a -m' + `u`;
    exec(cmd, (error, stdout, stderr) => {
        subsc.next();
        subsc.complete();
    });
});
const gitBitbucket$ = new Observable((subsc) => {
    console.log('git aikacalc.bitbucket.io');
    const cmd = 'cd ../aikacalc.bitbucket.io'
        + ' & cmd /K "C:\Program Files\Git\bin\git.exe" commit -a -m' + `u`;
    exec(cmd, (error, stdout, stderr) => {
        subsc.next();
        subsc.complete();
    });
});


from([
    defer(() => build$),
    defer(() => copyGithub$),
    defer(() => copyBitbucket$),
    defer(() => gitGithubAikaClac$),
    defer(() => gitGithub$),
    defer(() => gitBitbucket$),
])
    .pipe(
        concatAll(1)
    )
    .subscribe({
        complete: () => {
            console.log('end');
        }
    });