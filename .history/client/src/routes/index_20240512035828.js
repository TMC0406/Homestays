import HomePage from "../pages/HomePage/HomePage.tsx";
import SearchPage from "../pages/SearchPage/SearchPage.tsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.tsx";
import Favourite from "../pages/Favourite/Favourite.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import  Register  from "../pages/Register/Register.tsx";

export const routes =  [
    {
        path : "/home",
        page : HomePage,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "/search",
        page : SearchPage,
        isShowHeader : true,
        isShowFooter : true

    },
    {
        path : "/favourite",
        page : Favourite,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "/login",
        page : LoginPage,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "/register",
        page : Register,
        isShowHeader : true,
        isShowFooter : true
    },
    {
        path : "*",
        page : NotFoundPage,
    }
]