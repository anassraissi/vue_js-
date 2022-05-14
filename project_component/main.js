


window.onload = function () {   //when page loaded doz mn hna
    Vue.component('comp-course',{
        'template':
                    `<div class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img src="codeIgniter.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">كوديكناتر 2,3,4</h5>
                        <p class="title">إطار صغير بميزات قوية
                        </p> <p class="card-text body_text">
                            كوديكناتر هو إطار ذو مساحة صغيرة جدًا ، مصمم للمطورين الذين يحتاجون إلى مجموعة أدوات بسيطة وأنيقة لإنشاء تطبيقات ويب كاملة الميزات</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">   <i class="fa-brands fa-youtube"></i>  إحصائيات اليوتيوب</li>
                        <li class="list-group-item">
                            <ul class="list-prop">
                            <li><i class="fa-solid fa-table-list"></i> درس 33</li>
                            
                            <li>   <i class="fa-solid fa-clock"></i>  06:44:33</li>
                            <li> <i class="fa-solid fa-eye"></i>  مليون مشاهدة 43  </li>
                            <li>  <i class="fa-solid fa-thumbs-up"></i> إعجاب 444</li>
                            <li> <i class="fa-solid fa-comment"></i>  55 تعليق</li>
                            </ul>
                        </li>
                        </ul>
                        
                        <div class="card-body">
                        <button class="btn btn-primary btn">شاهد الأن</button>
                         </div>
                         </div>
                         </div>`

     });
new Vue({
    'el':'#courses',
      'template': `<div class="row">
                    <comp-course></comp-course>  
                    </div>`
                    // comp-course components declaration inside vue class 
 });
}