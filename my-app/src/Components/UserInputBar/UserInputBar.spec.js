import {shallow} from 'enzyme';
import {expect} from 'chai';


describe('UserInputBarComponent', () => {
    const sandbox = sinon.createSandbox();
    const onAddTask = sandbox.spy();

    let wrapper
    before(() => {
        wrapper = shallow(<UserInputBar onAddTask={onAddTask} />);
    });
    it('should not call onAddTask when user submits with empty input', () => {
        const userInput = 'abc';
        wrapper.find('.form-submit').simulate('click');
        expect(onAddTask).to.not.have.been.called;
    })
    it('should call onAddTask with updated value user submits', () => {
        const userInput = 'abc';
        wrapper.find('.form-input').value = 'abc';
        wrapper.find('.form-submit').simulate('click');
        expect(onAddTask).to.have.been.calledExactlyWith(userInput)
    })
});
