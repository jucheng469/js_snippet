let path = require ('path');
let fs = require ('fs');

// 追加文本，不存在就新建
function appendFile() {
    // fs.appendFile('test_append.txt', '测试追加文字内容', err => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('appended success');
    //
    // })
    try {
        fs.appendFileSync('test_append.txt', '\n追加文字内容123456😝😝', 'utf-8');

    } catch (e) {
        console.error(e);
    } finally {

    }
};
// appendFile();

// 改变模式
function changeMod() {
    fs.chmod(path.resolve(__dirname, './test_append.txt'), '777', err => {
        if (err) {
            throw err;
        }
        console.log('success');
    });
}

// changeMod();
function link() {
    fs.link('./text.txt', 'file', err => {
        if (err) {
            throw err;
        }
        console.log('success');
    });
}

// link();

function mkdir() {
    fs.mkdir('new_dir', err => {
        if (err) {
            throw err;
        }
        console.log('success');
    });
}

// mkdir();

function readDir() {
    fs.readdir('new_dir', (err, files) => {
        if (err) {
            throw err;
        }
        console.log(files.join('--'));
    });
}

// readDir();

function readFile() {
    fs.readFile(path.resolve(__dirname, 'text.txt'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    });
}

// readFile();

function rename() {
    // fs.rename('test.txt', 'tst.txt', err => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('success');
    // });
    fs.renameSync('tst.txt', 'tst1.txt');
}

// rename();

function rmdir() {
    fs.rmdir('old_dir', err => {
        if (err) {
            console.error(err);
        }
        console.log('success');
    });
}
// rmdir();

function stat() {
    fs.stat('file', (err, stat) => {
        if (err) {
            throw err;
        }
        console.log(stat);
    })
}
stat();
