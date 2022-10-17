
document.querySelector('.wrapper__btn').addEventListener("click",function(){
  var value = document.querySelector('.wrapper__input').value;
  var li = document.createElement('li');
  var span_text = document.createElement('span');
  var span_btn = document.createElement('span');
  var ul = document.querySelector('.list');
  li.classList.add('list__itm');
  span_btn.classList.add('list__btn');
  span_text.append(value);
  ul.appendChild(li).append(span_btn, span_text);
});

document.addEventListener('click', function(event) {
  if (event.target.className == 'list__btn') {
    event.target.parentNode.remove();
  }

});

document.addEventListener('click', function(event) {
  if (event.target.className == 'list__itm' ) { 
     event.target.classList.add('list__itm-act');
     event.target.classList.add('list__itm-col');
  }  else if(event.target.className == 'list__itm-act'){
    console.log('f');
  }
});

document.addEventListener('click', function(event) {
  if (event.target.className == 'list__itm' ) { 
    if(event.target.className == 'list__itm-act' || event.target.className == 'list__itm' ){
      console.log('f');
      /* event.target.classList.remove('list__itm-act');
      event.target.classList.remove('list__itm-col'); */
    }
     
  }
});