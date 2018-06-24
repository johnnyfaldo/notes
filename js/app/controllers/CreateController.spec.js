
describe('Create controller', () => {

    let $controller,
        $scope,
        $state,
        $httpBackend,
        NoteService,
        CreateController;

    beforeEach(angular.mock.module(app));

    beforeEach(inject((
        _$state_,
        _$rootScope_,
        _$httpBackend_,
        _$controller_,
        _NoteService_,
    ) => {

        $state = _$state_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        NoteService = _NoteService_;

        CreateController = $controller('CreateController', {
            $state:$state,
            $scope:$scope,
            NoteService:NoteService
        });

    }));

    it('should be defined', () => {

        expect(CreateController).toBeDefined();

    });

    it('Should have a model', () => {

        let model = {
            title:null,
            content:null
        };

        expect($scope.model).toEqual(model);

    });

    it('Should have a submit method', () => {

        expect($scope.submit).toBeDefined();

    });

    it('Should create a new note on submit', () => {

        let model = {
           title: 'test',
           content: 'hello'
        };

        $scope.model = model;

        let createdNote = {
           id:1,
           title:model.title,
           content:model.content
        };

        spyOn(NoteService, 'create').and.returnValue(new Promise((resolve) => {
            resolve(createdNote);
        }));

        $scope.submit(true);

        expect(NoteService.create).toHaveBeenCalledWith(model);

    });

    it('should not submit if invalid form', () => {

        spyOn(NoteService, 'create').and.returnValue(new Promise((resolve) => {
            resolve(createdNote);
        }));

        $scope.submit(false);

        expect(NoteService.create).not.toHaveBeenCalled();

    });

});