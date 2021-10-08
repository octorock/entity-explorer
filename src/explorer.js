import {enemies, npcs, objects} from './enums.js';

let nameByKind = {
    '1': 'PLAYER',
    '3': 'ENEMY',
    '4': 'PROJECTILE',
    '6': 'OBJECT',
    '7': 'NPC',
    '8': 'PLAYER_ITEM',
    '9': 'MANAGER',
};
let colorByKind = [
    '0',
    '#00ff00',
    '2',
    '#ff0000',
    '#0000ff',
    '5',
    '#cccccc',
    '#006600',
    '#000066',
    '#333333',
];

function createManager(entity) {

}
function createEntity(parent, entity, listIndex, entityIndex) {
    kind = parseInt(entity.kind);
    if (kind == 9) {
        createManager(entity);
        return;
    }
    let div = document.createElement('div');
    div.className = 'entity';
    div.id = 'entity_' + listIndex + '_' + entityIndex;
    div.style.left = entity.x.HALF.HI + 'px';
    div.style.top = entity.y.HALF.HI + 'px';
    div.onclick = (event) => {
        selectEntity(listIndex, entityIndex);
        event.stopPropagation();
        return false;
    }
    //console.log(entity.kind +','+colorByKind[entity.kind]);
    div.style.backgroundColor = colorByKind[entity.kind];
    /*let pre = document.createElement('pre');
    
    pre.innerHTML = description;
    div.appendChild(pre);*/
    parent.appendChild(div);
}

selectedListIndex = -1;
selectedEntityIndex = -1;

function selectEntity(listIndex, entityIndex) {
    console.log(listIndex, entityIndex);
    if (selectedEntityIndex != -1) {
        let div = document.getElementById('entity_'+selectedListIndex+'_'+selectedEntityIndex);
        div.classList.remove('selected');
    }
    selectedListIndex = listIndex;
    selectedEntityIndex = entityIndex;
    if (selectedEntityIndex != -1) {
        let div = document.getElementById('entity_'+selectedListIndex+'_'+selectedEntityIndex);
        div.classList.add('selected');
    }
    // build description
    description = '';
    if (listIndex != -1) {
        entity = currentLists[listIndex][entityIndex];
        description += nameByKind[entity.kind] + '\n';
        id = parseInt(entity.id)
        switch (kind) {
            case 3:
                description += enemies[id] + '\n'
                break;
            case 6:
                description += objects[id] + '\n'
                break;
            case 7:
                description += npcs[id] + '\n'
                break;
            default:
                description += id.toString(16) + '\n'
                break;

        }
        description += JSON.stringify(entity, null, 2);
    }
    document.getElementById('details').innerHTML = description;
}

function createRoom(parent, roomControls) {
    div = document.createElement('div');
    div.className = 'room';
    div.style.left = roomControls.roomOriginX + 'px';
    div.style.top = roomControls.roomOriginY + 'px';
    div.style.width = roomControls.width + 'px';
    div.style.height = roomControls.height + 'px';
    parent.appendChild(div);
}
function createScroll(parent, roomControls) {
    div = document.createElement('div');
    div.className = 'screen';
    div.style.left = roomControls.roomScrollX-1 + 'px';
    div.style.top = roomControls.roomScrollY-1 + 'px';
    div.style.width = '240px';
    div.style.height = '160px';
    parent.appendChild(div);
    img = document.getElementById('screenshot');
    img.style.left = roomControls.roomScrollX + 'px';
    img.style.top = roomControls.roomScrollY + 'px';
}


currentLists = []
function showLists(roomControls, lists) {
    currentLists = lists
    var parent = document.getElementById('explorer');
    parent.onclick = () => {selectEntity(-1, -1);}
    createRoom(parent, roomControls);
    createScroll(parent, roomControls);
    lists.forEach((list, listIndex) => {
        list.forEach((entity, entityIndex) => {
            console.log(entity);
            createEntity(parent, entity, listIndex, entityIndex);
        })
    });
}

export {
    showLists
};