
// Pour les profs, le planning comporte la classe, le cours, l'heure , salle 
const profs = [
    { id: 1, nom: 'MBAYE', semaine: '', modules: [1, 2, 3], plannings: [[
                                                                            {
                                                                                cours: "Javascript",
                                                                                classe: "DevWeb",
                                                                                salle: "101",
                                                                                heuredeb: "8H",
                                                                                heureFin: "10H",
                                                                                jour: "lundi",
                                                                             }], [ {
                                                                                cours: "Python",
                                                                                classe: "Gl",
                                                                                salle: "102",
                                                                                heuredeb: "11H",
                                                                                heureFin: "13H",
                                                                                jour : "mardi"

                                                                            }], [ {
                                                                                cours: "Java",
                                                                                classe: "Gl",
                                                                                salle: "102",
                                                                                heuredeb: "8H",
                                                                                heureFin: "10H",
                                                                                jour : "vendredi",

                                                                            }]] },
    { id: 2, nom: 'MOUSSA', semaine: '', modules: [6, 2, 3], plannings: [[
                                                                                {
                                                                                    cours: "Arabe",
                                                                                    classe: "Hackeuse",
                                                                                    salle: "104",
                                                                                    heuredeb: "8H",
                                                                                    heureFin: "10H",
                                                                                    jour : "vendredi",
                                                                                }

                                                                            ], [
                                                                                {
                                                                                    cours: "Python",
                                                                                    classe: "DevWeb",
                                                                                    salle: "101",
                                                                                    heuredeb: "10H",
                                                                                    heureFin: "12H",
                                                                                    jour : "lundi",
                                                                                }
                                                                            ], [

                                                                            ], [
                                                                                {
                                                                                    cours: "Java",
                                                                                    classe: "DevWeb",
                                                                                    salle: "101",
                                                                                    heuredeb: "10H",
                                                                                    heureFin: "14H",
                                                                                    jour : "mardi",
                                                                                }

                                                                            ]] },
    { id: 3, nom: 'MAR', semaine: '', modules: [4, 3, 5], plannings: [[], [], [], []] },
    { id: 4, nom: 'THIORO', semaine: '', modules: [1, 4, 3], plannings: [[], [], [], []] },
    { id: 5, nom: 'ADJA', semaine: '', modules: [1, 3], plannings: [[], [], [], []] },
    { id: 6, nom: 'JEAN Mendy', semaine: '', modules: [1, 3], plannings: [[], [], [], []] },
];



// console.log(profs[1].plannings);
const modules = [
    { id: 1, nom: 'Javascript', semaine: '', plannings: [[], [], [], []] },
    { id: 2, nom: 'Python', semaine: '', plannings: [[], [], [], []] },
    { id: 3, nom: 'Java', semaine: '', plannings: [[], [], [], []] },
    { id: 4, nom: 'PHP', semaine: '', plannings: [[], [], [], []] },
    { id: 5, nom: 'Merise', semaine: '', plannings: [[], [], [], []] },
    { id: 6, nom: 'Arabe', semaine: '', plannings: [[], [], [], []] },
];


const classes = [
    { id: 1, nom: 'DevWeb', semaine: '', plannings: [[], [], [], []], effectif: 30 },
    { id: 2, nom: 'Gl', semaine: '', plannings: [[], [], [], []], effectif: 29 },
    { id: 3, nom: 'Marketing', semaine: '', plannings: [[], [], [], []], effectif: 50 },
    { id: 4, nom: 'Hackeuse', semaine: '', plannings: [[], [], [], []], effectif: 10 },
];

const salles = [
    { id: 1, nom: '101', semaine: '', plannings: [[], [], [], []], effectif: 30 },
    { id: 2, nom: '102', semaine: '', plannings: [[], [], [], []], effectif: 29 },
    { id: 3, nom: '103', semaine: '', plannings: [[], [], [], []], effectif: 50 },
    { id: 4, nom: '104', semaine: '', plannings: [[], [], [], []], effectif: 10 },
    

];

