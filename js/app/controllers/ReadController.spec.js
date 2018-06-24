describe('Read controller', () => {

    let $controller,
        $scope,
        $state,
        $stateParams,
        NoteService,
        ReadController;

    let note = {
        id:1,
        title:'test',
        content:'some content',
        user:{id:1, name:'John Doe'},
        children:[{
            id:2,
            content:'some more content',
            user:{id:2, name:'Jane Doe'}
        }]
    };

    beforeEach(angular.mock.module(app));

    beforeEach(inject((
        _$state_,
        _$stateParams_,
        _$rootScope_,
        _$controller_,
        _NoteService_
    ) => {

        $state = _$state_;
        $stateParams = _$stateParams_;
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        NoteService = _NoteService_;

        $stateParams.noteId = note.id;
        $stateParams.note = note;

        ReadController = $controller('ReadController', {
            $state:$state,
            $scope:$scope,
            $stateParams:$stateParams,
            NoteService:NoteService
        });

    }));

    it('should be defined', () => {

        expect(ReadController).toBeDefined();

    });

    it('should have note set from params', () => {

        expect($scope.note).toEqual(note);

    });

    it('should have a model for additional notes with parent note id set', () => {

        expect($scope.model).toEqual({
            content:null,
            parent:note.id
        });

    });

    it('shouldn\'t set loading in scope when note is passed in params', () => {

        expect($scope.loading).toBeFalsy();

    });

    it('should be able to open the form for additional notes', () => {

        expect($scope.additionIsActive).toBeFalsy();

        $scope.openAdditional();

        expect($scope.additionIsActive).toBeTruthy();

    });

    it('should be able to close the form for additional notes', () => {

        $scope.openAdditional();

        expect($scope.additionIsActive).toBeTruthy();

        $scope.closeAdditional();

        expect($scope.additionIsActive).toBeFalsy();

    });

    it('should have a submit method', () => {

        expect($scope.submit).toBeDefined();

    });

    it('should create an additional note on submit()', () => {

        spyOn(NoteService, 'create').and.returnValue(new Promise((resolve) => {
            resolve(note);
        }));

        $scope.model = {
            content:'additional content',
            parent:note.id
        };

        $scope.submit(true);

        //check it adds title of parent to child model
        expect($scope.model.title).toEqual(note.title);

    });

});