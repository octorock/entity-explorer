let Stats = {
    'walletType': 'u8',
    'heartPieces': 'u8',
    'health': 'u8',
    'maxHealth': 'u8',
    'bombCount': 'u8',
    'arrowCount': 'u8',
    'bombBagType': 'u8',
    'quiverType': 'u8',
    'filler': 'u8[2]',
    'charm': 'u8',
    'unkB': 'u8',
    'itemOnA': 'u8',
    'itemOnB': 'u8',
    'bottles': 'u8[4]',
    'effect': 'u8',
    'filler3': 'u8[5]',
    'rupees': 'u16',
    'field_0x1a': 'u16',
    'charmTimer': 'u16',
    'unkTimer': 'u16',
    'effectTimer': 'u16',
    'filler4': 'u8[4]'
}

let RoomControls = {
    'unk2': 'u16',
    'unk3': 'u8',
    'unk4': 'u8',
    'areaID': 'u8',
    'roomID': 'u8',
    'roomOriginX': 'u16',
    'roomOriginY': 'u16',
    'roomScrollX': 's16',
    'roomScrollY': 's16',
    'unk5': 'u8',
    'unk6': 'u8',
    'unk_10': 'u8',
    'filler': 'u8[3]',
    'screenShakeMagnitude': 'u8',
    'unk7': 'u8',
    'screenShakeTime': 'u16',
    'filler2': 'u16[3]',
    'width': 'u16',
    'height': 'u16',
    'filler3': 'u8[6]',
    'bg3OffsetX': 'SplitWord',
    'bg3OffsetY': 'SplitWord',
    'cameraTarget': 'Entity*',
};

let SplitWord = {
    'WORD': 's32',
    'HALF': {
        'type': 'struct',
        'members': {
            'LO': 's16',
            'HI': 's16',
        }
    },
    'HALF_U': {
        'type': 'struct',
        'members': {
            'LO': 'u16',
            'HI': 'u16',
        }
    },
    'BYTES': {
        'type': 'struct',
        'members': {
            'byte0': 'u8',
            'byte1': 'u8',
            'byte2': 'u8',
            'byte3': 'u8',
        }
    }
}

