const { exec, execSync } = require("child_process");
const { from, Observable, defer } = require('rxjs');
const { concatAll } = require('rxjs/operators');
const fs = require('fs');

// 建立angular
const build$ = new Observable((subsc) => {
    console.log('run ng build...');
    const originalEnvFileString = fs.readFileSync('./src/environments/environment.prod.source.ts').toString();
    const modifyVersionString = originalEnvFileString.replace(/\{buildTime\}/, new Date().toISOString());
    fs.writeFileSync('./src/environments/environment.prod.ts', modifyVersionString);
    exec("ng build --build-optimizer --configuration production", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        // if (stderr) {
        //     console.log(`stderr: ${stderr}`);
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
// 複製檔案
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

// commit
const gitGithubAikaClac$ = new Observable((subsc) => {
    console.log('git aikacalc');
    const cmd = 'cd ../aika_calc_web'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" commit -a -m' + `u`;
    // const cmd = 'cd';
    execSync(cmd, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    subsc.next();
    subsc.complete();
});
const gitGithub$ = new Observable((subsc) => {
    console.log('git aikacalc.github.io');
    const cmd = 'cd ../aikacalc.github.io'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" add --all'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" commit -m' + `u`;
    execSync(cmd, (error, stdout, stderr) => { });
    subsc.next();
    subsc.complete();
});
const gitBitbucket$ = new Observable((subsc) => {
    console.log('git aikacalc.bitbucket.io');
    const cmd = 'cd ../aikacalc.bitbucket.io'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" add --all'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" commit -m' + `u`;
    execSync(cmd, (error, stdout, stderr) => { });
    subsc.next();
    subsc.complete();
});


// 上傳aikacalc
const gitPushGithubAikaClac$ = new Observable((subsc) => {
    console.log('git push aikacalc');
    const cmd = 'cd ../aika_calc_web'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" push origin master';
    execSync(cmd, (error, stdout, stderr) => { });
    subsc.next();
    subsc.complete();
});

// 上傳aiakcalc.github.io
const gitPushGithubIO$ = new Observable((subsc) => {
    console.log('git push aikacalc.github.io');
    const cmd = 'cd ../aikacalc.github.io'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" push origin master';
    execSync(cmd, (error, stdout, stderr) => { });
    subsc.next();
    subsc.complete();
});

// 上傳aikacalc.bitbucket.io
const gitPushBitbucketIO$ = new Observable((subsc) => {
    console.log('git push aikacalc.bitbucket.io');
    const cmd = 'cd ../aikacalc.bitbucket.io'
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" push origin master';
    execSync(cmd, (error, stdout, stderr) => { });
    subsc.next();
    subsc.complete();
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
