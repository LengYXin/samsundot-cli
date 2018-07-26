const download = require('download-git-repo')
const path = require('path');
const ora = require('ora');
const fsExtra = require('fs-extra');
const log = require('./log');
/**
 * 下载模板
 */
module.exports = (target = 'tmp', type = 'template') => {
    const spinner = ora('Download Temporary').start();
    target = path.join(path.dirname(__dirname), 'temporary', target);
    fsExtra.removeSync(target);
    return new Promise((resolve, reject) => {
        // 下载 git 模板
        spinner.start();
        download('LengYXin/samsundot-cli#' + type,
            target, {}, (err) => {
                if (err) {
                    reject(err)
                } else {
                    spinner.stop();
                    log.success("Download Success");
                    resolve(target)
                }
            })
    })
}