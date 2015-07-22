var app = angular.module('BookApp', []);

app.controller('HelloCtrl', ['$scope', function ($scope) {
    $scope.message =  'Hello from contraller'
}]);

app.service('BookService', function () {
    //var this = {}
    this.bookList = [];
    this.addBook = function (book) {
        this.bookList.push(book);
        return this.bookList;
    };
    //return this
});

app.factory('BookFactory', function () {
    var obj = {};
    obj.bookList = [];
    obj.addBook = function (book) {
        this.bookList.push(book);
        return this.bookList;
    };
    return obj;
});

app.factory('Book', function () {
    return function (title, author) {
        return {
            title: title,
            author: author
        }
    };
});

app.controller('BookCtrl', function ($scope, BookService, BookFactory, Book) {
    //BookService.addBook('A');
    //BookService.addBook('B');
    //$scope.books = BookService.bookList;
    //BookFactory.addBook('a');
    //BookFactory.addBook('b');
    //$scope.books = BookFactory.bookList;
    book1 = Book('foo', 'bar');
    book2 = Book('joe', 'doe');
    $scope.books = [book1, book2];
});

