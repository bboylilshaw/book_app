angular.module('BookApp').factory('Book', function (railsResourceFactory) {
  return railsResourceFactory({
    url: '/books',
    name: 'book'
  });
});