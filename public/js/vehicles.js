let vehiclesArray = [
    {
        id: 111,
        brand: "CITROEN",
        model: "C3",
        category: "B",
        registration: "BG12345EV",
        registrationDate: "18.07.2023",
        instructors: ["Dragoslav Petronijevic","Dragostav Petronijevic","Dragostav Petronijevic","Milivoje Hadzihafizbegovic",
                    ],
        technicalReview: ["17. 21. 2023.", "17. 33. 2023."]
    },
    {
        id: 44,
        brand: "SUZUKI",
        model: "GSX",
        category: "A",
        registration: "SO89898GG",
        registrationDate: "08.02.2023",
        instructors: ["Miroslav Petronijevic","Rada Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 33,
        brand: "MERCEDES",
        model: "ACTROS",
        category: "C",
        registration: "BG15555WV",
        registrationDate: "18.04.2023",
        instructors: ["Olgica Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 77,
        brand: "AUDI",
        model: "A4",
        category: "B",
        registration: "KG33322AV",
        registrationDate: "18.02.2023",
        instructors: ["Miroslav Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 22,
        brand: "IKARBUS",
        model: "103",
        category: "D",
        registration: "BG12345FF",
        registrationDate: "18.02.2023",
        instructors: ["Laza Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "37. 19. 2023."]
    },
    {
        id: 66,
        brand: "IKARBUS",
        model: "106",
        category: "D",
        registration: "BG12345FF",
        registrationDate: "18.02.2023",
        instructors: ["Laza Petronijevic","Milivoje Hadzihafizbegovic"],
        technicalReview: ["07. 3. 2023.", "17. 19. 2023."]
    }
];

function readVehiclesFromDB(){
    for(let i=0; i<vehiclesArray.length; i++){
        showVehicle(vehiclesArray[i]);
    }
}
readVehiclesFromDB();

function showVehicle(vehicle){
    const vehicleDrivingSchoolTemplate = document.getElementById("vehicle-driving-school-template");
    const vehiclepPototype = vehicleDrivingSchoolTemplate.content.getElementById('vehicle-driving-school');
    const vehiclesDrivingSchoolConteiner = document.getElementById('vehicles-driving-school-conteiner');
    const vehicleDrivingSchoolInstructorsUl = document.getElementsByClassName('vehicle-driving-school-instructors-ul');
    
    const clone = vehiclepPototype.cloneNode(true);
    clone.getElementsByClassName('vehicle-driving-school-registration-h3')[0].innerText = vehicle.registration;
    clone.getElementsByClassName('vehicle-driving-school-registration-h3-date')[0].innerText = vehicle.registrationDate;
    clone.getElementsByClassName('vehicle-driving-school-category')[0].innerText = vehicle.category;
    clone.getElementsByClassName('model')[0].innerText = vehicle.model;
    clone.getElementsByClassName('brand')[0].innerText = vehicle.brand;
    clone.getElementsByClassName('vehicle-driving-school-button-1-id')[0].innerText = vehicle.id;
    clone.getElementsByClassName('vehicle-driving-school-button-2-id')[0].innerText = vehicle.id;
    clone.getElementsByClassName('vehicle-id')[0].innerText = vehicle.id;

    addInstructors(vehicle, clone);
    
    for(let i=0; i<vehicle.technicalReview.length; i++){
        clone.getElementsByClassName('vehicle-driving-school-technical-review-h3')[i].innerText = vehicle.technicalReview[i];
    }
    switch (vehicle.category){
        case 'a': case 'A':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/motor-ilustration.png";
            break;
        case 'b': case 'B':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/car-ilustration.png";
            break;
        case 'c': case 'C':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/truck-ilustration.png";
            break;
        case 'd': case 'D':
            clone.getElementsByClassName("vehicle-driving-school-left-side-img")[0].src = "pictures/vechicle/bus-ilustration.png";
            break;
    }
    vehiclesDrivingSchoolConteiner.appendChild(clone);
}
function addInstructors(vehicle, clone){
    for(const instructor of vehicle.instructors){
        let li=document.createElement('li');
        let input = document.createElement('input');
        input.disabled = true;
        li.appendChild(input);
        input.classList.add('instructor-input');
        clone.getElementsByClassName('vehicle-driving-school-instructors-ul')[0].appendChild(li);
        input.value=instructor;
    }
}


const vehiclesSearchByRegistrationInput = document.getElementById('vehicles-search-by-registration-input');
const vehiclesSearchByBrandInput = document.getElementById('vehicles-search-by-brand-input');
const vehiclesSearchByModelInput = document.getElementById('vehicles-search-by-model-input');
const vehicleDrivingSchool = document.getElementsByClassName('vehicle-driving-school');


const vehiclesSearchByCategorySelect = document.getElementById('vehicles-search-by-category-select');

function sortListOfCategories(){
    let categoryArray=[];
    let j=0;

    for(let i=0; i<vehicleDrivingSchool.length; i++){
        let auxCategory;
        let x=0;
        if(i === 0){
            categoryArray[j++] = vehicleDrivingSchool[i].getElementsByClassName("vehicle-driving-school-category")[0].innerText.toUpperCase();
        }else{
            auxCategory = vehicleDrivingSchool[i].getElementsByClassName("vehicle-driving-school-category")[0].innerText.toUpperCase();
            for(let j=0; j<categoryArray.length; j++){
                if(auxCategory == categoryArray[j]){
                    x=1;
                }
            }
            if(x==0){
                categoryArray[j++] = auxCategory;
            }else{
            }
        }
    }
    categoryArray.sort();
    completeSearchByCategory(categoryArray);
}
sortListOfCategories();

function completeSearchByCategory(categoryArray){
    let duz = categoryArray.length + 2;
    for(let i=0; i<duz; i++){
        let option = document.createElement("option");
        vehiclesSearchByCategorySelect.remove(option);
    }
    let option = document.createElement("option");
    option.text = "Kategorija";
    vehiclesSearchByCategorySelect.add(option);
    for(const category of categoryArray){
        let option = document.createElement("option");
        option.text = category;
        vehiclesSearchByCategorySelect.add(option);
    }
}
function activateSearchByRegistration(){
    vehiclesSearchByRegistrationInput.addEventListener('keyup', search);
}
activateSearchByRegistration();

function activateSearchByCategory(){
    vehiclesSearchByCategorySelect.addEventListener("change", search)
}
activateSearchByCategory();

function activateSearchByBrand(){
    vehiclesSearchByBrandInput.addEventListener("keyup", search)
}
activateSearchByBrand();

function activateSearchByModel(){
    vehiclesSearchByModelInput.addEventListener("keyup", search)
}
activateSearchByModel();

function search(){
    let searchRegistrationContent = vehiclesSearchByRegistrationInput.value.toUpperCase();
    let searchBrandContent = vehiclesSearchByBrandInput.value.toUpperCase();
    let searchModelContent = vehiclesSearchByModelInput.value.toUpperCase();
    let categoryContent = vehiclesSearchByCategorySelect.value;

    for(vehicle of vehicleDrivingSchool){
        let vehicleDrivingSchoolRegistrationH3 = vehicle.getElementsByClassName('vehicle-driving-school-registration-h3')[0].innerText;
        let vehicleDrivingSchoolCategory = vehicle.getElementsByClassName('vehicle-driving-school-category')[0].innerText;
        let vehicleDrivingSchoolBrandH3 = vehicle.getElementsByClassName("brand")[0].innerText;
        let vehicleDrivingSchoolModelH3 = vehicle.getElementsByClassName("model")[0].innerText;

        if((vehicleDrivingSchoolCategory.toUpperCase().indexOf(categoryContent) > -1 || categoryContent == "Kategorija")
            & vehicleDrivingSchoolRegistrationH3.toUpperCase().indexOf(searchRegistrationContent) > -1 
            & vehicleDrivingSchoolBrandH3.toUpperCase().indexOf(searchBrandContent) > -1
            & vehicleDrivingSchoolModelH3.toUpperCase().indexOf(searchModelContent) > -1
            ){
            vehicle.style.display = "";
        }else{
            vehicle.style.display = "none";
        }
    }
}


const vehicleDrivingSchoolButtons1 = document.getElementsByClassName('vehicle-driving-school-button-1');
const vehicleDrivingSchoolInstructors = document.getElementsByClassName('vehicle-driving-school-instructors');
const vehicleDrivingSchoolInstructorsChange = document.getElementsByClassName('vehicle-driving-school-instructors-change');
const vehicleDrivingSchoolInstructorsButton = document.getElementsByClassName('vehicle-driving-school-instructors-button');


function chanegeInstructors(){
    for(const vehicleButtonChange of vehicleDrivingSchoolButtons1){
        vehicleButtonChange.addEventListener('click', (e)=>{
            let vehicle = vehicleButtonChange.parentElement.parentElement.parentElement;      
            let instructorInput = vehicle.getElementsByClassName('instructor-input');
            addLiElementInInstructorUl(vehicle);
            for(let k=0; k<instructorInput.length; k++){
                instructorInput[k].disabled = false;
                instructorInput[0].focus();
            }
            const vehicleDrivingSchoolInstructorsButtonSave = vehicle.getElementsByClassName('vehicle-driving-school-instructors-button');
            vehicleDrivingSchoolInstructorsButtonSave[0].classList.remove('none');
            let instruktorArray = [];

            vehicleDrivingSchoolInstructorsButtonSave[0].addEventListener('click', (e)=>{
                instruktorArray = [];
                for(let i=0; i<instructorInput.length; i++){
                    if(instructorInput[i].value != ''){
                        instruktorArray.push(instructorInput[i].value);
                    }    
                }
                vehicleDrivingSchoolInstructorsButtonSave[0].classList.add('none');
                let vehicleId = vehicle.getElementsByClassName('vehicle-id')[0].innerText;     
                changeInstructorsInDB(instruktorArray, vehicleId);
                clearInstructorsInVehiclesView(vehicleId);
                addInstructorsInVehiclesView(vehicleId);
                for(let i=0; i<instructorInput.length; i++){
                        instructorInput[i].disabled = true;
                }
            });
        })
    };
}
chanegeInstructors();

function addLiElementInInstructorUl(vehicle){
    let vehicleDrivingSchoolInstructorsUl = vehicle.getElementsByClassName('vehicle-driving-school-instructors-ul');
    let li=document.createElement('li');
    let input = document.createElement('input');
    input.placeholder = "Dodaj novog";
    li.appendChild(input);
    input.classList.add('instructor-input-add');
    input.classList.add('instructor-input');
    vehicleDrivingSchoolInstructorsUl[0].appendChild(li);
}

function changeInstructorsInDB(instruktorArray, id){
    for(const vehicle of vehiclesArray){
        if(vehicle.id == id){
            vehicle.instructors = instruktorArray;
        }
    }
}

function clearInstructorsInVehiclesView(id){
    const vehiclesDrivingSchool = document.getElementsByClassName('vehicle-driving-school');
    for(const vehicle of vehiclesDrivingSchool){
        if(vehicle.getElementsByClassName('vehicle-id')[0].innerText == id){
            let instructorInput = vehicle.getElementsByClassName('instructor-input');
            for(const input of instructorInput){
                 input.value = "";
            }
        }
    }
}

function addInstructorsInVehiclesView(id){
    const vehiclesDrivingSchool = document.getElementsByClassName('vehicle-driving-school');
    for(const vehicleOnPage of vehiclesDrivingSchool){
        if(vehicleOnPage.getElementsByClassName('vehicle-id')[0].innerText == id){
            const instructorsInput = vehicleOnPage.getElementsByClassName('instructor-input');
            for(const vehicleOnDb of vehiclesArray){
                if(vehicleOnDb.id == id){
                    for(let i=0; i<vehicleOnDb.instructors.length; i++){
                        instructorsInput[i].value = vehicleOnDb.instructors[i];
                    }
                }
            }
        }
    }
    removeEmptyInstructorInputs(id);
}

function removeEmptyInstructorInputs(id){
    const vehiclesDrivingSchool = document.getElementsByClassName('vehicle-driving-school');
    for(const vehicle of vehiclesDrivingSchool){
        if(vehicle.getElementsByClassName('vehicle-id')[0].innerText == id){
            const instructorsInput = vehicle.getElementsByClassName('instructor-input');
            for(const instructorInput of instructorsInput){
                if(instructorInput.value == ""){
                    instructorInput.parentElement.remove()
                }
            }
        }
    }
}

function clearVehiclesContainer(){
    const vehiclesDrivingSchool = document.getElementsByClassName('vehicle-driving-school');
    const Vlength = vehiclesDrivingSchool.length;
    for(let i=0; i<Vlength; i++){
        vehiclesDrivingSchool[0].remove();
    }
}

const vehicleDrivingSchoolButtons2 = document.getElementsByClassName('vehicle-driving-school-button-2');



function addEventListenerDeleteVehicle(){
    for(const button of vehicleDrivingSchoolButtons2){
        button.addEventListener('click', (e)=>{
            let buttonId = button.getElementsByClassName("vehicle-driving-school-button-2-id")[0].innerText;
            let vehicle = button.parentElement.parentElement.parentElement;
            activateVehicleDeleteDiv(vehicle, buttonId);
        });
    }
}
addEventListenerDeleteVehicle();

function activateVehicleDeleteDiv(vehicle, ID){
    let vehicleDelete = vehicle.getElementsByClassName('vehicle-delete')[0];
    vehicleDelete.classList.remove('none');
    let vehicleDeleteButtonIgnore = vehicle.getElementsByClassName('vehicle-delete-button-ignore')[0];
    vehicleDeleteButtonIgnore.addEventListener('click', (e)=>{
        vehicleDelete.classList.add('none');
    });
    let vehicleDeleteButtonConfirm = vehicle.getElementsByClassName('vehicle-delete-button-confirm')[0];
    vehicleDeleteButtonConfirm.addEventListener('click', (e)=>{
        deleteVehicle(ID);
        vehicleDelete.classList.add('none');
    })
}

function deleteVehicle(id){
    for(let i=0; i<vehiclesArray.length; i++){
        if (id == vehiclesArray[i].id){
            vehiclesArray.splice(i, 1);
        }
    }
    clearVehiclesContainer();
    readVehiclesFromDB();
    chanegeInstructors();
    addEventListenerDeleteVehicle();
    sortListOfCategories();
}
