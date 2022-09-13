import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { mswServer } from "./mocks";

//** Conditions for mocking API requests **/
beforeEach(() => {
  mswServer.listen();
});

afterEach(() => {
  mswServer.resetHandlers();
});

afterAll(() => {
  mswServer.close();
});
//*****************************************/

//** Mocks IntersectionOberserver API **/
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};
//**************************************/
