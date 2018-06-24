
describe('Auth Service', () => {

    beforeEach(angular.mock.module(app));

    let $state,
        $httpBackend,
        APIService,
        AuthService,
        StorageService;

    beforeEach(module(function($urlRouterProvider) {
        $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject((
        _$state_,
        _$httpBackend_,
        _APIService_,
        _AuthService_,
        _StorageService_
    ) => {

        $state = _$state_;
        $httpBackend = _$httpBackend_;
        APIService = _APIService_;
        AuthService = _AuthService_;
        StorageService =  _StorageService_;

    }));

    afterEach(() => {

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();

    });

    describe('login()', () => {

        it('logs user in', () => {

            //make sure no token present
            StorageService.delete('token');

            let model = {'email':'test@login.com', 'password':'test'};

            let tokenResponse = {
                access_token:'dfef1234',
                expires_in: 31536000,
                refresh_token: 'dfef1234',
                token_type: 'Bearer'
            };

            $httpBackend.when('POST', APIService.domain+'oauth/token').respond(200, tokenResponse);

            AuthService.login(model).then((response) => {

               expect(response).toEqual(tokenResponse);

               //assert token has been stored
               expect(StorageService.get('token')).toEqual('Bearer '+response.access_token);

            });

            $httpBackend.flush();

        });

    });

    describe('isAuthenticated()', () => {

        it('knows when user is logged in', () => {

            StorageService.set('token', 'dhfbr284');

            expect(AuthService.isAuthenticated()).toEqual(true);

        });

        it('knows when user is logged out', () => {

            StorageService.delete('token');

            expect(AuthService.isAuthenticated()).toEqual(false);

        });

    });

    describe('logout()', () => {

        it('logs user out', () => {

            StorageService.set('token', 'ehfbd92344');

            expect(AuthService.isAuthenticated()).toEqual(true);

            //logout
            AuthService.logout();

            //check no longer authenticated
            expect(AuthService.isAuthenticated()).toEqual(false);

        });

    });

});
