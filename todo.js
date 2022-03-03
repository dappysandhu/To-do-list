document.addEventListener('DOMContentLoaded', function()
{
    // button disabled until pressed key
    document.querySelector('#submit').disabled = true;

    document.querySelector('#entry').onkeypress = function(){
        if
        (document.querySelector('#entry').value.length == 0){
        document.querySelector('#submit').disabled = true;
    }else {
        document.querySelector('#submit').disabled = false;
    }
    };
   //
    document.querySelector('form').onsubmit = function() {
        var entry = document.querySelector('#entry').value;
        
        var li = document.createElement('li');
        li.innerHTML = entry;

        document.querySelector('#task').append(li);
        document.querySelector('#entry').value = ' ';

        document.querySelector('#submit').disabled = true;

        li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through';
        });

        li.addEventListener('dblclick', function(){
            document.querySelector('#task').removeChild(li);

        });

        return false;
    };
});