// 游戏文案编辑部分

const data = new Set()


data.add(temp('请输入一个文字','这是在markdown中写的文字','这是在markdown中写的文字'))
data.add(temp('这是加粗的文字','**这是加粗的文字**','**这是加粗的文字**'))
data.add(temp('这是倾斜的文字','*这是倾斜的文字*','*这是倾斜的文字*'))
data.add(temp('这是斜体加粗的文字','***这是斜体加粗的文字***','***这是斜体加粗的文字***'))
data.add(temp('~~这是加删除线的文字~~','~~这是加删除线的文字~~','~~这是加删除线的文字~~'))

data.add(temp('尝试写一个一级标题','# 是一级标题','#'))
data.add(temp('尝试写一个二级标题','## 是二级标题','##'))
data.add(temp('尝试写一个三级标题','### 是三级标题','###'))
data.add(temp('尝试写一个四级标题','#### 是四级标题','####'))
data.add(temp('尝试写一个五级标题','##### 是五级标题','#####'))
data.add(temp('尝试写一个六级标题','###### 是六级标题','######'))

data.add(temp('插入一个有序列表','1.这是第一个数据','1. '))
data.add(temp('插入一个有序列表','2.这是第二个数据','2. '))

data.add(temp('插入一个无序列表','- 这是第一个数据','- '))
data.add(temp('插入一个无序列表','- 这是第二个数据','- '))





console.log(data)



function temp( title, value, reslut,success,error ) {
    return { title , value , reslut,success,error }
}