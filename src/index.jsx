import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/index.jsx";
import { Main } from "./pages/main.jsx";
import { createRoot } from 'react-dom/client';
import { Sluzby } from "./pages/sluzby.jsx";
import { Blog } from "./pages/blog.jsx";
import { About } from "./pages/about.jsx";
import { Contact } from "./pages/contact.jsx";


const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation/>}>
                        <Route index element={<Main/>}/>
                        <Route path="/sluzby" element={<Sluzby/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/o-nas" element={<About/>}/>
                        <Route path="/kontakty" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

createRoot(document.getElementById("app")).render(<App tab="home"/>)