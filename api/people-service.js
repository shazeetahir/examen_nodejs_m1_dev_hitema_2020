const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
    }
    
    getPeople(filters) {
        // To be implemented!
        const b = 0;

        if(Object.keys(filters).length === b)
        { 
            return this.peoples;
        }
        else
        {       const peopleIndex = this.peoples.filter(
                people => people[Object.keys(filters)[0]]===filters[Object.keys(filters)[0]]
            ); return peopleIndex;
        }
    }
}
