 let studentsArray = [{ime:"Veljko",prezime:"Petrović",brojKandidata:"130198722000100"},{ime:"Nikola",prezime:"Janković",brojKandidata:"110399837000200"},{ime:"Aleksandar",prezime:"Milenković",brojKandidata:"210500249000300"},{ime:"Luka",prezime:"Popović",brojKandidata:"240901373000400"},{ime:"Ivan",prezime:"Stojanović",brojKandidata:"280602188000500"},{ime:"Marko",prezime:"Kostić",brojKandidata:"300703423000600"},{ime:"Stefan",prezime:"Đorđević",brojKandidata:"080804145000700"},{ime:"Petar",prezime:"Pavlović",brojKandidata:"170805534000800"},{ime:"Dušan",prezime:"Milošević",brojKandidata:"080606938000900"},{ime:"Miloš",prezime:"Ilić",brojKandidata:"140107784001000"},{ime:"Filip",prezime:"Milićević",brojKandidata:"120908046001100"},{ime:"Lazar",prezime:"Bošković",brojKandidata:"190509422001200"},{ime:"Jovan",prezime:"Marinković",brojKandidata:"180810385001300"},{ime:"Andrija",prezime:"Mladenović",brojKandidata:"270511498001400"},{ime:"Bogdan",prezime:"Simić",brojKandidata:"130312725001500"},{ime:"Nemanja",prezime:"Janjić",brojKandidata:"070713640001600"},{ime:"Đorđe",prezime:"Tomić",brojKandidata:"040414101001700"},{ime:"Ognjen",prezime:"Nikolić",brojKandidata:"260915142001800"},{ime:"Vuk",prezime:"Đorđić",brojKandidata:"130116808001900"},{ime:"Miloš",prezime:"Mitić",brojKandidata:"230117763002000"},{ime:"Uroš",prezime:"Stanković",brojKandidata:"220618746002100"},{ime:"Nenad",prezime:"Vuković",brojKandidata:"070719847002200"},{ime:"Milan",prezime:"Milosavljević",brojKandidata:"090520712002300"},{ime:"Mihajlo",prezime:"Jović",brojKandidata:"030221892002400"},{ime:"Svetozar",prezime:"Marković",brojKandidata:"170722480002500"},{ime:"Predrag",prezime:"Simić",brojKandidata:"100523189002600"},{ime:"Aleksa",prezime:"Kovačević",brojKandidata:"120624593002700"},{ime:"Goran",prezime:"Petrović",brojKandidata:"240725728002800"},{ime:"Dragan",prezime:"Vasić",brojKandidata:"290926471002900"},{ime:"Vasilije",prezime:"Milić",brojKandidata:"120627831003000"},{ime:"Milica",prezime:"Janković",brojKandidata:"190896649000100"},{ime:"Ana",prezime:"Petrović",brojKandidata:"140697760000200"},{ime:"Marija",prezime:"Stojanović",brojKandidata:"080298835000300"},{ime:"Jovana",prezime:"Nikolić",brojKandidata:"220699947000400"},{ime:"Ivana",prezime:"Kostić",brojKandidata:"100500826000500"},{ime:"Sanja",prezime:"Marković",brojKandidata:"140501507000600"},{ime:"Jelena",prezime:"Đorđević",brojKandidata:"270802123000700"},{ime:"Ivona",prezime:"Popović",brojKandidata:"070203604000800"},{ime:"Ivana",prezime:"Milenković",brojKandidata:"030704634000900"},{ime:"Maja",prezime:"Bošković",brojKandidata:"130105714001000"},{ime:"Marija",prezime:"Ilić",brojKandidata:"020206841001100"},{ime:"Milena",prezime:"Marinković",brojKandidata:"220307463001200"},{ime:"Jana",prezime:"Mitić",brojKandidata:"10050863200100"},{ime:"Nemanja",prezime:"Đorđević",brojKandidata:"220719164000100"},{ime:"Dušan",prezime:"Nikolić",brojKandidata:"070820907000200"},{ime:"Aleksa",prezime:"Janković",brojKandidata:"190521947000300"},{ime:"Lazar",prezime:"Vuković",brojKandidata:"300622141000400"},{ime:"Vasilije",prezime:"Stanković",brojKandidata:"230723603000500"},{ime:"Andrija",prezime:"Petrović",brojKandidata:"070624507000600"},{ime:"Ognjen",prezime:"Milošević",brojKandidata:"010325752000700"},{ime:"Miloš",prezime:"Mladenović",brojKandidata:"290426110000800"},{ime:"Luka",prezime:"Ilić",brojKandidata:"240827565000900"},{ime:"Nenad",prezime:"Milenković",brojKandidata:"080928935001000"},{ime:"Goran",prezime:"Stojanović",brojKandidata:"010430418001100"},{ime:"Stefan",prezime:"Jović",brojKandidata:"050831712001200"},{ime:"Vuk",prezime:"Kostić",brojKandidata:"050332314001300"},{ime:"Bogdan",prezime:"Milosavljević",brojKandidata:"100533585001400"},{ime:"Marko",prezime:"Janjić",brojKandidata:"260634864001500"},{ime:"Filip",prezime:"Nikolić",brojKandidata:"220835302001600"},{ime:"Aleksandar",prezime:"Đorđević",brojKandidata:"120536650001700"},{ime:"Petar",prezime:"Tomić",brojKandidata:"140637877001800"},{ime:"Ivan",prezime:"Mitić",brojKandidata:"100438632001900"},{ime:"Uroš",prezime:"Marinković",brojKandidata:"210439490002000"},{ime:"Nikola",prezime:"Milosavljević",brojKandidata:"270340345002100"},{ime:"Mihajlo",prezime:"Kovačević",brojKandidata:"110141932002200"},{ime:"Svetozar",prezime:"Petrović",brojKandidata:"200642555002300"},{ime:"Predrag",prezime:"Janković",brojKandidata:"040643896002400"},{ime:"Nemanja",prezime:"Stanković",brojKandidata:"030744223002500"},{ime:"Vasilije",prezime:"Vuković",brojKandidata:"280545445002600"},{ime:"Aleksa",prezime:"Bošković",brojKandidata:"120946723002700"},{ime:"Luka",prezime:"Mitić",brojKandidata:"020747999002800"},{ime:"Dušan",prezime:"Marković",brojKandidata:"090848312002900"},{ime:"Miloš",prezime:"Ilić",brojKandidata:"150849427003000"},{ime:"Marko",prezime:"Janković",brojKandidata:"310850649003100"},{ime:"Stefan",prezime:"Đorđević",brojKandidata:"260551977003200"},{ime:"Andrija",prezime:"Milenković",brojKandidata:"120452565003300"},{ime:"Lazar",prezime:"Petrović",brojKandidata:"070753896003400"},{ime:"Vuk",prezime:"Stojanović",brojKandidata:"240654153003500"},{ime:"Bogdan",prezime:"Nikolić",brojKandidata:"090455679003600"},{ime:"Nenad",prezime:"Kostić",brojKandidata:"290156936003700"},{ime:"Goran",prezime:"Milosavljević",brojKandidata:"240157251003800"},{ime:"Uroš",prezime:"Ilić",brojKandidata:"130558731003900"},{ime:"Ivan",prezime:"Marinković",brojKandidata:"060759014004000"},{ime:"Mihajlo",prezime:"Vuković",brojKandidata:"170460302004100"},{ime:"Predrag",prezime:"Tomić",brojKandidata:"090961548004200"},{ime:"Nikola",prezime:"Milošević",brojKandidata:"170362083004300"},{ime:"Jelena",prezime:"Petrović",brojKandidata:"130495675001200"},{ime:"Ana",prezime:"Marković",brojKandidata:"250496234001300"},{ime:"Marija",prezime:"Janković",brojKandidata:"030797546001400"},{ime:"Maja",prezime:"Nikolić",brojKandidata:"220398543001500"},{ime:"Ivana",prezime:"Stojanović",brojKandidata:"071099754001600"},{ime:"Tamara",prezime:"Kovačević",brojKandidata:"200300446001700"},{ime:"Sanja",prezime:"Mitić",brojKandidata:"200501221001800"},{ime:"Jana",prezime:"Vuković",brojKandidata:"200202885001900"},{ime:"Milica",prezime:"Đorđević",brojKandidata:"050703343002000"},{ime:"Ivona",prezime:"Milenković",brojKandidata:"100904772002100"},{ime:"Nataša",prezime:"Ilić",brojKandidata:"120105413002200"},{ime:"Marijana",prezime:"Bošković",brojKandidata:"150606237002300"},{ime:"Jovana",prezime:"Tomić",brojKandidata:"300807389002400"},{ime:"Aleksandra",prezime:"Stanković",brojKandidata:"150108880002500"},{ime:"Katarina",prezime:"Janjić",brojKandidata:"050609630002600"},{ime:"Nevena",prezime:"Kostić",brojKandidata:"010610791002700"},{ime:"Milena",prezime:"Milosavljević",brojKandidata:"030911042002800"},{ime:"Tamara",prezime:"Jović",brojKandidata:"020212342002900"},{ime:"Mina",prezime:"Petrović",brojKandidata:"050813564003000"},{ime:"Marija",prezime:"Nikolić",brojKandidata:"300714921003100"},{ime:"Ana",prezime:"Stojanović",brojKandidata:"130315132003200"},{ime:"Jelena",prezime:"Kovačević",brojKandidata:"300816313003300"},{ime:"Ivana",prezime:"Mitić",brojKandidata:"210117454003400"},{ime:"Sanja",prezime:"Vuković",brojKandidata:"040618708003500"},{ime:"Milica",prezime:"Đorđević",brojKandidata:"130219123003600"},{ime:"Tamara",prezime:"Milenković",brojKandidata:"210420551003700"},{ime:"Ivona",prezime:"Ilić",brojKandidata:"020421969003800"},{ime:"Marijana",prezime:"Bošković",brojKandidata:"200722417003900"},{ime:"Jovana",prezime:"Tomić",brojKandidata:"130423648004000"},{ime:"Aleksandra",prezime:"Stanković",brojKandidata:"170624971004100"},{ime:"Katarina",prezime:"Janjić",brojKandidata:"120825347004200"},{ime:"Nevena",prezime:"Kostić",brojKandidata:"100326678004300"},{ime:"Milena",prezime:"Milosavljević",brojKandidata:"150727946004400"},{ime:"Tamara",prezime:"Jović",brojKandidata:"090828171004500"}]
