import {join} from 'path';

const signupController = (req, res) => {
    res.render('signup', {title: 'signup'});
}

export {signupController};