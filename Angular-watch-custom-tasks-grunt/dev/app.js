alert("injected javascript from vendor side");
myapp = angular.module("myapp", []);

myapp.directive('controls', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "/html-templates/addresslist.html";

    return directive;
});

myapp.directive('maparea', function() {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "/html-templates/mapFrame.html";

    return directive;
});
