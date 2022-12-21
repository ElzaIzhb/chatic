    //функция вызова меню при клике на три точки сверху
    function toggleMenu() {

        document.getElementById('menu-right').classList.toggle('menu-right-active');
    }

    //window.onload = setUsername;
    
    //let userName = window.localStorage.getItem('name');
    // if(userName == null || userName == '' || userName == 'null'){
    //     setUsername();
    // } 
        
    //function setUsername(){
    //    let username = prompt("Введите Ваш никнейм:");
    //    window.localStorage.setItem('name', username);
    //}
    //console.log(userName);
    
    function sendMessage() {

        //получаем ввод от пользователя
        let msg = document.getElementById('msg').value;

        //отправляем запрос и получаем данные
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://nordic.sierghieipielie.repl.co/?messeg=' + msg + '&name=' + nameMy,false);
        xhr.send();

        let mess = document.getElementById('msg_input');

        let json = sendRequestGET("https://nordic.sierghieipielie.repl.co/index.php");

        //раскодируем данные
        let data = JSON.parse(json); 
        
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            
            if (nameMy == data[i]['name']) {

            //выводим данные шаблона с добавлением класса "справа" для своих сообщений
            document.getElementById('chat-box__body').innerHTML += document.getElementById('tmpl_mes').innerHTML.replace('${name}', data[i]["name"])
                                                                                                                .replace('${message}', data[i]['messeg'])
                                                                                                                .replace('${date}', data[i]["date"])
                                                                                                                .replace('${style}', 'right');
            } else {
                
                //выводим данные шаблона для чужих сообщений
                document.getElementById('chat-box__body').innerHTML += document.getElementById('tmpl_mes').innerHTML.replace('${name}', data[i]["name"])
                                                                                                                .replace('${message}', data[i]['messeg'])
                                                                                                                .replace('${date}', data[i]["date"]);
            }
        }
    }

    function sendRequestGET(url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();

        //отдает данные(результат)
        return xhr.responseText;
    }

    
    //Код jquery для растягивания поля сообщения по высоте контента (только для textarea)
    $(function() {
        $('#msg').on('input keyup paste', function() {
          var $el = $(this),
              offset = $el.innerHeight() - $el.height();
      
          if ($el.innerHeight() < this.scrollHeight) {
            // Grow the field if scroll height is smaller
            $el.height(this.scrollHeight - offset);
          } else {
            // Shrink the field and then re-set it to the scroll height in case it needs to shrink
            $el.height(1);
            $el.height(this.scrollHeight - offset);
          }
        });
      });

//Попаб Serg

    let popupBg = document.querySelector('.popupBg');
    let popup = document.querySelector('.popup');
    let openPopup = document.querySelectorAll('.open-popup');
    let closePopup = document.querySelector('.close-popup');
    let msgPopup = document.getElementById('msgPopup').value;
    
    openPopup.forEach((button) => {
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            popupBg.classList.add('active');
            popup.classList.add('active');
            toggleMenu();            
        })
    })

    closePopup.addEventListener('click', ()=>{
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    })

    document.addEventListener('click', (e)=>{
        if(e.target == popupBg) {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        }
    })

     function sendpopup() {
        let msgPopup = document.getElementById('msgPopup').value;
        localStorage.setItem('nameMy', msgPopup);
     }  

       let nameMy = localStorage.getItem('nameMy');
    //    console.log(nameMy);

        if (!nameMy){
                document.addEventListener('DOMContentLoaded', function() {
                    popupBg.classList.add('active');
                    popup.classList.add('active');
                });
                }