let Entity = {
    'prev': 'Entity*',
    'next': 'Entity*',
    'kind': 'u8',
    'id': 'u8',
    'type': 'u8',
    'type2': 'u8',
    'action': 'u8',
    'subAction': 'u8',
    'actionDelay': 'u8',
    'field_0xf': 'u8',
    'flags': 'u8',
    'scriptedScene': 'u4',
    'scriptedScene2': 'u4',
    'spriteIndex': 's16',
    'animationState': 'u8',
    'direction': 'u8',
    'field_0x16': 'u8',
    'field_0x17': 'u8',
    'spriteSettings': {
        'type': 'union',
        'members': {
            'raw': 'u8',
            'b': {
                'type': 'struct',
                'members': {
                    'draw': 'u2',
                    'ss2': 'u1',
                    'ss3': 'u1',
                    'shadow': 'u2',
                    'flipX': 'u1',
                    'flipY': 'u1'
                }
            }
        }
    },
    'spriteRendering': {
        'type': 'struct',
        'members': {
            'b0': 'u2',
            'alphaBlend': 'u2',
            'b2': 'u2',
            'b3': 'u2'
        }
    },
    'palette': {
        'type': 'union',
        'members': {
            'raw': 'u8',
            'b': {
                'type': 'struct',
                'members': {
                    'b0': 'u4',
                    'b4': 'u4'
                }
            }
        }
    },
    'spriteOrientation': {
        'type': 'struct',
        'members': {
            'b0': 'u1',
            'b1': 'u5',
            'flipY': 'u2'
        }
    },
    'field_0x1c': 'u8',
    'field_0x1d': 'u8',
    'frameIndex': 'u8',
    'lastFrameIndex': 'u8',
    'field_0x20': 's32',
    'speed': 's16',
    'spriteAnimation': 'u8[3]',
    'spritePriority': {
        'type': 'struct',
        'members': {
            'b0': 'u3',
            'b1': 'u3',
            'b2': 'u2'
        }
    },
    'collisions': 'u16',
    'x': 'SplitWord',
    'y': 'SplitWord',
    'height': 'SplitWord',
    'collisionLayer': 'u8',
    'interactType': 's8',
    'field_0x3a': 'u8',
    'flags2': 'u8',
    'field_0x3c': 'u8',
    'iframes': 's8',
    'field_0x3e': 'u8',
    'damageType': 'u8',
    'field_0x40': 'u8',
    'bitfield': 'u8',
    'field_0x42': 'u8',
    'field_0x43': 'u8',
    'field_0x44': 'u8',
    'currentHealth': 'u8',
    'field_0x46': 'u16',
    'hitbox': 'Hitbox*',
    'field_0x4c': 'Entity*',
    'parent': 'Entity*',
    'attachedEntity': 'Entity*',
    'animIndex': 'u8',
    'frameDuration': 'u8',
    'frames': {
        'type': 'union',
        'members': {
            'all': 'u8',
            'b': {
                'type': 'struct',
                'members': {
                    'f0': 'u1',
                    'f1': 'u5',
                    'f2': 'u1',
                    'f3': 'u1'
                }
            }
        }
    },
    'frameSpriteSettings': 'u8',
    'animPtr': 'Frame*',
    'spriteVramOffset': 'u16',
    'spriteOffsetX': 'u8',
    'spriteOffsetY': 's8',
    'myHeap': 'u32*',
    'field_0x68': 'SplitHWord',
    'field_0x6a': 'SplitHWord',
    'field_0x6c': 'SplitHWord',
    'field_0x6e': 'SplitHWord',
    'field_0x70': 'SplitWord',
    'field_0x74': 'SplitHWord',
    'field_0x76': 'SplitHWord',
    'field_0x78': 'SplitHWord',
    'field_0x7a': 'SplitHWord',
    'field_0x7c': 'SplitWord',
    'field_0x80': 'SplitHWord',
    'field_0x82': 'SplitHWord',
    'cutsceneBeh': 'ScriptExecutionContext*',
    //'cutsceneBeh': 'SplitHWord',
    //'field_0x86': 'SplitHWord',
}

let LinkedList = {
    'last': 'Entity*',
    'first': 'Entity*',
};

let SplitHWord = {
    'HWORD': 'u16',
    'HALF': {
        'type': 'struct',
        'members': {
            'LO': 'u8',
            'HI': 'u8'
        }
    }
}


let Manager = {
    'prev': 'Manager*',
    'next': 'Manager*',
    'kind': 'u8',
    'id': 'u8',
    'unk_0a': 'u8',
    'unk_0b': 'u8',
    'action': 'u8',
    'unk_0d': 'u8',
    'unk_0e': 'u8',
    'unk_0f': 'u8',
    'unk_10': 'u8',
    'unk_11': 'u8[3]',
    'parent': 'Manager*',
    'unk_18': 'u8[8]',
    'independentData': 'u8[32]'
}

let PlayerState = {
    'field_0x0': 'u8[2]',
    'jumpStatus': 'u8',
    'field_0x3': 'u8[2]',
    'heldObject': 'u8',
    'pushedObject': 'u8',
    'field_0x7': 'u8',
    'field_0x8': 'u16',
    'field_0xa': 'u8',
    'keepFacing': 'u8',
    'playerAction': 'u8',
    'field_0xd': 'u8',
    'field_0xe': 'u8',
    'hurtBlinkSpeed': 'u8',
    'field_0x10': 'u8[4]',
    'field_0x14': 'u8',
    'field_0x15': 'u8',
    'startPosX': 'u16',
    'startPosY': 'u16',
    'field_0x1a': 'u8[2]',
    'field_0x1c': 'u8',
    'field_0x1d': 'u8[5]',
    'field_0x22': 'u16[2]',
    'swimState': 'u8',
    'field_0x27': 'u8[5]',
    'field_0x2c': 'u8*',
    'flags': {
        'type': 'union',
        'members': {
            'all': 'u32',
            'b': {
                'type': 'struct',
                'members': {
                    'unk1': 'u1',
                    'unk2': 'u1',
                    'unk4': 'u1',
                    'noMinishCap': 'u1',
                    'pullingState': 'u1',
                    'windyState': 'u1',
                    'filler6': 'u1',
                    'unk7': 'u1',
                    'unk8': 'u1',
                    'unk9': 'u1',
                    'slipperyState': 'u1',
                    'filler11': 'u5',
                    'filler11b': 'u16',
                }
            }
        }
    },
    'field_0x34': 'u8[2]',
    'field_0x36': 's16',
    'field_0x38': 'u8',
    'field_0x39': 'u8',
    'field_0x3a': 'u8',
    'field_0x3b': 'u8',
    'field_0x3c': 'u8[2]',
    'swordGoldParticle': 'u1',
    'swordBlueParticle': 'u1',
    'filler14': 'u6',
    'field_0x3f': 'u8',
    'field_0x40': 'u8[64]',
    'field_0x80': 'u16',
    'field_0x82': 'u8[9]',
    'field_0x8b': 'u8',
    'field_0x8c': 'u32',
    'field_0x90': 'SplitWord',
    'field_0x94': 'u32',
    'field_0x98': 'u16',
    'field_0x9a': 'u16',
    'field_0x9c': 'u32',
    'field_0xa0': 'u8[8]',
    'field_0xa8': 'u8',
    'field_0xa9': 'u8',
    'field_0xaa': 'u8',
    'field_0xab': 'u8',
    'field_0xac': 'u16',
    'field_0xae': 'u16',
}

