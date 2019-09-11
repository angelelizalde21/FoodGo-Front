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
            const userState = {
                userData: datos,
                __typename: 'userState'
            };
            const data = { userState: userState }
            cache.writeData({ data });
            return userState;
        }
    }
}

export default resolvers;
