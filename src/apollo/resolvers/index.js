const resolvers = {
    Mutation: {
        setUserLogged: (parent, { logged }, { cache }) => {
            const usserLogged = {
                userLogged: logged,
                __typename: 'loginState'
            };
            const data = { loginState: usserLogged }
            cache.writeData({ data });
            return usserLogged;
        },

        setUserData: (parent, { datos }, { cache }) => {
            const userInLogin = {
                userData: datos,
                __typename: 'userInLogin'
            };
            const data = { userInLogin: userInLogin }
            cache.writeData({ data });
            return userInLogin;
        }
    }
}

export default resolvers;
