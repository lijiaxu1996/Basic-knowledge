## Mac本地环境搭建

### 1、基础安装

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
# git安装已经注意点
git config --global user.name = username
gitconfig --global user.email = email
git branch --set-upstream-to=origin/master #修改电脑之后进行更改
https://blog.csdn.net/zamamiro/article/details/70172900
```

### 2、docker安装

#### 2.1安装网址
https://download.docker.com/mac/stable/Docker.dmg
#### 2.2安装过程
##### 2.2.1 将dmg文件拷贝到应用程序

![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/docker01.jpg)

##### 2.2.2 打开docker创建一个账号并且登录上去

![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/docker02.jpg)

##### 2.2.3 配置国内源

![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/docker03.jpg)

##### 2.2.4 参考:

https://www.cnblogs.com/jiftle/p/12262978.html

https://www.runoob.com/docker/macos-docker-install.html

#### 2.3 docker 可视化pontainer安装

##### 2.3.1 安装pontainer

![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/docker04.jpg)

```bash

docker volume create data #持久化使用
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v data:/data portainer/portainer

```

![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/docker05.jpg)

##### 2.3.2 选择单机模式

![](https://cdn.jsdelivr.net/gh/lijiaxu1996/img-hosting@master/img/docker06.jpg)

