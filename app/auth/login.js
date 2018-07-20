/* global angular */
(function() {
  'use strict';

  var app = angular.module('myApp', ['formly', 'formlyBootstrap'], function config(formlyConfigProvider) {
    // set templates here
    formlyConfigProvider.setType({
      name: 'login',
      templateUrl: 'login.html'
    });
  });
  
  

  app.controller('MainCtrl', function MainCtrl(formlyVersion) {
    var vm = this;
    // funcation assignment
    vm.onSubmit = onSubmit;

    // variable assignment
    vm.author = { // optionally fill in your info below :-)
      name: 'Kent C. Dodds',
      url: 'https://twitter.com/kentcdodds' // a link to your twitter/github/blog/whatever
    };
    vm.exampleTitle = 'Andu';
    vm.env = {
      angularVersion: angular.version.full,
      formlyVersion: formlyVersion
    };

    vm.model = {
      awesome: true
    };
    vm.options = {
      formState: {
        awesomeIsForced: false
      }
    };
    
    vm.fields = [
      {
        key: 'nom',
        type: 'input',
        templateOptions: {
          label: 'Nom',
          placeholder: 'Votre Nom',
          class:"form-control",
        }
      },
      {
        key: 'prenom',
        type: 'input',
        templateOptions: {
          label: 'Prenom',
          placeholder: 'Votre Prenom'
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          placeholder: 'Votre Email'
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Mot de passe',
          placeholder: '*********'
        }
      },
      {
        key: 'nested.story',
        type: 'textarea',
        templateOptions: {
          label: 'Commentaire',
          placeholder: 'Exprimez vous en quelques lignes :-)',
          description: ''
        },
        expressionProperties: {
          'templateOptions.focus': 'formState.awesomeIsForced',
          'templateOptions.description': function(viewValue, modelValue, scope) {
            if (scope.formState.awesomeIsForced) {
              return 'And look! This field magically got focus!';
            }
          }
        }
      },
      {
        key: 'awesome',
        type: 'checkbox',
        templateOptions: { label: '' },
        expressionProperties: {
          'templateOptions.disabled': 'formState.awesomeIsForced',
          'templateOptions.label': function(viewValue, modelValue, scope) {
            if (scope.formState.awesomeIsForced) {
              return 'Too bad, formly is really awesome...';
            } else {
              return 'Je suis d\'accord';
            }
          }
        }
      },
      {
        key: 'Pourquoi pas?',
        type: 'textarea',
        expressionProperties: {
          'templateOptions.placeholder': function(viewValue, modelValue, scope) {
            if (scope.formState.awesomeIsForced) {
              return 'Too bad... It really is awesome! Wasn\'t that cool?';
            } else {
              return 'Tapez... ';
            }
          },
          'templateOptions.disabled': 'formState.awesomeIsForced'
        },
        hideExpression: 'model.awesome',
        templateOptions: {
          label: 'Why Not?',
          placeholder: 'Type in here... I dare you'
        },
        watcher: {
          listener: function(field, newValue, oldValue, formScope, stopWatching) {
            if (newValue) {
              stopWatching();
              formScope.model.awesome = true;
              formScope.model.whyNot = undefined;
              field.hideExpression = null;
              formScope.options.formState.awesomeIsForced = true;
            }
          }
        }
      },
      {
        key: 'custom',
        type: 'custom',
        templateOptions: {
          label: 'Custom inlined',
        }
      },
      {
        key: 'exampleDirective',
        template: '<div example-directive></div>',
        templateOptions: {
          label: 'Example Directive',
        }
      }
    ];

    // function definition
    function onSubmit() {
      alert(JSON.stringify(vm.model), null, 2);
    }
  });

  
  app.directive('exampleDirective', function() {
    return {
      templateUrl: 'example-directive.html'
    };
  });
})();