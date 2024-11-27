import "@testing-library/jest-dom/extend-expect";
import { server } from "./mocks/node";

//** Conditions for mocking API requests **/
beforeEach(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
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
