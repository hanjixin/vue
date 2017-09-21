var template ={
    template:'<div>大家好我是路友谊的</div><h1>556556</h1>'
};

var router=new VueRouter({
    routers:[
        { path:"/",
           redirect:"news"
        },
        {
            path:"news",
            componten:template
        }
    ]
})


window.vm = new Vue({
    el:"#app",
    router:router,
    data:{
        message:"hello word",
        name:"",
        arr:['55665','55665','55665','55665','55665']
    },
    template:"#tem",
    render(createElement){
        "use strict";
        return createElement("ul",{class:
            {bg:true},
            style:{
            color:"red"
            },
            attrs:{
            han:"jixin"
            }

        },[
            createElement("li",5)
        ])
    },
    methods:{
        show:function () {
            alert(this.arr)
        }
        ,han(){}
    }

    // compontens:tem,
    // methods:{
    //     han:function () {
    //         this.name++;
    //     }
    // },
    // beforeCreate:function () {
    //    alert(55);
    // },
    // created:function () {
    //     alert(5656);
    // },
    // beforeMount:function () {
    //     alert(56566);
    // },
    // mounted:function () {
    //     alert(5656);
    // },

    })

