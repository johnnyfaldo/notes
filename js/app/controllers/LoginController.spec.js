describe('Login controller', () => {

    let $controller,
        $scope,
        $state,
        $httpBackend,
        AuthService,
        LoginController;

    beforeEach(angular.mock.module(app));

    beforeEach(inject((
        _$state_,
        _$rootScope_,
        _$httpBackend_,
        _$controller_,
        _AuthService_,
    ) => {

        $state = _$state_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        AuthService = _AuthService_;

        LoginController = $controller('LoginController', {
            $state:$state,
            $scope:$scope,
            AuthService:AuthService
        });

    }));

    it('should be defined', () => {

        expect(LoginController).toBeDefined();

    });

    it('Should have a model for login', () => {

        let model = {
            username:null,
            password:null
        };

        expect($scope.model).toEqual(model);

    });

    it('Should have a login method', () => {

        expect($scope.login).toBeDefined();

    });

    it('Should log a user in on submit of login()', () => {

        let model = {
           username: 'test.user',
           password: 'secret'
        };

        $scope.model = model;

        spyOn(AuthService, 'login').and.returnValue(new Promise((resolve) => {
            resolve({
                access_token:'123bfff'
            });
        }));

        $scope.login(true);

        expect(AuthService.login).toHaveBeenCalledWith({
            email:model.username,
            password:model.password
        });
        
    });

    it('should not submit if invalid form', () => {

        spyOn(AuthService, 'login').and.returnValue(new Promise((resolve) => {
            resolve();
        }));

        $scope.login(false);

        expect(AuthService.login).not.toHaveBeenCalled();

    });

});