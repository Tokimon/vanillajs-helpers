import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import * as chaiPromise from 'chai-as-promised';

chai.use(sinonChai);
chai.use(chaiPromise);

export default chai.expect;
