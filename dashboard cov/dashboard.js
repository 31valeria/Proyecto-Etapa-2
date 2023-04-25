const sideMenu = documento.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.queySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar 
closeBtn.addEventlistene ('click', () =>   {    
   sideMenu.style.dysplay = 'block';
})    

// close sidebar 
closeBtn.addEventlistener('click', () =>        {
    sideMenu.style.dysplay = 'none';
})  

// change theme 
themeToggler,addEventListener ('click', () =>   {
 sideMenu.style.dysplay = 'none';
})

// chang theme  
themeToggler.addEventListener('click',() =>     {
  document.body.classList.toggle('dark-theme-variables');
  
  themeToggler.querySelector('span:nth-child(1)').
  classList.toggle('active');
  themeToggler.querySelector('span:nth-vhild(2)').
  classList.toggle('active');
})  


// fill orders in table 
Orders.forEach(order => {
  const tr = document .createElement('tr');
  const trContent = `  
   
  
          <td>${order.productName}</td>
   
                      `

})





















