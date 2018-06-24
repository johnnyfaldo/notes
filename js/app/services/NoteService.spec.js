
describe('Note Service', () => {

    beforeEach(angular.mock.module(app));

    let $state,
        $httpBackend,
        APIService,
        NoteService;

    beforeEach(module(($urlRouterProvider) => {
        $urlRouterProvider.deferIntercept();
    }));

    beforeEach(inject((
        _$state_,
        _$httpBackend_,
        _APIService_,
        _NoteService_
    ) => {

        $state = _$state_;
        $httpBackend = _$httpBackend_;
        APIService = _APIService_;
        NoteService = _NoteService_;

    }));

    afterEach(() => {

        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();

    });

    describe('dateStringToObject()', () => {

        it('turns a date string to a date object', () => {

            let date = '01/01/2001 10:10:00';

            let dateObject = NoteService.dateStringToObject(date);

            expect(typeof dateObject).toEqual('object');

            expect(dateObject.getMonth()).toEqual(0);
            expect(dateObject.getDay()).toEqual(1);
            expect(dateObject.getFullYear()).toEqual(2001);

        });

    });

    describe('index()', () => {

        it('indexes notes', () => {

            let notes = [{
                id:1,
                title:'test note',
                content:'test',
                created_at:'2018-06-23 15:33:25',
                created_by:1,
                parent:null,
                user:{id: 1, name: "Peter Parker", email: "peter@parker.com"}
            },{
                id:2,
                title:'testing',
                content:'test 2',
                created_at:'2018-03-23 12:33:25',
                created_by:2,
                parent:null,
                user:{id: 2, name: "Joe Bloggs", email: "joe@bloggs.com"}
            }];

            let response = {
               data:notes,
               message:'2 notes found.'
            };

            $httpBackend.when('GET', APIService.domain+'api/notes').respond(200, response);

            NoteService.index().then((response) => {

                //service method turns these dates to date objects
                for(let i in notes) {
                    notes[i].created_at = NoteService.dateStringToObject(notes[i].created_at);
                }

                expect(response).toEqual(notes);

            });

            $httpBackend.flush();

        });

    });

    describe('post()', () => {

        it('creates a note', () => {

            let model = {title:'test note', content:'testamundo'};

            let response = {
                data:model,
                message:'Note created.'
            };

            $httpBackend.when('POST', APIService.domain+'api/notes').respond(200, response);

            NoteService.create(model).then((note) => {

                expect(note).toEqual(model);

            });

            $httpBackend.flush();

        });

    });

    describe('show()', () => {

        it('shows a note', () => {

            let note = {id:1, title:'test note', content:'testamundo'};

            let response = {
                data:note,
                message:'Note found.'
            };

            $httpBackend.when('GET', APIService.domain+'api/notes/'+note.id).respond(200, response);

            NoteService.show(note.id).then((response) => {

                expect(response).toEqual(note);

            });

            $httpBackend.flush();

        });

    });

});
