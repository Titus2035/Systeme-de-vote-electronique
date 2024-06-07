
       const pwshowhide = document.querySelectorAll(".showHidePw"),
       secure = document.querySelector(".secure"),
       pwfields = document.querySelectorAll(".password");

    //    js code to show/hide password and change icon
    pwshowhide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwfields.forEach(pwfield =>{
                if (pwfield.type ==="password"){
                     pwfield.type = "text";

                     pwshowhide.forEach(icon =>{
                        icon.classList.replace("ri-eye-off-line", "ri-eye-line")
                        secure.classList.replace("ri-lock-line","ri-lock-unlock-line")
                        
                     })
                } else{
                    pwfield.type = "password";

                    pwshowhide.forEach(icon =>{
                        icon.classList.replace("ri-eye-line", "ri-eye-off-line")
                        secure.classList.replace("ri-lock-unlock-line","ri-lock-line")
                     })

                }
            })
        })
    })

    document.querySelectorAll('.forminput').forEach(input =>{
        input.addEventListener('focus', function(e){
            const parentclass = this.parentNode.getAttribute('class');
            let tparentclass = parentclass.split(' ');
            let input = tparentclass[0];

            const parent = this.parentNode.getAttribute('data-id');
            const parenticon = this.previousElementSibling.getAttribute('class');
            let tparentclassicon = parenticon.split(' ');
            let inputicon = tparentclassicon[1];

            let allinput = document.querySelectorAll('.'+input);
            for(let i=0; i<allinput.length; i++){
                allinput[i].classList.remove('active');
            }
            let allinputicon = document.querySelectorAll('.'+inputicon);
            for(let i=0; i<allinputicon.length; i++){
                allinputicon[i].classList.remove('active');
            }

            document.querySelector('.'+parent).classList.add('active');
            document.querySelector('#'+parent+'icon').classList.add('active');
            
        });
    })

    document.querySelectorAll('.forminput').forEach(input =>{
        input.addEventListener('blur', function(e){
            const parentclass = this.parentNode.getAttribute('class');
            let tparentclass = parentclass.split(' ');
            let input = tparentclass[0];

            const parenticon = this.previousElementSibling.getAttribute('class');
            let tparentclassicon = parenticon.split(' ');
            let inputicon = tparentclassicon[1];

            let allinput = document.querySelectorAll('.'+input);
            for(let i=0; i<allinput.length; i++){
                allinput[i].classList.remove('active');
            }

            let allinputicon = document.querySelectorAll('.'+inputicon);
            for(let i=0; i<allinputicon.length; i++){
                allinputicon[i].classList.remove('active');
            }
            
        });
    })

   
    