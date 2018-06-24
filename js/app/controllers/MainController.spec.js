describe('Main controller', () => {

    let $controller,
        $scope,
        $state,
        AuthService,
        StorageService,
        MainController;

    beforeEach(angular.mock.module(app));

    beforeEach(inject((
        _$state_,
        _$rootScope_,
        _$controller_,
        _AuthService_,
        _StorageService_
    ) => {

        $state = _$state_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        AuthService = _AuthService_;
        StorageService = _StorageService_;

        MainController = $controller('MainController', {
            $state:$state,
            $scope:$scope,
            AuthService:AuthService
        });

    }));

    it('should be defined', () => {

        expect(MainController).toBeDefined();

    });

    it('Should have a logout method', () => {

        expect($scope.logout).toBeDefined();

    });

    it('Should log user out with logout()', () => {

        //log user in
        StorageService.set('token', 'wjfhb94');

        expect(AuthService.isAuthenticated()).toEqual(true);

        //log user out
        $scope.logout();

        expect(AuthService.isAuthenticated()).toEqual(false);

    });

});