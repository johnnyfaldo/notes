
describe('API Service', () => {

    beforeEach(angular.mock.module(app));

    let $state,
        $httpBackend,
        StorageService,
        APIService,
        NoteService;

    beforeEach(module(($urlRouterProvider) => {
        $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject((
        _$state_,
        _$httpBackend_,
        _StorageService_,
        _APIService_,
        _NoteService_
    ) => {

        $state = _$state_;
        $httpBackend = _$httpBackend_;
        StorageService = _StorageService_;
        APIService = _APIService_;
        NoteService = _NoteService_;

    }));

    afterEach(() => {

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();

    });

    describe('.injectToken()', () => {

        it('injects token when present', () => {

            let token = '1234';

            StorageService.set('token', token);

            let expectedHeaders = {Authorization:token};

            let result = APIService.injectToken({});

            expect(result).toEqual(expectedHeaders);

        });

        it('doesn\'t inject token when not present', () => {

            StorageService.delete('token');

            let expectedHeaders = {};

            let result = APIService.injectToken({});

            expect(result).toEqual(expectedHeaders);

        });

    });

    describe('.call()', () => {

        it('makes successful request', () => {

            let expectedResponse = {data: true};

            $httpBackend.when('GET', APIService.domain + 'api/notes').respond(200, expectedResponse);

            APIService.call('GET', 'api/notes').then((response) => {

                expect(response.data).toEqual(expectedResponse);

            });

            $httpBackend.flush();

        });

        it('rejects on non 200 response', () => {

            $httpBackend.when('GET', APIService.domain + 'api/notes').respond(500, {});

            APIService.call('GET', 'api/notes').then((response) => {

                throw new Error('Promise should not be resolved');

            }, (reason) => {

                expect(reason.status).toEqual(500);

            });

            $httpBackend.flush();

        });

    });

});
