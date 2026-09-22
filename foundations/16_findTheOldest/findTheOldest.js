const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const CURRENT_YEAR = (new Date).getFullYear();

        if (!oldest.yearOfDeath) oldest.yearOfDeath = CURRENT_YEAR;
        if (!person.yearOfDeath) person.yearOfDeath = CURRENT_YEAR;

        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const personAge = person.yearOfDeath - person.yearOfBirth

        if (oldestAge < personAge) oldest = person;

        return oldest;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
