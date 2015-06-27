var nodeProto = require('./../../Src/NodeProto.js');

// An ExampleClass for testing purposes.
class ExampleComponent extends nodeProto.Component {
    constructor(el, props) {
        super(el, props)
    }
}

describe('NodeProto: State API', function () {
    let instance;

    beforeEach(() => {
        instance = new ExampleComponent();
    });

    it('should return undefined if no state was set.', function () {
        expect(instance.getState('myState')).toBeUndefined();
    });

    it('should return the value of a state which was previously set.', function () {
        instance.setState('myState', 1);

        expect(instance.getState('myState')).toBe(1);
    });

    afterEach(() => {
        instance = null;
    });
});