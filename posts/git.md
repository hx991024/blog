---
title: 'Git'
date: '2026-02-09'
excerpt: 'Git 学习记录'
tags: ['Git', '版本控制']
---

#### Git 概述

**概述：**

Git 是一个免费的、开源的**分布式版本控制系统**，可以快速高效地处理从小型到大型的各种项目。

Git 易于学习，空间小，性能极快。它具有廉价的本地库，方便的暂存区域和多个工作流分支等特性。其性能优于 Subversion(SVN)、CVS 和 ClearCase 等版本控制工具。

#### 版本控制工具

**集中式版本控制工具：**

CVS、SVN、VSS等

集中化的版本控制系统，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连接到这台服务器，取出最新的文件或者提交更新。

这种做法带来了许多好处，每个人都可以在一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限，并且管理一个集中化的版本控制系统，要远比在各个客户端上维护本地数据库来得轻松容易

这么做显而易见的缺点是中央服务器的单点故障。如果服务器宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作

**分布式版本控制工具：**

Git、Mercurial、Bazaar、Darcs等

像 Git 这种分布式版本控制工具 ，客户端提取的不是最新版本的文件快照，而是把代码仓库完整地镜像下来 （本地库），这样任何一处协同工作用的文件发生故障，事后都可以用其他客户端的本地库进行恢复。因为每个客户端的每一次文件提取操作，实际上都是一次对整个文件仓库的完整备份。

分布式的版本控制系统出现之后，解决了集中式版本控制系统的缺陷：

1.  服务器断网的情况下也可以进行开发因为版本控制是在本地进行的
2.  每个客户端保存的也都是整个完整的项目包含历史记录更加安全

![](/images/image_001.png)

**Git 和代码托管中心**

代码托管中心是基于网络服务器的远程代码仓库，一般我们简单称为**远程库**

**局域网：**

- GitLab

**互联网**

- GitHub、Gitee

#### Git 安装

官网地址：[Git](https://git-scm.com/)

![](/images/image_002.jpeg)

选择 Git 安装位置，要求是非中文并且没有空格的目录，然后下一步

![](/images/image_003.jpeg)

Git 选项配置，推荐默认设置，然后下一步

![](/images/image_004.jpeg)

Git 安装目录名，不用修改，直接点击下一步

![](/images/image_005.jpeg)

Git 的默认编辑器，建议使用默认的 Vim 编辑器，然后点击下一步

![](/images/image_006.jpeg)

默认分支名设置，选择让 Git 决定，分支名默认为 master，下一步

![](/images/image_007.jpeg)

修改 Git 的环境变量，选第一个，不修改环境变量，只在 Git Bash 里使用 Git

![](/images/image_008.jpeg)

选择后台客户端连接协议，选默认值 OpenSSL，然后下一步

![](/images/image_009.jpeg)

配置 Git 文件的行末换行符，Windows 使用 CRLF，Linux 使用 LF，选择第一个自动转换，然后继续下一步

![](/images/image_010.jpeg)

选择 Git 终端类型，选择默认的 Git Bash 终端，然后继续下一步

![](/images/image_011.jpeg)

选择 Git pull 合并的模式，选择默认，然后下一步

![](/images/image_012.jpeg)

选择 Git 的凭据管理器，选择默认的跨平台的凭据管理器 ，然后下一步

![](/images/image_013.jpeg)

其他配置，选择默认设置，然后下一步

![](/images/image_014.jpeg)

实验室功能，技术还不成熟，有已知的 bug，不要勾选，然后点击右下角的 Install 按钮，开始安装 Git

![](/images/image_015.jpeg)

点击 Finish 按钮，Git 安装成功！

#### Git 命令

**Git 常用命令**

**设置用户签名**

```shell
git config --global user.name 用户名
git config --global user.email 邮箱
```

**初始化本地库**

```shell
git init
```

**查看本地库状态**

```shell
git status
```

**添加到暂存区**

```shell
git add 文件名
```

**提交到本地库**

```shell
git commit -m "日志信息" 文件名
```

**查看历史记录**

```shell
git reflog
git log
```

**版本穿梭**

```shell
git reset --hard 版本号
```

#### 设置用户签名

**基本语法：**

```shell
git config --global user.name 用户名
git config --global user.email 邮箱
```

![](/images/image_016.jpeg)

**说明：**

签名的作用是区分不同操作者的身份。用户的签名信息在每一个版本的提交信息中能够看到，以此确认本次提交是谁做的。Git 首次安装必须设置一下用户签名，否则无法提交代码

**注意：**

这里设置用户签名和将来登录 GitHub 的账号没有任何关系

#### 初始化本地库

**基本语法：**

```shell
git init
```

![](/images/image_017.jpeg)

#### 查看本地库状态

**基本语法：**

```shell
git status
```

首次查看

![](/images/image_018.jpeg)

添加文件后查看，检测到未追踪的文件

![](/images/image_019.jpeg)

#### 添加暂存区

**基本语法：**

```shell
git add 文件名
```

检测到暂存区有新文件

![](/images/image_020.jpeg)

#### 提交本地库

**基本语法**

```shell
git commit -m "日志信息" 文件名
```

提交

![](/images/image_021.jpeg)

查看状态

![](/images/image_022.jpeg)

修改文件，查看状态，检测到工作区有文件被修改

![](/images/image_023.jpeg)

将修改后的文件再次添加到暂存区

![](/images/image_024.jpeg)

再次查看状态

![](/images/image_025.jpeg)
