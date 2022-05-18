


window.onload = function () {   //when page loaded doz mn hna
    Vue.component('comp-course',{
          'props':{
              'course':{type:Object,required:true}
          },
        'template':
                    `<div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" :src="course.thumbnails" alt="">
                        <div class="card-body">
                        <h5 class="card-title">{{course.name}}</h5>
                        <p class="title">
                        </p> <p class="card-text body_text">{{course.description}}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">   <i class="fa-brands fa-youtube"></i>  إحصائيات اليوتيوب</li>
                        <li class="list-group-item">
                            <ul class="list-prop">
                            <li><i class="fa-solid fa-table-list"></i> {{course.statistics.lessons}}</li>
                            
                            <li>   <i class="fa-solid fa-clock"></i> {{course.statistics.duration}}</li>
                            <li> <i class="fa-solid fa-eye"></i>  {{course.statistics.duration}}  </li>
                            <li>  <i class="fa-solid fa-thumbs-up"></i>  {{course.statistics.likeCount}} </li>
                            <li> <i class="fa-solid fa-comment"></i>  {{course.statistics.commentCount}} </li>
                            </ul>
                      </li>
                        </ul>
                        
                        <div class="card-body">
                        <a target="_blank" class="btn btn-primary btn" :href="course.url">شاهد الأن</a>
                         </div>
                         </div>
                         </div>`

     })
new Vue({
    'el':'#courses',
      'created':function(){   //this mean when page loaded ktab    'created'
         console.log('wellcome Anass project loaded');  
         this.getcourses(); // load getcourse when page loaded
      },
      'methods':{
           'getcourses':function(){    //function to get data jason from file courses.json  
                         // GET /someUrl
                    this.$http.get('courses.json').then(response => {  // that work just on server web http ,
                        // i do it by chrome server extention

                        // get body data
                        this.courses = response.body;

                    }, response => {
                        // error callback
                    });

           }
        },
        // lister les components by foreach
      'template': `<div class="row">
      <comp-course :course=firstcourse></comp-course>     
      <comp-course v-for="course in courses" :course="course"></comp-course>   
      
                    </div>`,
                    // comp-course components declaration inside vue class 
     'data':{
          'courses':[],
         'firstcourse':{
            "id": "PL1FWK-sgJ9ek59ylOuaS8Ggjz9oBVM8Hb",
	        "name": "VueJS Local",
	        "url": "https:\/\/www.youtube.com\/watch?v=TQQVt3CbSCw&list=PL1FWK-sgJ9ek59ylOuaS8Ggjz9oBVM8Hb",
	        "description": "",
	        "thumbnails": "https:\/\/i.ytimg.com\/vi\/TQQVt3CbSCw\/sddefault.jpg",
	        "statistics": {
	            "viewCount": 111,
	            "likeCount": 11,
	            "commentCount": 7,
	            "duration": "00:04:18",
	            "lessons": 2
         }
      }
     }
});
}
