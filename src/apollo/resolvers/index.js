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
        },
        setBuzonData:  (parent, { datos }, { cache }) => {
            const buzonState = {
                buzonData: datos,
                __typename: 'buzonState'
            };
            const data = { buzonState: buzonState }
            cache.writeData({ data });
            return buzonState;
        },
    }
}

export default resolvers;
