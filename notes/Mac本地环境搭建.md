## Mac本地环境搭建

### 1、前端安装

```bash
# 安装git
https://sourceforge.net/projects/git-osx-installer/
# 利用gitee命令进行安装 （仅仅本地学习开发使用，用于生产环境出现问题不负责。）
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
# 安装node环境
https://my.oschina.net/guodapeng/blog/4333719
# npm环境配置
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm config set registry https://registry.npm.taobao.org
npm i -g yarn
echo "PATH=$PATH:~/.yarn/bin" >> ~/.bash_profile && source .bash_profile
```

