import { createContext, useEffect, useReducer } from 'react';
import { MatxLoading } from 'app/components';
import {signIn, signUp, confirmSignup, refreshSignin} from './../../auth';

const initialState = {
  user: null,
  isInitialised: false,
  isAuthenticated: false
};

// const isValidToken = (accessToken) => {
//   if (!accessToken) return false;

//   const decodedToken = jwtDecode(accessToken);
//   const currentTime = Date.now() / 1000;
//   return decodedToken.exp > currentTime;
// };

// const setSession = (accessToken) => {
//   if (accessToken) {
//     localStorage.setItem('accessToken', accessToken);
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   } else {
//     localStorage.removeItem('accessToken');
//     delete axios.defaults.headers.common.Authorization;
//   }
// };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const { isAuthenticated, user } = action.payload;
      return { ...state, isAuthenticated, isInitialised: true, user };
    }

    case 'LOGIN': {
      const { user } = action.payload;
      return { ...state, isAuthenticated: true, user };
    }

    case 'LOGOUT': {
      return { ...state, isAuthenticated: false, user: null };
    }

    case 'REGISTER': {
      // const { user } = action.payload;
      // return { ...state, isAuthenticated: true, user };
      return { ...state, isAuthenticated: false, user: null };
    }

    default:
      return state;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: 'JWT',
  login: () => {},
  logout: () => {},
  register: () => {},
  confirmCode: ()=>{},
  reload: () => {}
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const login = async (email, password, remember) => {
    const {name, user} = await signIn(email, password, remember);
    dispatch({ type: 'LOGIN', payload: { name,  user }});
  };


  const register = async (email, username, password) => {
    await signUp(username, email, password) //await axios.post('/api/auth/register', { email, username, password });    
    dispatch({ type: 'REGISTER', payload: {  } });
  };

  const confirmCode = async (email, code) => {
    await confirmSignup(email, code);
  }; 

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };


  useEffect(() => {
    (async () => {
        const res = await refreshSignin();
        
        if(res)
        { dispatch({ type: 'INIT', payload: {...res, isAuthenticated: true}}); }
        else
        { dispatch({ type: 'INIT', payload: {isAuthenticated: false} }) }
    })();
  }, []);

  // SHOW LOADER
  if (!state.isInitialised) return <MatxLoading />;

  return (
    <AuthContext.Provider value={{ ...state, method: 'JWT', login, logout, register, confirmCode }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
