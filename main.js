    function sendd() {

        //получаем ввод от пользователя
        let msg = document.getElementById('msg').value;

        //отправляем запрос и получаем данные
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://nordic.sierghieipielie.repl.co/?messeg=' + msg,false);
        xhr.send();

        //нахожу контейнер для вывода результата
        //let output = document.getElementById('msg_input');

        //очищаем контейнер
        output.innerHTML = '';

        //вывожу данные в контейнер
        output.innerHTML = xhr.responseText;

    }

    function sendMessage() {
        let mess = document.getElementById('msg_input');

        let json = sendRequestGET("https://nordic.sierghieipielie.repl.co/index.php");

        //раскодируем данные
        let data = JSON.parse(json); 
        
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            //выводим данные шаблона
            document.getElementById('chat-box__body').innerHTML += document.getElementById('tmpl_mes').innerHTML.replace('${name}', data[i]["name"])
                                                                                                                .replace('${message}', data[i]['messeg'])
                                                                                                                .replace('${date}', data[i]["date"]);
        }
    }

    function sendRequestGET(url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();

        //отдает данные(результат)
        return xhr.responseText;
    }