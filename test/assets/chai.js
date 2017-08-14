import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiPromise from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiPromise);

export default chai.expect;
