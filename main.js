
function Login(){
fetch('./data.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        
        var temp = data.members
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var regx1 = /^[a-zA=Z\_\.0-9] +@[a-zA-Z\_\.0-9]+$/
        if(regx1.test(email)){
            
        }


        for (let i = 0; i < temp.length; i++) {
            var name2 = `${temp[i]["email"]}`
            var password2 = `${temp[i]["password"]}`
            var flag = false;
            if (email === "" || password==="") {
                break
            }
            else if (email === name2 || password===password2) {
                alert("You have entered correct name")
                flag = true
                break

            }
        }

        if (flag == false) {
            alert("enter valid details ")
        }
    })

}

