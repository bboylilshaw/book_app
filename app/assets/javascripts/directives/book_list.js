angular.module('BookApp')
  .directive('bookList', function (Book) {
    return {
      restrict: 'E',
      transclude: true,
      link: function (scope, element, attrs) {
        console.log('enter directive link function');
        Book.query().then(function (data) {
          console.log(data);
          scope.books = data;
        }, function (err) {
          console.log(err);
        });
        //$http.get('/books').
        //  success(function(data, status, headers, config) {
        //    console.log(data);
        //    scope.books = data;
        //  }).
        //  error(function(err, status, headers, config) {
        //    console.log(err);
        //  });
      },
      template: '<ul ng-repeat="book in books">' +
                '  <li>{{book.title}} -- {{book.author}}</li>' +
                '</ul>'
    };
  });