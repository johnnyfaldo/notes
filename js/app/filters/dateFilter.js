
let yopaDate = () => {

    return (date) => {

        let dateInQuestion = moment(date);

        let today = moment();
        let yesterday = moment().subtract(1, 'day');

        let dateString = dateInQuestion.format('dd/MM/YYYY'),
            timeString = dateInQuestion.format('HH:mm');

        if(moment(dateInQuestion).isSame(today, 'day')) {

            return 'Today at '+timeString;

        }else if(moment(dateInQuestion).isSame(yesterday, 'day')) {

            return 'Yesterday at '+timeString;

        }else {

            return dateString+' at '+timeString;

        }

    };

};

angular.module(app).filter('yopaDate', yopaDate);