const tabHeureDebut = ["08H","09H","10H","11H","12H","13H","14H","15H","16H","17H"]
const tabHeureFin = tabHeureDebut.pop()
console.log(tabHeureFin)
// const tabHeureFin = ["09H","10H","11H","12H","13H","14H","15H","16H","17H"]
const currentClass =[ {
                            nom : 'DevWeb',
                            semaine : '13/03/2023 - 18/03/2023',
                            effectif: 29,
                            plannings : [
                                            [
                                                {module : 2, prof:2, salle: 4, debut: "H8", fin :"12H"}
                                            ] , [],[],[],
                                            [
                                                { module : 6, prof:2, salle: 4, debut: "10H", duree :"12H"},
                                                {module : 6, prof:2, salle: 4, debut: 12, duree :2}
                                            ],
                                            []
                                        ]
                        },
                        {
                            nom : 'Gl',
                            semaine : '13/03/2023 - 18/03/2023',
                            effectif: 29,
                            plannings : []
                        },
                        {
                            nom : 'Marketing',
                            semaine : '13/03/2023 - 18/03/2023',
                            effectif: 29,
                            plannings : []
                        },
                        {
                            nom : 'Hackeuse',
                            semaine : '13/03/2023 - 18/03/2023',
                            effectif: 29,
                            plannings : []
                        }
];
console.log(currentClass.length)

const tabJour = [];





const tab = [profs,salles,classes,modules];
const creatNew = document.querySelectorAll(".creatNew")
const creat = document.querySelector(".creat");
const plus = document.querySelectorAll(".fa-plus");
const input1 = document.querySelector(".input1"); // Premier input
const input2 = document.querySelector(".input2");//
const container = document.querySelector(".container");
const div2 = document.querySelector(".div2");
const bouleLu = document.querySelector(".fa-circle");
const cours = document.querySelectorAll(".cours");
const heure = document.querySelector(".enfant2");
const blockMode = document.querySelector(".blockMode");
const button = document.querySelectorAll(".button");
const jour = document.querySelectorAll(".jour")
const modeLightSombre = document.querySelector(".modeLightSombre");
const planning = document.querySelector(".planning");
const Enseignant = document.querySelector(".Enseignant");
const salle = document.querySelector(".salle");
const classe = document.querySelector(".classe");
const module = document.querySelector(".module");
const select = document.querySelector("#select");
const boxgauche3 = document.querySelector(".boxgauche3");
const selectinner =document.querySelectorAll(".selectinner");
const aly = document.querySelector(".aly");
const number =document.querySelectorAll(".number");
const Selectionner = document.querySelector(".Selectionner");
const retour = document.querySelector(".retour");
const lundi = document.querySelector(".cours1");
const mardi = document.querySelector(".cours2");
const mercredi = document.querySelector(".cours3");
const jeudi = document.querySelector(".cours4");
const vendredi = document.querySelector(".cours5");
const samedi = document.querySelector(".cours6");
const creatnew5 = document.querySelector("#creatnew5");
const creatnew4 = document.querySelector("#creatnew4");
const creatnew3 = document.querySelector("#creatnew3");
const creatnew2 = document.querySelector("#creatnew2");
const creatnew1 = document.querySelector("#creatnew1")
const day1 =document.querySelector("#jour1");
const spane = document.querySelector("#span");
const smallRoom = document.querySelector(".smallRoom");
const span6 = document.querySelector(".span6");
const creatnew6 = document.querySelector("#creatnew6");
const avertiSelect = document.querySelector(".avertiSelect")
const span3 = document.querySelector(".span3");

// if(creatnew6.value==="")
// {
//     console.log("wou")
// }
creatnew6.addEventListener("change",() =>
{
    if(creatnew6.value === "")
    {
        span6.style.display="block";
        setTimeout(() => {span6.style.display="none";

            
        }, 2000);
    }
    else
    {
        let val=returnId(creatnew6.value,classes)
        console.log(classes[val -1].effectif);
        smallRoom.style.display="none";
    }
    
})




