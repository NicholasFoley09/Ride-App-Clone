import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Login from "../views/Login/Login.vue";
import Location from "../views/Location/Location.vue"
import Booking from "../views/Booking/Booking.vue"
import EmptyChat from "../views/EmptyChat/EmptyChat.vue"
import Chat from "../views/Chat/Chat.vue"
import Welcome from "@/views/Welcome/Welcome.vue";
import SignUp from "@/views/SignUp/SignUp.vue";
import SignIn from "@/views/SignIn/SignIn.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        props: { email: 'me@mail.com', name: 'Patrick' },  
    },

    {
        path: "/login",
        name: "Login",
        component: Login,
        props: { email: 'me@mail.com', name: 'Patrick' },
    },

    {
        path: "/location",
        name: "Location",
        component: Location,
    },

    {
        path: "/booking",
        name: "Booking",
        component: Booking,
        //Implement using composition api
        props: {text: 'Hello'}
    },

    {
        path: "/emptychat",
        name: "EmptyChat",
        component: EmptyChat,
        props:{ name: 'Patrick', car: 'Volkswagen Polo, HS785K'}
    },

    {
        path: "/chat",
        name: "Chat",
        component: Chat,

    },

    {
        path: "/welcome",
        name: "Welcome",
        component: Welcome,
    },

    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
    },

    {
        path: "/signin",
        name: "SignIn",
        component: SignIn,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;