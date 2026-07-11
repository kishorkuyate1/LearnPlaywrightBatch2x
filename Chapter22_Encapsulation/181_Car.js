class tractor {
    #engine;// # means private in JS, In Typescript - private
    constructor(name, engineName) {
        this.name = name;
        this.#engine = engineName;
    }
    getEngine() {
        return this.#engine;
    }
    setEngineName(nameEngine) {
        this.#engine = nameEngine;
    }

}

let sonalika = new tractor('tractor ', 'Mistubishi s3l2');
console.log(sonalika.getEngine());
sonalika.setEngineName("ITC S3L4");
console.log(sonalika.getEngine());