// console.log(number[3].textContent)
for(let i=0; i< tab.length;i++)
{
    number[i].innerHTML = tab[i].length;
}

// Fonction Pour récuperer la valeur qui se trouve sur le select
function getSelectvalue(selectte)
{
    aly.innerHTML= selectte.value;

}


for(let i=0;i< plus.length;i++)
{
    plus[i].addEventListener("click", () => {
        creat.style.display = "block";
        plus[i].style.disabled ="true";
        plus[i].style.color = "red";
        let id = plus[i].getAttribute("id")[4];
        spane.innerText = id;
    }) 
}
              
Selectionner.addEventListener("click", () => {
    if(numberSelect(creatNew) !== 6)
    {
        avertiSelect.style.display= "block";
        setTimeout(() => {
            avertiSelect.style.display= "none";
        }, 2000);
    }
    else{
        
        let val = returnId(creatnew3.value,salles);
        let val1 = salles[val-1].effectif;
        let valC = returnId(creatnew6.value,classes);
        let valC1 = classes[valC-1].effectif;
        if(val1 < valC1)
        {
            smallRoom.style.display="block";
            setTimeout(() => {
                smallRoom.style.display="none";
            }, 2000);
        }
        else
        {

                let objet = {
                            module : returnId(creatnew1.value,modules),
                            prof:returnId(creatnew2.value,profs), 
                            salle: returnId(creatnew3.value,salles),
                            debut: creatnew4.value, 
                            fin : creatnew5.value,

                            }
                            console.log(objet); 
                // for(let i=0; i< currentClass.length; i++)
                // {
                //     if(currentClass[i].nom ===creatnew6.value)
                //     {
                //         currentClass[i].plannings.push(objet);
                //     }
                // }
                    avertiSelect.style.display= "none";
                    const Marinho = document.querySelector(`.cours${spane.innerText}`)
            
                            
                            

                
                            
                            let div = document.createElement("div");
                                div.innerHTML =  `<div class="creatediv"> 
                                                        
                                                    <h2>${creatnew1.value}</h2>
                                                    <h3>${creatnew2.value}</h3>
                                                    <h3>${creatnew3.value}</h3>
                                                    
                                                    <h4>${creatnew4.value}-${creatnew5.value}</h4>
                                                </div>`  ;
                                
                                    let decale1 = (chiffre_heure(creatnew4.value) -8)*10;
                            
                                div.style.margin = `${decale1}%`;
                                // div.style.backgroundColor= `rgb(Math.floor(Math.))`
                                let decale2 = (chiffre_heure(creatnew5.value) - chiffre_heure(creatnew4.value))*10 +5;

                                div.style.width =  `${decale2}%`;
                                Marinho.appendChild(div);
                                creat.style.display = "none";
                }
    }
           
        })


     

retour.addEventListener("click", () => {
    creat.style.display = "none";
    plus.forEach( element => {
        element.style.disabled =" false";
        element.style.color = "green"
    })
})

button.forEach(element => {
    element.addEventListener("click", () => {
      let idd = element.getAttribute("id");
      input2.innerHTML =``;
      let div = document.createElement("option");
      div.innerHTML = ` <option value="" >${idd}</option>`
      
      input2.appendChild(div);
      let idEnseignant = "enseignant";
      let idClasses ="Classes";
      let idSalles = "salles";
      let idModules = "Module";
      div.setAttribute("disabled",true);
      
            chargeDate(profs,input2,idd,idEnseignant);
            chargeDate(classes,input2,idd,idClasses);
            chargeDate(salles,input2,idd,idSalles);
            chargeDate(modules,input2,idd,idModules);
        })
        
    })
            
     
   

