@ac
class Bork {
    //Property initializer syntax
    instanceProperty = "bork";
    boundFunction = () => {
        return this.instanceProperty;
    };

    a() {}
    b() {}

    //Static class properties
    static staticProperty = "babelIsCool";
    static staticFunction = function() {
        return Bork.staticProperty;
    };
}

export default class Bork2 extends Bork {
    //Property initializer syntax
    #private1 = "bork";
    #private2 = () => {
        return this.instanceProperty;
    };
}
