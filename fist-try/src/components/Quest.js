
import { quests } from "../data/questData";
/**
 * The Quests needs to have three types of Quests.
 * Daily: Things you should do Daily.
 * Short-terrm: Small Goals required to achieve the primary.
 * Primary: the Main goal
 */
function CurrentQuests(){
    // First thing is primary quest.
    const listItem = quests.map( quest =>
        <li key=
    )
}

class Quest{
    constructor(arc) {
        this._arc = arc;
        this._completion = 0;
        this._subquests =[];
        this._experience = 0;
    }
    get arc() {
        return this._arc;
    }
    get completion(){
        return this._completion;
    }
    get experience(){
        return this._experience;
    }
    set experience(value){
        this.experience = value;
    }
}
class Primary extends Quest{
    constructor(arc){
        super(arc);
    }
}
class  SubQuest extends Quest{
    constructor(arc,name,parent) {
        super(arc);
        this._name = name;
        this._completion = 0;
        this._parent = parent;
        this._time = 0;
        this._skills = [];
        
    }
    get parent(){
        return this._parent;
    }
    get name(){
        return this._name;
    }
    get time(){
        return this._time;
    }
    set time(newTime){
        this._time += newTime;
    }
  

}



export  default Quest;