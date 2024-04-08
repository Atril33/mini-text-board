const User = require('../models/userModel')






const getUser = async () => {

    const users = await User.find({});
    return users;
}

exports.getMessages = async (req, res, next) => {
    const users = await getUser();
    res.render('index', { title: "Mini Messageboard", messages: users });
};

getUser();


exports.postMessage = async (req, res) => {
    const { user, text } = req.body; 
    const createUser = await User.create({
        user: user,
        text: text,
        added: new Date().toString().split(' ').slice(2, 5).join(' ')
    });
    console.log(createUser);
    createUser
    res.redirect('/');
};


