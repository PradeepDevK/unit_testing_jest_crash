const { sum, deleteUserById, findUserById } = require("../utils/helper");

let userData = [];
console.log(userData);

beforeAll(() => {
    

    userData= ['Clement', 'Sarah'];
    console.log("runs before all tests", userData)
})

beforeEach(() => {
    console.log("running before each test")
})

afterEach(() => {
    console.log("running after each test")
})

afterAll(() => {
    userData = []
    console.log("runs after all tests have run", userData)
})

describe("Number Operations", () => {
    test('1 + 1 = 2 ', () => {
        let a = 1;
        let b = 1;
        expect(a + b).toBe(2);
    })


    test("5 + 6 != 10", () => {
        let a = 5;
        let b = 6;
        expect(a + b).not.toBe(10)
    })
})

describe("Testing other matcher methods", () => {
    
    test("Testing that a variable is undefined", () => {
        let number = undefined;
        expect(number).not.toBeDefined();
        expect(number).toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    });

    test("Should expect zero to act like zero", () => {
        let number = 0;
        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
        expect(number).not.toBeNull();
        expect(number).toBeFalsy();
        expect(number).not.toBeTruthy();
    })

    test("Number Comparsion", () => {
        const a = 1;
        const b = 2;
        expect(a + b).toBeGreaterThan(2);
        expect(a + b).toBeGreaterThanOrEqual(3);
        expect(a + b).toBeLessThan(10);
        expect(a + b).toBeLessThanOrEqual(5);

        expect(a + b).toBe(3);
        expect(a + b).toEqual(3);
    })

    test("There should be no I in team.", () => {
        let string = 'team';
        expect(string).not.toMatch(/I/i);
    });

    test("There is stop in ChristoPher", () => {
        let string = 'Christopher';
        expect(string).toMatch(/stop/i);
    });

    const shoppingList = ['Milk', 'TrashBags', 'Paper Towels', 'IPhones'];
    test("The Shopping list doesn't have PS4", () => {
        expect(shoppingList).not.toContain('PS4')
        expect(shoppingList).toContain('Milk')
    })

})


describe("Testing Reference Equality", () => {
    const user = {
        name: "Pradeep"
    };
    user['age'] = 30;

    test("Should return a user object with age as  30", () => {
        expect(user).toEqual({
            name: "Pradeep",
            age: 30
        }); 
    });

    test("Should return a user with a name and age key", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
            })
        )
    });

    test("Array Equality", () => {
        const users = [
            "Clement",
            "Sarah",
            "July"
        ];

        const userObjectInArray = [{
            name: "Clement",
            age: 30
        }, {
            name: "Sarah",
            age: 31
        }, {
            name: "July",
            age: 32
        }]

        users.push("Jacob");

        userObjectInArray.push({
            name: "Jacob",
            age: 33
        });

        expect(users).toEqual(["Clement", "Sarah", "July", "Jacob"]);
        expect(users).toEqual(
            expect.arrayContaining(["Jacob"])
        )

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                    age: expect.any(Number)
                })
            ])
        )
    });


})

describe("Testing imported functions", () => {

    const userObjectInArray = [{
        name: "Clement",
        age: 30,
        id: 1
    }, {
        name: "Sarah",
        age: 31,
        id: 2,
    }, {
        name: "July",
        age: 32,
        id: 3
    }];

    test("Sum functions should be add 2 numbers", () => {
        expect(sum(5, 3)).toBe(8)
    })

    test("delete by id  function should delete a user by their id", () => {

        expect(deleteUserById(userObjectInArray, 3)).toEqual(
            [{
                name: "Clement",
                age: 30,
                id: 1
            }, {
                name: "Sarah",
                age: 31,
                id: 2,
            }]
        )
    })

    //TDD
    test("Finds a user by ID from a list of users", () => {
        expect(findUserById(userObjectInArray, 1)).toEqual(
            {
                name: "Clement",
                age: 30,
                id: 1
            }
        )

        expect(findUserById(userObjectInArray, 10)).toBeUndefined()

        expect(deleteUserById(userObjectInArray, 3).length).toBe(2)
    })
});