function numberSelect(tab)
{
    let i =0;
    tab.forEach(element => {
       if(element.value !== "")
       {
        i++;
       }
    })
    return i;
}


function chargeDate(donnees,EndroitAjout,id,idname)
{
    if(id === idname)
    {
        for( let i=0; i< donnees.length;i++)
    {
        let option = document.createElement("option");
            option.innerHTML=`<option value=""  >${donnees[i].nom}</option>`
            EndroitAjout.appendChild(option);
    }
    }
}



blockMode.addEventListener("click", () => {
    // console.log("apres");
    if (container.style.backgroundColor === "grey") {
        container.style.backgroundColor = "rgba(204,222,240,0.885)";
        div2.style.backgroundColor = "pink";
        bouleLu.style.transform = "translateX(80%)";
        bouleLu.style.transition = "0.3s";
        bouleLu.style.color = "white";
        blockMode.style.backgroundColor = "black";
        heure.style.backgroundColor = "rgba(204,222,240,0.885)";
        heure.style.color = "black";
        planning.style.color = "black";
        cours.forEach(element => {
            element.style.backgroundColor = "rgba(204,222,240,0.885)";

        });
        jour.forEach(element => {
            element.style.color = "black";
        });

        button.forEach(element => {
            element.style.color = "black";
        });


    }
    else {
        container.style.backgroundColor = "grey";
        div2.style.backgroundColor = "#302d2d";
        bouleLu.style.transform = "translateX(-80%)";
        heure.style.backgroundColor = "#5a5759";
        heure.style.color = "white";
        bouleLu.style.color = "black";
        planning.style.color = "white";
        blockMode.style.backgroundColor = "white";
        button.forEach(element => {
            element.style.color = "white";
        });

        cours.forEach(element => {
            element.style.backgroundColor = "grey";

        });

        jour.forEach(element => {
            element.style.color = "white";
        }
        );

    }

})

function chargeDateOp(donnees,EndroitAjout)
{
    
    let option = document.createElement("option");
    option.innerHTML=`<option></option>`;
    // option.disabled= "true";
    EndroitAjout.appendChild(option);
    for( let i=0; i< donnees.length ;i++)
    {
        
        let option = document.createElement("option");
            option.innerHTML=`<option value=""  >${donnees[i]}</option>`
            EndroitAjout.appendChild(option);
    }
}


chargeDateOp(tabHeureDebut,creatNew[3]);





function remplirtab(tabAremplir, tabOrigine)
{
    for( let i=0; i< tabOrigine.length ;i++)
    {
        tabAremplir[i]= tabOrigine[i].nom
    }
}
let tabSAlle = []
remplirtab(tabSAlle,salles)
chargeDateOp(tabSAlle,creatNew[2]);

creatnew3.addEventListener("change", () =>
    {
        if(creatnew3.value==="")
        {
            span3.style.display ="block";
            setTimeout(() => {
                span3.style.display ="none";
            }, 2000);
        }
        // else
        // {
        //     let val = returnId(creatnew3.value,salles);
        //     console.log(salles[val-1].effectif)
        // }
    })

let tabClasse = []
remplirtab(tabClasse,classes);
chargeDateOp(tabClasse,creatNew[5]);
console.log(tabClasse);
// console.log(profs[5].modules.includes(2))
const span1 = document.querySelector(".span1");
creatnew1.addEventListener("change",() => {

    // console.log(creatnew1.value)
    if(creatnew1.value === "")
    {
        span1.style.display="block";
        setTimeout(() => {
            span1.style.display="none";
            
        }, 2000);
    }
    else
    {
        
        creatnew2.innerHTML = "";
        let option = document.createElement("option");
                option.innerHTML=`<option value=""></option>`
                creatnew2.appendChild(option);
        let id = returnId(creatnew1.value,modules);
        let tab = returnAllProfCorresponded(id,profs);
        for(let i=0; i< tab.length; i++)
        {
            let option = document.createElement("option");
                option.innerHTML=`<option value=""  >${tab[i]}</option>`
                creatnew2.appendChild(option);
        }
    }
   //-----------------------------------------------------------------------------------------------------------------------------
    // profs.forEach(prof => {
    //         if(prof.modules.includes())
        
    // });
})

