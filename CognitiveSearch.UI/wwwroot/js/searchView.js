const popupElement = document.createElement("div");
var popOpened = false;
var previousWord = "";

function onSelectedChanged(event) {
    deleteAllHtmlElements();

    const pdfViewer = document.getElementById("pdfViewer");
    const selectedOptionValue = event.currentTarget.selectedOptions[0].value;
    const entitiesTypes = ["party_name", "entity_suffix", "entity_description", "company_number", "role", "jurisdiction", "address", "PhoneNumber", "Email"];

    if (selectedOptionValue === "none") {
        pdfViewer.src = " ";

        return;
    }

    const selectedOption = JSON.parse(selectedOptionValue);
    var entitiesContainer = document.getElementById("entities-container");

    pdfViewer.src = selectedOption.metadata_storage_path + event.currentTarget.accessKey;

    var entities = document.createElement("div");
    entities.classList.add("relations-container");
    entitiesContainer.appendChild(entities);

    popupElement.classList.add("popuptext");
    popupElement.id = "entitypopup";
    popupElement.innerText = selectedOption.content;

    for (let index = 0; index < selectedOption.named_entities.length; index++) {
        if (entitiesTypes.includes(selectedOption.named_entities[index].type)) {
            const entityElement = document.createElement("div");
            entityElement.classList.add('entity');
            entityElement.id = selectedOption.named_entities[index].id;
            entityElement.accessKey = selectedOption.named_entities[index].start + ',' + selectedOption.named_entities[index].end;
            entityElement.innerText = selectedOption.named_entities[index].text;

            entityElement.appendChild(popupElement);
            entities.appendChild(entityElement);

            entityElement.addEventListener('click', onClickEntityHandler);
        }
    }

    emphasizeRelationsBetweenEntities(selectedOption.named_entities_relations);
    pdfViewer.style.height = entitiesContainer.scrollHeight +"px";
}

function onClickEntityHandler(event) {
    //const accessKeys = event.currentTarget.accessKey.split(',');
    //const start = parseInt(accessKeys[0]);
    //const end = parseInt(accessKeys[1]);
    //console.log(popupElement.innerHTML
    popupElement.style.left = (event.x - popupElement.scrollWidth) + "px";
    popupElement.style.top = event.y + "px";
    popupElement.classList.toggle("show");

    if (popOpened == false) {
        previousWord = event.currentTarget.innerText;
        const x = popupElement.innerHTML;
        const y = x.replaceAll(previousWord, previousWord.fontcolor("red"));

        popupElement.innerHTML = y;

        popOpened = true;
    }
    else {
        const x = popupElement.innerHTML;
        const y = x.replaceAll("<font color=\"red\">" + previousWord + "</font>", previousWord);

        popupElement.innerHTML = y;

        popOpened = false;
    }
    
}

function emphasizeRelationsBetweenEntities(relations) {
    var index = 0;
    var colorIndex = 0;

    while (index < relations.length) {
        let leftRelation = relations[index].left;
        let leftEntity = document.getElementById(leftRelation);
        let randomColor = getRandomColor(colorIndex);
        leftEntity.style.backgroundColor = randomColor;

        while (index < relations.length && leftRelation == relations[index].left ) {
            let rightEntity = document.getElementById(relations[index].right);
            rightEntity.style.backgroundColor = randomColor;

            index++;
        }

        colorIndex++;
    }
}

function deleteAllHtmlElements() {
   
    var entities = document.getElementsByClassName("relations-container");

    if (entities.length > 0) {
        entities[0].remove();
    }
}

function getRandomColor(colorIndex) {
    const colors = ["purple", "olive", "teal", "chocolate", "crimson", "gray", "limegreen", "mediumpurple", "wheat", "seagreen", "lightsalmon", "darkred", "hotpink"];

    return colors[colorIndex];
}
