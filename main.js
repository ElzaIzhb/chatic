    //функция вызова меню при клике на три точки сверху
    function toggleMenu() {

        document.getElementById('menu-right').classList.toggle('menu-right-active');
    }
    
    function sendMessage() {
        
        let container = document.getElementById('chat-box__body');
        container.innerHTML = "";

        //получаем ввод от пользователя
        let msg = document.getElementById('msg').value;

        //отправляем запрос на сервер, только если сообщение НЕ ПУСТОЕ
        //if (msg !== '') {

            //отправляем запрос и получаем данные
            let xhr = new XMLHttpRequest();
            xhr.open('GET','https://nordic.sierghieipielie.repl.co/?messeg=' + msg + '&name=' + nameMy,false);
            xhr.send();
            
                function sendRequestGET(url) {
                    let xhr = new XMLHttpRequest();
                    xhr.open('GET', url, false);
                    xhr.send();

                    //отдает данные(результат)
                    return xhr.responseText;
                }

            let json = sendRequestGET("https://nordic.sierghieipielie.repl.co/index.php");

            //раскодируем данные
            let data = JSON.parse(json); 
            
            //console.log(data);

            for (let i = 0; i < data.length; i++) {
                
                if (nameMy == data[i]['name']) {

                //выводим данные шаблона с добавлением класса "справа" для своих сообщений
                container.innerHTML += document.getElementById('tmpl_mes').innerHTML.replace('${name}', data[i]["name"])
                                                                                                                    .replace('${message}', data[i]['messeg'])
                                                                                                                    .replace('${date}', data[i]["date"])
                                                                                                                    .replace('${style}', 'right');
                } else {
                    
                    //выводим данные шаблона для чужих сообщений
                    container.innerHTML += document.getElementById('tmpl_mes').innerHTML.replace('${name}', data[i]["name"])
                                                                                                                    .replace('${message}', data[i]['messeg'])
                                                                                                                    .replace('${date}', data[i]["date"]);
                }
            }

        //}
        
        //автопрокрутка скроллбара к последнему сообщению
        chatWindow = document.getElementById('chat-box__body'); 
        var xH = chatWindow.scrollHeight; 
        chatWindow.scrollTo(0, xH);
        
        //очистка textarea после отправки сообщения
        document.getElementById('msg').value = '';

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
                } /* else {
                    sendMessage();
                } */

    // Serg сообщения по энтеру    
     document.getElementById('msg').addEventListener('keypress', (e)=> {
                if (e.key === 'Enter') {
                    sendMessage();
                }            
        });

    // Serg обновление сообщений
    setInterval(function() { 
        if (nameMy) {
            sendMessage(); 
        }
    }, 5000);