const span2 = document.querySelector(".span2")
creatnew2.addEventListener("change" , () =>
{
    if(creatnew2.value === "")
    {
        
            span2.style.display="block";
            setTimeout(() => {
                span2.style.display="none";
                
            }, 2000);
        
    }
})



// Je définie une fonction qui prend en paramètre une valeur et qui return son id dans le tableau correspondand
// Ici dans notre cas, la fonction va prendre en paramètre un module et va nous retourner son id dans le tableau des modules 



function returnId(string,tab)
{
    let val ="";
    tab.forEach(element => {
        if(element.nom === string)
        {
            val = element.id;
        }
        
    });
    return val;
}
function returnIndice(string,tab)
{
    let val ="";
    for (let i=0; i< tab.length ;i++)
    {
        if(tab[i] === string)
        return i;
    }
   
}
const span4 = document.querySelector(".span4");
creatnew4.addEventListener("change",() => {
    if(creatnew4.value === "")
    {

        
            span4.style.display="block";
            setTimeout(() => {
                span4.style.display="none";
                
            }, 2000);
        
    }
    let indice = returnIndice(creatnew4.value,tabHeureDebut);
    creatnew5.innerHTML = "";
    let option = document.createElement("option");
            option.innerHTML=`<option value="" ></option>`
            creatnew5.appendChild(option);
    for(let i=indice + 1; i < tabHeureDebut.length; i++)
    {
        let option = document.createElement("option");
            option.innerHTML=`<option value=""  >${tabHeureDebut[i]}</option>`
            creatnew5.appendChild(option);
    }
})

const span5 = document.querySelector(".span5");
creatnew5.addEventListener("change" , () =>
{
    if(creatnew5.value === "")
    {
        
            span5.style.display="block";
            setTimeout(() => {
                span5.style.display="none";
                
            }, 2000);
        
    }
})
// console.log(returnIndice("10H",tabHeureDebut));

// fonction qui prends en paramètre une id et un tableau et qui renvoie un tableau qui contient tous les profs dont le module contient cette id
function returnAllProfCorresponded(id,tab)
{
    let tabProfs = [];
    tab.forEach(element => {
        if(element.modules.includes(id))
        {
            tabProfs.push(element.nom);
        }
        
    });
    return tabProfs;
}
//console.table(returnAllProfCorresponded(2,profs))//----------------------------------------------------------------------------------------------------------------------------------------

// //------------------------------------
let tabMod = []
remplirtab(tabMod,modules)
chargeDateOp(tabMod,creatNew[0]);
// //--------------------------------------

//Creer un évènement sur le bouton selectionner pour enregistrer les informations

function findString(tab,string)
{
    
   
    return tab.indexOf(string);
}

function chiffre_heure(heure)
{
    for(let i=0; i< heure.length;i++)
    {
        if(heure[i] ==="H")
        {
            heure[i] = "";
        }
    }
    return parseInt(heure);
}



// function genereCours(string , enseignant,cours, heured, heureF)
// {

//     if(string==="lundi")
//     {
//         lundi.innerHTML="";
//         let div = document.createElement("div");
//             div.innerHTML =  `<div class="creatediv"> 
                                    
//                                 <h2>${enseignant}</h2>
//                                 <h3>${cours}</h3>
//                                 <h4>${heured}-${heureF}</h4>
//             </div>`  ;
            
//                 let decale1 = (chiffre_heure(heured) -7) *5;
//             // div.style.marginLeft = `${(chiffre_heure(heured) - 8)}em`;
//             div.style.marginLeft = `${decale1}em`;
//             let decale2 = (chiffre_heure(heureF) - chiffre_heure(heured))*8;
//             div.style.width =  `${decale2}em`;

