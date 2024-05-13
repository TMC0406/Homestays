import ManagePostings from "../pages/PersonalPage/components/ManagePostings.tsx"
import EditPersonal from "../pages/PersonalPage/components/EditPersonal.tsx"
import Information from "../pages/PersonalPage/components/Information.tsx"
import DepositHistory from "../pages/PersonalPage/components/DepositHistory.tsx"
import DepositMoney from "../pages/PersonalPage/components/DepositMoney.tsx"
import PaymentHistory from "../pages/PersonalPage/components/PaymentHistory.tsx"
import ServicePriceList from "../pages/PersonalPage/components/ServicePriceList.tsx"
import Contact from "../pages/PersonalPage/components/Contact.tsx"

export const routes =  [
    {
        path : "/personal/ManagePostings",
        pageChild : ManagePostings,
    },
    {
        path : "/personal/EditPersonal",
        pageChild : EditPersonal,
    },
    {
        path : "/personal/Information",
        pageChild : Information,
    },
    {
        path : "/personal/DepositHistory",
        pageChild : DepositHistory,
    },
    {
        path : "/personal/DepositMoney",
        pageChild : DepositMoney,
    },
    {
        path : "/personal/PaymentHistory",
        pageChild : PaymentHistory,
    },
    {
        path : "/personal/ServicePriceList",
        pageChild : ServicePriceList,
    },
    {
        path : "/personal/Contact",
        pageChild : Contact,
    },
]