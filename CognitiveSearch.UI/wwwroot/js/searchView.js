
function onSelectedChanged(event)
{
    const selectedOption = JSON.parse(event.currentTarget.selectedOptions[0].value);
    
    var entitiesContainer = document.getElementById("entities-container");
    deleteAllHtmlElements("entity");

    for (let index = 0; index < selectedOption.named_entities.length; index++) {
        var entityElement = document.createElement("div");
        entityElement.classList.add('entity');

        entityElement.innerText = selectedOption.named_entities[index].text;
        entitiesContainer.appendChild(entityElement);
    }
    
    const pdfViewer = document.getElementById("pdfViewer");

    pdfViewer.src = selectedOption.metadata_storage_path + event.currentTarget.accessKey;
}

function deleteAllHtmlElements(identifier) {
    var entities = document.getElementsByClassName(identifier);

    if (entities.length > 0) {
        for (let i = 0; i < entities.length; i++) {
            entities[i].remove();
        }
    }
}