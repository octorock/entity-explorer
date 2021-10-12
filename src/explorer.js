import {enemies, npcs, objects, globalFlags} from './enums.js';

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
    let kind = parseInt(entity.kind);
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

let selectedListIndex = -1;
let selectedEntityIndex = -1;

function getHumanName(entity) {
    let arr = [];
    arr.push(nameByKind[entity.kind]);
    let id = parseInt(entity.id)
    switch (entity.kind) {
        case 3:
            arr.push(enemies[id]);
            break;
        case 6:
            arr.push(objects[id]);
            break;
        case 7:
            arr.push(npcs[id]);
            break;
        default:
            arr.push(id.toString(16));
            break;

    }
    return arr;
}

function selectEntity(listIndex, entityIndex) {
    if (selectedEntityIndex != -1) {
        let div = document.getElementById('entity_'+selectedListIndex+'_'+selectedEntityIndex);
        if (div) {
            div.classList.remove('selected');
        }
    }
    selectedListIndex = listIndex;
    selectedEntityIndex = entityIndex;
    if (selectedEntityIndex != -1) {
        let div = document.getElementById('entity_'+selectedListIndex+'_'+selectedEntityIndex);
        if (div) {
            div.classList.add('selected');
        }
    }
    // build description
    let description = '';
    if (listIndex != -1) {
        let entity = currentLists[listIndex][entityIndex];

        let name = getHumanName(entity);
        description += name[0] + '\n' + name[1] + '\n';
        description += JSON.stringify(entity, null, 2);
    }
    document.getElementById('details').innerHTML = description;
}

function createRoom(parent, roomControls) {
    let div = document.createElement('div');
    div.className = 'room';
    div.style.left = roomControls.roomOriginX + 'px';
    div.style.top = roomControls.roomOriginY + 'px';
    div.style.width = roomControls.width + 'px';
    div.style.height = roomControls.height + 'px';
    parent.appendChild(div);
}
function createScroll(parent, roomControls) {
    let div = document.createElement('div');
    div.className = 'screen';
    div.style.left = roomControls.roomScrollX-1 + 'px';
    div.style.top = roomControls.roomScrollY-1 + 'px';
    div.style.width = '240px';
    div.style.height = '160px';
    parent.appendChild(div);
    let img = document.getElementById('screenshot');
    img.style.left = roomControls.roomScrollX + 'px';
    img.style.top = roomControls.roomScrollY + 'px';

    // Scroll here at the beginning
    parent.scrollLeft = roomControls.roomScrollX;
    parent.scrollTop = roomControls.roomScrollY;
}


function createEntityLists(lists) {
    var parent = document.getElementById('entity-lists');
    parent.innerHTML = '';

    lists.forEach((list, listIndex) => {
        let p = document.createElement('p');
        p.innerHTML = 'List ' + listIndex;
        parent.appendChild(p);
        list.forEach((entity, entityIndex) => {
            let a = document.createElement('a');
            a.onclick = () => {selectEntity(listIndex, entityIndex);};
            let name = getHumanName(entity);
            a.innerHTML =  name[0] + ' ' + name[1];
            parent.appendChild(a);
            parent.appendChild(document.createElement('br'));
        });
    });
}

function showState(name, state) {
    selectEntity(-1, -1);
    document.getElementById('details').innerHTML = name + '\n\n' + JSON.stringify(state, null, 2);
}

function createOtherStates(globals) {
    var parent = document.getElementById('other-states');
    parent.innerHTML = '';
    for (let key in globals) {
        let a = document.createElement('a');
        a.onclick = () => {
            showState(key, globals[key]);
        };
        a.innerHTML = key;
        parent.appendChild(a);
        parent.appendChild(document.createElement('br'));
    }
}

function addHeading(parent, text) {
    let p = document.createElement('p');
    p.innerHTML = text;
    parent.appendChild(p);
}

function createFlags(flags, area) {
    var parent = document.getElementById('flags');
    parent.innerHTML = '';

    addHeading(parent, 'Global Flags');
    for (let i = 0; i < globalFlags.length; i++) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.readOnly = true;
        checkbox.disabled = true;
        checkbox.checked = flags[i] == 1;
        parent.appendChild(checkbox);
        parent.appendChild(document.createTextNode(globalFlags[i]));
        parent.appendChild(document.createElement('br'));
    }

    addHeading(parent, 'Local Flags (Offset: 0x' + area.localFlagOffset.toString(16) + ')');
    for (let i = 0; i < 256; i++) { // TODO determine how many local flags there are in this area?
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.readOnly = true;
        checkbox.disabled = true;
        checkbox.checked = flags[area.localFlagOffset+i] == 1;
        parent.appendChild(checkbox);
        parent.appendChild(document.createTextNode('0x' + i.toString(16)));
        parent.appendChild(document.createElement('br'));
    }
}


let currentLists = []
function showLists(roomControls, lists, globals) {
    var parent = document.getElementById('explorer');

    // Clean up previous
    selectEntity(-1, -1);
    for (let i = parent.childNodes.length -1; i >= 0; i--) {
        let child = parent.childNodes[i];
        if (child.id != 'screenshot') {
            parent.removeChild(child);
        }
    }
    document.getElementById('details').innerHTML = 'Click on an entity to show details here.';

    currentLists = lists
    parent.onclick = () => {selectEntity(-1, -1);}
    createEntityLists(lists);
    createRoom(parent, roomControls);
    createScroll(parent, roomControls);
    lists.forEach((list, listIndex) => {
        list.forEach((entity, entityIndex) => {
            createEntity(parent, entity, listIndex, entityIndex);
        })
    });
    createFlags(globals['gGlobalFlags'], globals['gArea']);
    createOtherStates(globals);
}
export {
    showLists
};