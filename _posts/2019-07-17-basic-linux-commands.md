---
title:  "Basic Linux Commands"
date:   2019-07-17
header:
  overlay_image: /images/posts/linux/cover.jpg
  overlay_filter: 0.5
tags: Linux
categories: /posts/linux/
author_profile: true
---

<br>

## 1. ls (list)

Use this command to know what files are in the directory you are in. You can see all the hidden files by using the command <b>"ls -a"</b>. Also, you can only show all text files by using the command <b>"ls *.txt"</b>.<br>

## 2. cd (change directory)

Use the this command to go to a directory. For example, if you are in the home folder, and you want to go to the documents folder, then you can type in <b>"cd Documents"</b>. Remember, this command is case sensitive, and you have to type in the name of the folder exactly as it is. To go back from a folder to the folder before that, you can type <b>"cd .."</b>. The two dots represent back.<br>

## 3. pwd (print work directory)

To know which directory you are in, you can use the this command. It gives us the absolute path, which means the path that starts from the root. The root is the base of the Linux file system. It is denoted by a forward slash<b>(/)</b>. The user directory is usually something like <b>"/home/username/"</b>.<br>

## 4. mkdir (make directory)

Use this command when you need to create a folder or a directory. For example, if you want to make a directory called <b>"Test"</b>, then you can type <b>"mkdir Test"</b>. If you want to create a directory named <b>"Just A Test"</b>, then you can type <b>"mkdir Just\ A\ Test"</b>.<br>

## 5. cp (copy)

Use this command to copy files through the command line. It takes two arguments: The first is the location of the file to be copied, the second is where to copy, such as <b>"cp [source file path] [destination path]"</b>.<br>

## 6. mv (move files or rename files)

Use this command to move files through the command line. We can also use the <b>mv</b> command to rename a file. For example, if we want to rename the file <b>"old.txt"</b> to <b>"new.txt"</b>, we can use <b>"mv old.txt new.txt"</b>. It also takes the two arguments, just like the <b>cp</b> command.<br>

## 7. rm (remove files)

Use this command to delete files and directories. Use <b>"rm -r [directory name]"</b> to delete just the directory. It deletes both the folder and the files it contains when using only the <b>rm</b> command.<br>

## 8. touch

Use this command to create a file. It can be anything, from an empty txt file to an empty zip file. For example, <b>"touch new.txt"</b>.<br>