let RoomVars = {
    'field_0x0': 'u8',
    'filler_0x1': 'u8',
    'field_0x2': 'u8',
    'field_0x3': 'u8',
    'field_0x4': 'u8',
    'filler1': 'u8[1]',
    'itemForSaleIndex': 'u8',
    'field_0x7': 'u8',
    'field_0x8': 'u8',
    'field_0x9': 'u8',
    'unk2': 'u8',
    'filler2': 'u8',
    'field_0xc': 'u16',
    'filler3': 'u8[2]',
    'unk_10': 'u8[4]',
    'roomFlags': 'u32',
    'unk3': 'u32',
    'filler4': 'u8[48]',
    'filler5': 'u8[28]',
    'greatFairyState': 'u32',
    'field_0x6c': 'u32*',
    'field_0x70': 'u32*',
    'field_0x74': 'u32*',
    'field_0x78': 'u32',
    'field_0x79': 'u8[10]',
    'field_0x88': 'void*',
};

let Area = {
    'areaMetadata': 'u8',
    'locationIndex': 'u8',
    'unk': 'u8',
    'regret': 'u8',
    'localFlagOffset': 'u16',
    'filler': 'u8[4]',
    'unk_0a': 'u16',
    'filler3': 'u8[4]',
    'field_0x10': 'u16',
    'curPortalX': 'u16',
    'curPortalY': 'u16',
    'curPortalExitDirection': 'u8',
    'curPortalType': 'u8',
    'field_0x18': 'u8',
    'playShrinkSeq': 'u8',
    'unk1A': 'u8',
    'filler2': 'u8[13]',
    'field_0x28': 'u8',
    'filler4': 'u8[0x834]',
    'musicIndex': 'u32',
    'pMusicIndex': 'u32',
    'filler5': 'u8[0x20]',
    'unk2': 'u32',
    'unk3': 'u32',
    'unk4': 'u32',
};

let TileEntityDefinition = {
    'type': 'u8',
    'param_a': 'u8',
    'param_b': 'u16',
    'param_c': 'u16',
    'param_d': 'u16',
};

let ScriptExecutionContext = {
    'scriptInstructionPointer': 'u16*',
    'intVariable': 'u32',
    'postScriptActions': 'u32',
    'unk_0C': 'u8[0x4]',
    'wait': 'u16',
    'unk_12': 'u16',
    'condition': 'u32',
    'unk_18': 'u8',
    'unk_19': 'u8',
    'unk_1A': 'u8',
    'unk_1B': 'u8',
    'x': 'SplitWord',
    'y': 'SplitWord',
};

let structs = {
    Stats,
    RoomControls,
    LinkedList,
    Entity,
    Manager,
    PlayerState,
    RoomVars,
    Area,
    TileEntityDefinition,
    ScriptExecutionContext
};
let unions = {
    SplitWord,
    SplitHWord
};

module.exports = {
    structs,
    unions
}