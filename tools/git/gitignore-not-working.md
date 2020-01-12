# gitignore 不起作用

.gitignore 中已经标明忽略的文件目录下的文件，git push 的时候还会出现在 push 的目录中，原因是因为在 git 忽略目录中，新建的文件在 git 中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore 中已经声明了忽略路径也是不起作用的，这时候我们就应该先把本地缓存删除，然后再进行 git 的 push，这样就不会出现忽略的文件了。git 清除本地缓存命令如下：

```js
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
