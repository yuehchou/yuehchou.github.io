---
title:  "Intermediate Linux Commands"
date:   2019-07-18
header:
  overlay_image: /images/posts/linux/cover.jpg
  overlay_filter: 0.5
tags: Linux
categories: /posts/linux/
author_profile: true
---
<br>

After understanding some basic linux commands, we will continue to introduce other intermediate linux commands.<br>

## 1. cat

Use the this command to display the contents of a file. It is usually used to easily view programs.<br>

## 2. nano, vim

These are already installed text editors in the Linux command line. The <b>nano</b> command is a good text editor that denotes keywords with color and can recognize most languages. And <b>vim</b> is simpler than nano. You can create a new file or modify a file using this editor.<br>

## 3. sudo (SuperUser Do)

A widely used command in the Linux command line, <b>sudo</b> stands for <b>"SuperUser Do"</b>. So, if you want any command to be done with administrative or root privileges, you can use the <b>sudo</b> command. You can also use the command <b>"su"</b> to do this, but you need to set a root password before that. For that, you can use the command <b>"sudo passwd"</b>(not misspelled, it is <b>passwd</b>). Then type in the new root password.<br>

## 4. echo

This command helps us move some data, usually text into a file. For example, if you want to create a new text file or add to an already made text file, you just need to type in, <b>"echo hello, my name is alok >> new.txt"</b>.<br>

## 5. df

Use this command to see the available disk space in each of the partitions in your system. You can just type in <b>df</b> in the command line and you can see each mounted partition and their  used/available space in % and in KBs. If you want it shown in megabytes, you can use the command <b>"df -m"</b>. Also, use the command <b>"df -g"</b>, if you want to change to gigabytes.<br>

## 6. du

Use this command to know the disk usage of a file in your system. If you want to know the disk usage for a particular folder or file in Linux, you can type in the command <b>df</b> and the name of the folder or file. For example, if you want to know the disk space used by the documents folder in Linux, you can use the command <b>"du Documents"</b>. You can also use the command <b>"ls -lah"</b> to view the file sizes of all the files in a folder.<br>

## 7. tar

Use this command to work with tarballs (or files compressed in a tarball archive) in the Linux command line. It has a long list of uses. It can be used to compress and uncompress different types of tar archives like <b>.tar</b>, <b>.tar.gz</b>, <b>.tar.bz2</b>, etc. It works on the basis of the arguments given to it. You can see more examples for <b>tar</b> by this [link](https://www.tecmint.com/18-tar-command-examples-in-linux/).<br>

## 8. zip, unzip

Use <b>zip</b> to compress files into a zip archive, and <b>unzip</b> to extract files from a zip archive.<br>

## 9. uname

Use this command to show the information about the system your Linux distro is running. Using the command <b>"uname -a"</b> prints most of the information about the system. This prints the kernel release date, version, processor type, etc.<br>

## 10. apt-get

Use <b>apt</b> to work with packages in the Linux command line. Use <b>apt-get</b> to install packages. This requires root privileges, so use the <b>sudo</b> command with it. For example, if you want to install downloader <b>wget</b> (this can download files from url), we can type in the command <b>"sudo apt-get install wget"</b>. Similarly, any packages can be installed like this. It is good to update your repository each time you try to install a new package. You can do that by typing <b>"sudo apt-get update"</b>. You can upgrade the system by typing <b>"sudo apt-get upgrade"</b>. We can also upgrade the distro by typing <b>"sudo apt-get dist-upgrade"</b>. The command <b>"apt-cache search"</b> is used to search for a package. If you want to search for one, you can type in <b>"apt-cache search wget"</b>(this doesn't require root).<br>

## 11. hostname

Use this command to know your name in your host or network. Basically, it displays your hostname and IP address. Just typing <b>"hostname"</b> gives the output. Typing in <b>"hostname -I"</b> gives you your IP address in your network.<br>

## 12. ping

Use this command to check your connection to a server. Wikipedia says, "<b>Ping</b> is a computer network administration software utility used to test the reachability of a host on an Internet Protocol (IP) network". Simply, when you type in, for example, <b>"ping google.com"</b>, it checks if it can connect to the server and come back. It measures this round-trip time and gives you the details about it.<br>

