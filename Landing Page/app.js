(function(){    //Scope control

    "use strict";   //Scope control

    //Variables needed
    const sections = document.querySelectorAll('section');
    const ul = document.getElementById("navbar__list");
    const docFrag = document.createDocumentFragment();
    const upbtn = document.getElementById('goupp');

    //Adding section buttons automatically 
    sections.forEach((elm)=>{       
        let btn = document.createElement('button');
        let li = document.createElement('li');
        let btnatt = elm.getAttribute('data-nav');
        let textNode = document.createTextNode(btnatt);
        btn.className='navbar_buttons';
        btn.appendChild(textNode);
        li.appendChild(btn);
        docFrag.appendChild(li);

        //Adding event listener for clicking the buttons
        btn.addEventListener('click',()=>{      
            elm.scrollIntoView({behavior:'smooth',block:"center"});
        });

    });

    ul.appendChild(docFrag);

    //All scrolling actions
    window.onscroll = ()=>{

        //controlling the appearance of go to top button
        if (document.body.scrollTop >=280){
            upbtn.className = 'goupActive';
        }
        else if (document.body.scrollTop < 280){
            upbtn.className = 'goup';
        }

        //changing class names depending on which section we are reading
        sections.forEach((element)=>{
        const dime = element.getBoundingClientRect();
        const secatt = element.getAttribute('data-nav');
        if(dime.top > 0 && dime.top < 300){
            sections.forEach((elm1)=>{
                elm1.className = ""
            })
            element.className = "your-active-class"

            //Changing active state of buttons to change color depending on which section is in viewport
            var buttons = document.querySelectorAll('button');

            buttons.forEach((btnelm)=>{
                if(btnelm.innerText==secatt){
                    buttons.forEach((defclass)=>{
                        defclass.classList.remove('active')
                    })
                    btnelm.classList.add('active')
                }
            })
        };
        });
        //Removing the highlighted button when going back to top
        if(document.body.scrollTop == 0){
            var buttons = document.querySelectorAll('button');
            buttons.forEach((rmv)=>{
                rmv.classList.remove('active');
            });
        }
        let hidenav = setTimeout(()=>{
            ul.style.display = "none"
        },8000)
        ul.style.display = 'block'
    }

    //Event listener for the go to top button
    upbtn.addEventListener('click',()=>{        
        window.scrollTo({top:0,behavior:"smooth"});
    });
})()