//             lundi.appendChild(div)
//     }
//     if(string==="mardi")
//     {
//         mardi.innerHTML = "";
//         let div = document.createElement("div");
//             div.innerHTML =  `<div class="creatediv">
//             <h2>${enseignant}</h2>
//             <h3>${cours}</h3>
//             <h4>${heured}-${heureF}</h4></div>`  ;
            
//             let decale1 = (chiffre_heure(heured) -7) *5;
        
//         div.style.marginLeft = `${decale1}em`;
//         let decale2 = (chiffre_heure(heureF) - chiffre_heure(heured))*8;
//         div.style.width =  `${decale2}em`;
//             mardi.appendChild(div)
//     }
//     if(string==="mercredi")
//     {
//         mercredi.innerHTML ="";
//         let div = document.createElement("div");
//             div.innerHTML =  `<div class="creatediv">
//             <h2>${enseignant}</h2>
//             <h3>${cours}</h3>
//             <h4>${heured}-${heureF}</h4></div>`;
           
//             let decale1 = (chiffre_heure(heured) -7) *5;
//         // div.style.marginLeft = `${(chiffre_heure(heured) - 8)}em`;
//         div.style.marginLeft = `${decale1}em`;
//         let decale2 = (chiffre_heure(heureF) - chiffre_heure(heured))*8;
//         div.style.width =  `${decale2}em`;
            
//             mercredi.appendChild(div)
//     }
//     if(string==="jeudi")
//     {
//         jeudi.innerHTML="";
//         let div = document.createElement("div");
//             div.innerHTML =  `<div class="creatediv">
//             <h2>${enseignant}</h2>
//             <h3>${cours}</h3>
//             <h4>${heured}-${heureF}</h4></div>`  ;
//             let decale1 = (chiffre_heure(heured) -7) *5;
//             div.style.marginLeft = `${decale1}em`;
//             let decale2 = (chiffre_heure(heureF) - chiffre_heure(heured))*8;
//             div.style.width =  `${decale2}em`;

//             jeudi.appendChild(div)
//     }
//     if(string==="vendredi")
//     {
//         vendredi.innerHTML="";
//         let div = document.createElement("div");
//             div.innerHTML =  `<div class="creatediv">
//             <h2>${enseignant}</h2>
//             <h3>${cours}</h3>
//             <h4>${heured}-${heureF}</h4></div>`  ;
//             let decale1 = (chiffre_heure(heured) -7) *5;
//             div.style.marginLeft = `${decale1}em`;
//             let decale2 = (chiffre_heure(heureF) - chiffre_heure(heured))*8;
//             div.style.width =  `${decale2}em`;

//             vendredi.appendChild(div)
//     }
//     if(string === "samedi")
//     {
//         samedi.innerHTML = "";
//         let div = document.createElement("div");
//             div.innerHTML =  `<div class="creatediv">
//             <h2>${enseignant}</h2>
//             <h3>${cours}</h3>
//             <h4>${heured}-${heureF}</h4></div>`  ;
//              let decale1 = (chiffre_heure(heured) -7) *5;
//             div.style.marginLeft = `${decale1}em`;
//             let decale2 = (chiffre_heure(heureF) - chiffre_heure(heured))*8;
//             div.style.width =  `${decale2}em`;

//             samedi.appendChild(div);
//     }

// }
 input2.addEventListener("change", () => {
    let p = tabNom.indexOf(aly.textContent)
    let i =0;
    let j =0;

     if(p!== -1)
     {
        for(i=0;  i < profs[p].plannings.length; i++)
        {
           for( let j=0; j < profs[p].plannings[i].length; j++);
            {
                genereCours(profs[p].plannings[i][j].jour,profs[p].nom,profs[p].plannings[i][j].cours,profs[p].plannings[i][j].heuredeb,profs[p].plannings[i][j].heureFin);
            }
        }
     }
  
 })