//         {
//                 id: 1,
//                 name: "Sara",
//                 surname: "Milojević",
//                 id_num: "896542375123465"
//         },
//         {
//                 id: 2,
//                 name: "Marko",
//                 surname: "Trninić",
//                 id_num: "795642315684532"
//         },
//         {
//                 id: 3,
//                 name: "Olgica",
//                 surname: "Vešović",
//                 id_num: "894589756321564"
//         },
//         {
//                 id: 4,
//                 name: "Petar",
//                 surname: "Simeunović",
//                 id_num: "562436857126048"
//         },
//         {
//                 id: 5,
//                 name: "Valerija",
//                 surname: "Mirković",
//                 id_num: "403210798536412"
//         }
// ];


function getStudents(){
        let i;
        const studentsListItems = document.getElementsByClassName("students-list-item");
        i = studentsListItems.length;
        let students = retStudentsServer(i);
        listStudentsFromDB(students);
}

function retStudentsServer(i){
        let students = [];
        let imax = i+50;
        if(imax > studentsArray.length)
                imax = studentsArray.length;
        for(i; i<imax; i++)
                students.push(studentsArray[i]);
        return students;
}

function listStudentsFromDB(studentsArray){
        for (student of studentsArray)
                showStudents(student);
}

function showStudents(student){
         const studentsListTemplate = document.getElementById("students-list-template").content;
         const studentsListContainer = document.getElementsByClassName("students-list-container");
         const copySLTemplate = document.importNode(studentsListTemplate, true);
         
         copySLTemplate.querySelector(".students-name").innerText = student.ime;
         copySLTemplate.querySelector(".students-surname").textContent = student.prezime;
         copySLTemplate.querySelector(".students-id").textContent = student.brojKandidata;


         studentsListContainer[0].appendChild(copySLTemplate);
}

const fifthToLastObserver = new IntersectionObserver(entries => {
        const fifthToLast = entries[0];
        if(!fifthToLast.isIntersecting) return;
        getStudents();
        fifthToLastObserver.unobserve(fifthToLast.target);
        fifthToLastObserver.observe(document.querySelector(".students-list-item:last-child"));
}, {
        rootMargin: "200px"
})

getStudents();

fifthToLastObserver.observe(document.querySelector(".students-list-item:last-child"))
