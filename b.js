const { exec, execSync } = require("child_process");
const { from, Observable, defer } = require('rxjs');
const { concatAll } = require('rxjs/operators');
const fs = require('fs');

/**
 * 1. 生成访问令牌
 * GitHub: https://github.com/settings/tokens?type=beta
登录到 GitHub。
进入 Settings -> Developer settings -> Personal access tokens。
生成一个新的访问令牌，确保它具有推送权限（repo 权限）。

 * Bitbucket: https://bitbucket.org/account/settings/app-passwords/
登录到 Bitbucket。
进入 Personal settings -> App passwords。
生成一个新的应用密码，确保它具有推送权限（Repository 权限）。

 * 2. 使用访问令牌进行身份验证
git remote set-url origin https://<TOKEN>@github.com/aikacalc/aika_calc_web.git
git push origin master

git remote set-url origin https://<USERNAME>:<TOKEN>@bitbucket.org/aikacalc/aikacalc.bitbucket.io.git
git push origin master
 */

const tokensJson = fs.readFileSync('./token.json').toString();
const tokens = JSON.parse(tokensJson);
const aikacalcRemote = tokens.aikaclac;
const aikacalcGithubIORemote = tokens.aikacalcGithubIO;
const aikacalcBitbucketIORemote = tokens.aikacalcBitbucketIO;

// 建立angular
const build$ = new Observable((subsc) => {
    console.log('run ng build...');
    const originalEnvFileString = fs.readFileSync('./src/environments/environment.prod.source.ts').toString();
    const modifyVersionString = originalEnvFileString.replace(/\{buildTime\}/, new Date().toISOString());
    fs.writeFileSync('./src/environments/environment.prod.ts', modifyVersionString);
    exec("ng build --configuration production", (error, stdout, stderr) => {
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
    const distFiles = getDistFiles(`dist/aika_calc_web/browser`);
    locFiles.forEach(fileName => {
        fs.unlinkSync(`../${targetDirName}/${fileName}`, { recursive: true });
    });
    distFiles.forEach(fileName => {
        fs.copyFileSync(`dist/aika_calc_web/browser/${fileName}`, `../${targetDirName}/${fileName}`);
    });
    subsc.next();
    subsc.complete();
});
const copyBitbucket$ = new Observable((subsc) => {
    console.log('copyBitbucket');
    const targetDirName = 'aikacalc.bitbucket.io';
    const locFiles = getDistFiles(`../${targetDirName}`);
    const distFiles = getDistFiles(`dist/aika_calc_web/browser`);
    locFiles.forEach(fileName => {
        fs.unlinkSync(`../${targetDirName}/${fileName}`, { recursive: true });
    });
    distFiles.forEach(fileName => {
        fs.copyFileSync(`dist/aika_calc_web/browser/${fileName}`, `../${targetDirName}/${fileName}`);
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
        + ` & cmd /K "C:/Program Files/Git/bin/git.exe" remote set-url origin ${aikacalcRemote}`;
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" push origin master';
    execSync(cmd, (error, stdout, stderr) => { });
    subsc.next();
    subsc.complete();
});

// 上傳aiakcalc.github.io
const gitPushGithubIO$ = new Observable((subsc) => {
    console.log('git push aikacalc.github.io');
    const cmd = 'cd ../aikacalc.github.io'
        + ` & cmd /K "C:/Program Files/Git/bin/git.exe" remote set-url origin ${aikacalcGithubIORemote}`
        + ' & cmd /K "C:/Program Files/Git/bin/git.exe" push origin master';
    execSync(cmd, (error, stdout, stderr) => { });
    subsc.next();
    subsc.complete();
});

// 上傳aikacalc.bitbucket.io
const gitPushBitbucketIO$ = new Observable((subsc) => {
    console.log('git push aikacalc.bitbucket.io');
    const cmd = 'cd ../aikacalc.bitbucket.io'
        + ` & cmd /K "C:/Program Files/Git/bin/git.exe" remote set-url origin ${aikacalcBitbucketIORemote}`
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
    defer(() => gitPushGithubAikaClac$),
    defer(() => gitPushGithubIO$),
    defer(() => gitPushBitbucketIO$),
])
    .pipe(
        concatAll(1)
    )
    .subscribe({
        complete: () => {
            console.log('end');
        }
    });
