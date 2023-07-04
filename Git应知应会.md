### commit 提交规范

Header 部分只有一行，包括三个字段：type（必需）、scope（可选）和 subject（必需）。

（1）type

type 用于说明 commit 的类别，只允许使用下面几个标识。

```ruby
    feat：新功能（feature）。
    fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
    fix：产生diff并自动修复此问题。适合于一次提交直接修复问题
    to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
    docs：文档（documentation）。
    style：格式（不影响代码运行的变动）。
    refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
    perf：优化相关，比如提升性能、体验。
    test：增加测试。
    chore：构建过程或辅助工具的变动。
    revert：回滚到上一个版本。
    merge：代码合并。
    sync：同步主线或分支的Bug。
```

如果 type 为 feat 和 fix，则该 commit 将肯定出现在 Change log 之中。其他情况（docs、chore、style、refactor、test）由你决定，要不要放入 Change log，建议是不要。

（2）scope

scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

（3）subject

subject 是 commit 目的的简短描述，不超过 50 个字符。

        以动词开头，使用第一人称现在时，比如change，而不是changed或changes
        第一个字母小写
        结尾不加句号（.）
