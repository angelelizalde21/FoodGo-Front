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
        }
    }
}

export default resolvers;
