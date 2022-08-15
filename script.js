const firebaseConfig = {
    apiKey: "AIzaSyC-BnTDHpxBIwAzulQVTFCy0fVWzgknYlE",
    authDomain: "natullie.firebaseapp.com",
    projectId: "natullie",
    storageBucket: "natullie.appspot.com",
    messagingSenderId: "810635702244",
    appId: "1:810635702244:web:57bc2c46f8d27596f321f1"
    
  };

  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

db.collection("oils").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        let htmlProducts ='';
        htmlProducts += '<div class="col-6 col-md-4 col-lg-3 p-2">'
        htmlProducts += '   <div onclick="activeModal()" class="item">'
        htmlProducts += '       <div class="card bg-light text-white">'
        htmlProducts += '           <img id="h-image" class="card-img" src="img/'+doc.data().image+'.png" alt="Imagem do card">'
        htmlProducts += '           <div class="card-img-overlay align-bottom">'
        htmlProducts += '               <h5 id="h-name" class="bg-secondary">'+doc.data().name+'</h5>'
        htmlProducts += '           </div>'
        htmlProducts += '       </div>'
        htmlProducts += '   </div>'
        htmlProducts += '   <div class="d-none">'
        htmlProducts += '       <h2 id="h-subname">'+doc.data().subname+'</h2>'
        htmlProducts += '       <p id="h-description">'+doc.data().description+'</p>'
        htmlProducts += '       <p id="h-body">'+doc.data().body+'</p>'
        htmlProducts += '       <p id="h-mind">'+doc.data().mind+'</p>'
        htmlProducts += '       <p id="h-skin">'+doc.data().skin+'</p>'
        htmlProducts += '   </div>'
        htmlProducts += '</div>'
        document.getElementById("lista").innerHTML+=htmlProducts;
    });
});


var modal = document.querySelector(".product-modal")

function activeModal(){
    let name =document.getElementById("h-name").innerText;
    let image = document.getElementById("h-image").src.toString();
    let subname = document.getElementById("h-subname").innerText
    let description = document.getElementById("h-description").innerText
    let body = document.getElementById("h-body").innerText
    let mind = document.getElementById("h-mind").innerText
    let skin = document.getElementById("h-skin").innerText
    modal.classList.toggle("active")
    document.getElementById("product-name").innerHTML=name
    document.getElementById("product-subname").innerHTML='<i>'+subname+'</i>'
    document.getElementById("product-name2").innerHTML=name
    document.getElementById("product-subname2").innerHTML=subname

    document.getElementById("product-image").setAttribute("src", image)

    document.getElementById("product-description").innerHTML=description

    document.getElementById("product-body").innerHTML=body
    document.getElementById("product-mind").innerHTML=mind
    document.getElementById("product-skin").innerHTML=skin


}


function cadastrarParceiro() {
    let inputName = document.querySelector("#GET-name").value;

    let inputSubname = document.querySelector("#GET-subname").value;
    let inputImage = document.querySelector("#GET-image").value;

    let inputDescription = document.querySelector("#GET-description").value;

    let inputBody = document.querySelector("#GET-body").value;
    let inputMind = document.querySelector("#GET-mind").value;
    let inputSkin = document.querySelector("#GET-skin").value;



    db.collection("oils").doc(inputName).set({
        name: inputName,
        subname: inputSubname,
        image: inputImage,
        description: inputDescription,
        body: inputBody,
        mind: inputMind,
        skin: inputSkin
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}