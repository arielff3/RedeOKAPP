// /* eslint-disable react/forbid-prop-types */
// import React, {createContext, useState, useContext} from 'react';
// import PropTypes from 'prop-types';
// import {toast} from 'react-toastify';
// import api from '~/services/api';

// const AuthContetx = createContext({});

// export const AuthProvider = ({children}) => {
//   const [success, setSuc] = useState(localStorage.getItem('success'));

//   async function signIn({username, password}) {
//     try {
//       const response = await api.post('auth', {
//         username,
//         password,
//       });
//       const {token} = response.data;

//       api.defaults.headers.Authorization = `JWT ${token}`;

//       localStorage.setItem('token', token);
//       localStorage.setItem('success', true);
//       setSuc(true);
//     } catch (err) {
//       toast.error('Usuário e/ ou Senha inválidos');
//     }
//   }

//   async function signOut() {
//     try {
//       setSuc(false);
//       localStorage.clear();
//     } catch (err) {
//       toast.error('Error');
//     }
//   }

//   return (
//     <AuthContetx.Provider value={{signed: success, signIn, signOut}}>
//       {children}
//     </AuthContetx.Provider>
//   );
// };

// export function useAuth() {
//   const context = useContext(AuthContetx);

//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return context;
// }

// export default AuthContetx;

// AuthProvider.propTypes = {
//   children: PropTypes.array.isRequired,
// };
