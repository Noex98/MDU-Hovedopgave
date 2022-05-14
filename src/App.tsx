import { RutinesContextProvider, StoreContextProvider, TasksContextProvider, UserContextProvider } from './myFirebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Require } from './components/Require';

import { 
    HomePage,
    Profile,
    StoreSelector,
    Login
} from './pages';

import { ThemeProvider, GlobalStyles } from './theme';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <UserContextProvider>
                <StoreContextProvider>
                    <RutinesContextProvider>
                        <TasksContextProvider>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/login" element={<Login />} />
                                    <Route
                                        path="/"
                                        element={
                                            <Require loggedIn assignedStore>
                                                <HomePage />
                                            </Require>
                                        }
                                    />
                                    <Route
                                        path="/storeselector"
                                        element={
                                            <Require loggedIn>
                                                <StoreSelector/>
                                            </Require>
                                        }
                                    />
                                    <Route
                                        path="/profile"
                                        element={
                                            <Require loggedIn assignedStore>
                                                <Profile />
                                            </Require>
                                        }
                                    />
                                </Routes>
                            </BrowserRouter>
                        </TasksContextProvider>
                    </RutinesContextProvider>
                </StoreContextProvider>
            </UserContextProvider>
        </ThemeProvider>
    );
}

export default App;
