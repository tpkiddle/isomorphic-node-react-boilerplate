'use strict';

const sut = require('../../../app/controllers/home');

describe('home controller', function () {

  it('should attach a function to the base path (/)', function () {
    sut.stack[0].route.path.should.equal('/');
  });

  // describe('route handler', function () {

  //   it('should render the home template with the correct view data', function () {

  //     const renderStub = jasmine.createSpy('render'),
  //           flashMock = jasmine.createSpy('flash');

  //     flashMock.and.returnValue(['A test flash message']);

  //     sut.stack[0].route.stack[0].handle(
  //       { flash: flashMock },
  //       { render: renderStub }
  //     );

  //     expect(renderStub).toHaveBeenCalledWith('Home');
  //   });
  // });
});