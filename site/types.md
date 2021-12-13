### **Types**

- Number - intiger(1) / float(1.2) - name
- String - 'strimg' - name
- Boolean - true/false - name
- Array - [1, 'string', [12, 45, {key: 'value'}]] -name[2][2].key = 'value'
- Object - {key: 'string', key2: 123, array:[12, 54], toTow: function(){return 2}} - name.array[0] = 12
- function - const toTow = functoin(){return 2} - toTow();
- null
- undefined // system


posts
- id
- title
- content
- link
- ahuter
- created date
- modiffie date

comments
- id
- content
- ahuter
- post id

```js

const record = {
    title: 'the title of the post',
    content: 'the content',
    ahuter: 'sbc',
    comments: [
        {
            id: 1,
            auther: 'baruch',
            content: 'the content of the comment'
        }
    ]
},

const post = {
    record: null,
    init(){
        this.record = record;
    },
    getTitle: function(){
        return this.record.title;
    },

    getContent: function(){
        return this.record.content
    }
}

post.getTitle(); // 'the title of the post'

documet.addEventListinar('load', post.init)
```