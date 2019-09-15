class GenericModel {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}
const model = new GenericModel("Jerru", 1);
export default model;