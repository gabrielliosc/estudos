function openMenu(){ 
    const list = document.querySelector('#listBtn');
    const menuList = document.querySelector('#menu');

    if (list.classList.contains('active')){

        list.classList.remove('active');
        menuList.classList.remove('show');
        menuList.classList.add('hide');

    } else {

        list.classList.add('active');
        menuList.classList.add('show');
        menuList.classList.remove('hide');
    }
    
    
    const className= active.show? 'btn' : 'btn active';
}